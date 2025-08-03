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
    const requiredFields = ['name', 'email', 'subject', 'message']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
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
      body.name,
      body.email,
      body.phone || '',
      body.subject,
      body.message,
      'New', // Status
    ]

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Contact!A:G', // Adjust range based on your sheet structure
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    })

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}