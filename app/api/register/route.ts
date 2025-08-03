import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const MAX_REQUESTS = 3 // Maximum 3 submissions per 15 minutes per IP

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot spam protection - if website field is filled, it's likely spam
    if (body.website && body.website.trim() !== '') {
      console.log('Spam detected via honeypot field:', body.website)
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }

    // Rate limiting by IP address
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'
    const now = Date.now()
    const userLimit = rateLimitMap.get(clientIP)

    if (userLimit) {
      if (now < userLimit.resetTime) {
        if (userLimit.count >= MAX_REQUESTS) {
          console.log(`Rate limit exceeded for IP: ${clientIP}`)
          return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            { status: 429 }
          )
        }
        userLimit.count++
      } else {
        // Reset the limit
        userLimit.count = 1
        userLimit.resetTime = now + RATE_LIMIT_WINDOW
      }
    } else {
      // First request from this IP
      rateLimitMap.set(clientIP, {
        count: 1,
        resetTime: now + RATE_LIMIT_WINDOW
      })
    }

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'dateOfBirth', 'program', 'preferredMode']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate consent fields
    const requiredConsents = ['medicalConsent', 'privacyConsent', 'termsConsent', 'feeAgreement']
    for (const consent of requiredConsents) {
      if (!body[consent]) {
        return NextResponse.json(
          { error: `Missing required consent: ${consent}` },
          { status: 400 }
        )
      }
    }

    // Calculate age from date of birth
    const calculateAge = (dateOfBirth: string): number => {
      const today = new Date()
      const birthDate = new Date(dateOfBirth)
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    }

    // For minors, validate additional required fields
    const age = calculateAge(body.dateOfBirth)
    if (age < 18) {
      const minorRequiredFields = ['parentGuardianName', 'relationshipToStudent', 'parentalConsent']
      for (const field of minorRequiredFields) {
        if (!body[field]) {
          return NextResponse.json(
            { error: `Missing required field for minors: ${field}` },
            { status: 400 }
          )
        }
      }
    }

    // Setup Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    // Prepare row data
    const currentDate = new Date().toLocaleString('en-AU', {
      timeZone: 'Australia/Sydney',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })

    const rowData = [
      currentDate, // Timestamp
      body.fullName,
      body.email,
      body.phone,
      body.dateOfBirth,
      age, // Calculated age
      body.program,
      body.experience || '',
      body.preferredMode,
      body.parentGuardianName || '',
      body.relationshipToStudent || '',
      body.emergencyContact || '',
      body.emergencyPhone || '',
      body.medicalConditions || '',
      body.hearAboutUs || '',
      body.additionalNotes || '',
      // Consent fields
      body.parentalConsent ? 'Yes' : 'No',
      body.medicalConsent ? 'Yes' : 'No',
      body.privacyConsent ? 'Yes' : 'No',
      body.photographyConsent ? 'Yes' : 'No',
      body.termsConsent ? 'Yes' : 'No',
      body.feeAgreement ? 'Yes' : 'No',
      'New', // Status
    ]

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Registrations!A:W', // Updated range to accommodate new fields (23 columns)
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    })

    return NextResponse.json({ success: true, message: 'Registration submitted successfully' })
  } catch (error) {
    console.error('Error submitting registration:', error)
    return NextResponse.json(
      { error: 'Failed to submit registration' },
      { status: 500 }
    )
  }
}