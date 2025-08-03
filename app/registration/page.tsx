'use client'

import { useState } from 'react'

export default function Registration() {
  // Helper function to calculate age from date of birth
  const calculateAge = (dateOfBirth: string): number => {
    if (!dateOfBirth) return 0
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    program: '',
    experience: '',
    preferredMode: '',
    parentGuardianName: '',
    relationshipToStudent: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalConditions: '',
    hearAboutUs: '',
    additionalNotes: '',
    // Consent checkboxes
    parentalConsent: false,
    medicalConsent: false,
    privacyConsent: false,
    photographyConsent: false,
    termsConsent: false,
    feeAgreement: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          program: '',
          experience: '',
          preferredMode: '',
          parentGuardianName: '',
          relationshipToStudent: '',
          emergencyContact: '',
          emergencyPhone: '',
          medicalConditions: '',
          hearAboutUs: '',
          additionalNotes: '',
          // Consent checkboxes
          parentalConsent: false,
          medicalConsent: false,
          privacyConsent: false,
          photographyConsent: false,
          termsConsent: false,
          feeAgreement: false
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{padding: '4rem 0'}}>
        <div className="container">
          <h1>Student Registration</h1>
          <p>Join the Rhythm Raga Family - Start Your Musical Journey Today!</p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {/* Form Section */}
            <div>
              <form onSubmit={handleSubmit} className="registration-form">
                <h2 className="mb-2">Registration Form</h2>
                
                {/* Personal Information */}
                <div className="form-section">
                  <h3>Personal Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="grid grid-2">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="dateOfBirth" className="form-label">Date of Birth *</label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="form-input"
                        max={new Date().toISOString().split('T')[0]} // Cannot be future date
                        required
                      />
                      {formData.dateOfBirth && (
                        <p style={{fontSize: '0.85rem', color: '#666', marginTop: '0.25rem'}}>
                          Age: {calculateAge(formData.dateOfBirth)} years
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Parent/Guardian Information for Minors */}
                  <div className="form-group">
                    <p className="form-note" style={{fontSize: '0.9rem', color: '#666', marginBottom: '1rem'}}>
                      <strong>For students under 18:</strong> Parent/Guardian information is required
                    </p>
                  </div>

                  <div className="grid grid-2">
                    <div className="form-group">
                      <label htmlFor="parentGuardianName" className="form-label">
                        Parent's / Guardian's Name {calculateAge(formData.dateOfBirth) < 18 ? '*' : ''}
                      </label>
                      <input
                        type="text"
                        id="parentGuardianName"
                        name="parentGuardianName"
                        value={formData.parentGuardianName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Parent or Guardian's full name"
                        required={calculateAge(formData.dateOfBirth) < 18}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="relationshipToStudent" className="form-label">
                        Relationship to Student {calculateAge(formData.dateOfBirth) < 18 ? '*' : ''}
                      </label>
                      <select
                        id="relationshipToStudent"
                        name="relationshipToStudent"
                        value={formData.relationshipToStudent}
                        onChange={handleChange}
                        className="form-select"
                        required={calculateAge(formData.dateOfBirth) < 18}
                      >
                        <option value="">Select relationship...</option>
                        <option value="mother">Mother</option>
                        <option value="father">Father</option>
                        <option value="guardian">Legal Guardian</option>
                        <option value="grandparent">Grandparent</option>
                        <option value="aunt-uncle">Aunt/Uncle</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Program Selection */}
                <div className="form-section">
                  <h3>Program Details</h3>
                  
                  <div className="form-group">
                    <label htmlFor="program" className="form-label">Select Program *</label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Choose a program...</option>
                      <option value="indian-vocal">Indian Vocal Music</option>
                      <option value="bollywood-dance-adult">Bollywood Dance - Adults</option>
                      <option value="bollywood-dance-kids">Bollywood Dance - Kids</option>
                      <option value="tabla">Tabla</option>
                      <option value="guitar">Guitar</option>
                      <option value="wedding-choreography">Wedding Choreography</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="experience" className="form-label">Previous Experience</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select your level...</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="some-experience">Some Experience (1-2 years)</option>
                      <option value="intermediate">Intermediate (3-5 years)</option>
                      <option value="advanced">Advanced (5+ years)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredMode" className="form-label">Preferred Mode *</label>
                    <select
                      id="preferredMode"
                      name="preferredMode"
                      value={formData.preferredMode}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select preferred mode...</option>
                      <option value="in-person">In-person</option>
                      <option value="online">Online</option>
                      <option value="hybrid">Hybrid (combination of both)</option>
                    </select>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="form-section">
                  <h3>Emergency Contact (Required for minors)</h3>
                  
                  <div className="grid grid-2">
                    <div className="form-group">
                      <label htmlFor="emergencyContact" className="form-label">Emergency Contact Name</label>
                      <input
                        type="text"
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="emergencyPhone" className="form-label">Emergency Contact Phone</label>
                      <input
                        type="tel"
                        id="emergencyPhone"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="form-section">
                  <h3>Additional Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="medicalConditions" className="form-label">
                      Medical Conditions / Allergies (if any)
                    </label>
                    <textarea
                      id="medicalConditions"
                      name="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      className="form-textarea"
                      rows={3}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hearAboutUs" className="form-label">How did you hear about us?</label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select an option...</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="friend-referral">Friend/Family Referral</option>
                      <option value="flyer">Flyer/Advertisement</option>
                      <option value="event">Community Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="additionalNotes" className="form-label">
                      Additional Notes / Special Requests
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      className="form-textarea"
                      rows={4}
                      placeholder="Tell us about your goals, specific songs you'd like to learn, or any other information that would help us serve you better..."
                    />
                  </div>
                </div>

                {/* Consent and Agreements */}
                <div className="form-section">
                  <h3>Consent and Agreements</h3>
                  <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem'}}>
                    Please read and check all applicable consent forms and agreements below:
                  </p>

                  {/* Parental Consent - Show only for minors */}
                  {calculateAge(formData.dateOfBirth) < 18 && (
                    <div className="form-group checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="parentalConsent"
                          checked={formData.parentalConsent}
                          onChange={handleChange}
                          className="form-checkbox"
                          required={calculateAge(formData.dateOfBirth) < 18}
                        />
                        <span className="checkbox-text">
                          <strong>Parental Consent (for minors):</strong> I give permission for my child to participate in Rhythm Raga Academy's classes and activities. *
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Medical Consent */}
                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="medicalConsent"
                        checked={formData.medicalConsent}
                        onChange={handleChange}
                        className="form-checkbox"
                        required
                      />
                      <span className="checkbox-text">
                        <strong>Medical Consent:</strong> In case of emergency, I authorize the Academy to take necessary medical action. *
                      </span>
                    </label>
                  </div>

                  {/* Privacy & Data Consent */}
                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={handleChange}
                        className="form-checkbox"
                        required
                      />
                      <span className="checkbox-text">
                        <strong>Privacy & Data Consent:</strong> I consent to Rhythm Raga Academy collecting and storing my personal information in compliance with privacy laws. *
                      </span>
                    </label>
                  </div>

                  {/* Photography & Recording Consent */}
                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="photographyConsent"
                        checked={formData.photographyConsent}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="checkbox-text">
                        <strong>Photography & Recording Consent:</strong> I consent to my/my child's photographs, videos, or audio recordings being used for Academy's promotional or educational purposes. 
                        <em style={{display: 'block', fontSize: '0.85rem', color: '#888', marginTop: '0.25rem'}}>
                          (Optional - you can opt-out by leaving this unchecked)
                        </em>
                      </span>
                    </label>
                  </div>

                  {/* Terms & Conditions Agreement */}
                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="termsConsent"
                        checked={formData.termsConsent}
                        onChange={handleChange}
                        className="form-checkbox"
                        required
                      />
                      <span className="checkbox-text">
                        <strong>Terms & Conditions / Code of Conduct Agreement:</strong> I have read and agree to abide by the Academy's rules and policies. *
                      </span>
                    </label>
                  </div>

                  {/* Fee Payment Agreement */}
                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="feeAgreement"
                        checked={formData.feeAgreement}
                        onChange={handleChange}
                        className="form-checkbox"
                        required
                      />
                      <span className="checkbox-text">
                        <strong>Fee Payment Agreement:</strong> I understand and agree to the fee structure and payment terms of Rhythm Raga Academy. *
                      </span>
                    </label>
                  </div>

                  <p style={{fontSize: '0.85rem', color: '#888', marginTop: '1rem'}}>
                    * Required fields
                  </p>
                </div>

                {/* Submit Button */}
                <div className="form-group">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{width: '100%', padding: '1rem'}}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="alert alert-success">
                    <p>✅ Registration submitted successfully! We'll contact you within 24 hours to confirm your enrollment.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-error">
                    <p>❌ There was an error submitting your registration. Please try again or contact us directly.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Information Section */}
            <div>
              <div className="card" style={{position: 'sticky', top: '100px'}}>
                <h3>What Happens Next?</h3>
                <ol style={{paddingLeft: '1.5rem', marginBottom: '2rem'}}>
                  <li style={{marginBottom: '1rem'}}>
                    <strong>Registration Review:</strong> We'll review your application within 24 hours.
                  </li>
                  <li style={{marginBottom: '1rem'}}>
                    <strong>Contact & Scheduling:</strong> Our team will call you to discuss scheduling and answer any questions.
                  </li>
                  <li style={{marginBottom: '1rem'}}>
                    <strong>Trial Class:</strong> We'll schedule a trial class to ensure the program is a good fit.
                  </li>
                  <li style={{marginBottom: '1rem'}}>
                    <strong>Enrollment:</strong> Once confirmed, we'll complete your enrollment and payment setup.
                  </li>
                </ol>

                <h4>Registration Requirements:</h4>
                <ul style={{paddingLeft: '1.5rem', marginBottom: '2rem'}}>
                  <li>Completed registration form</li>
                  <li>Photo ID (for adults) or birth certificate (for minors)</li>
                  <li>Emergency contact information (required for minors)</li>
                  <li>Medical clearance (if applicable)</li>
                </ul>

                <h4>Payment Information:</h4>
                <p>
                  We accept cash, check, or card payments. Payment plans available for longer programs.
                </p>

                <div className="mt-2">
                  <h4>Questions?</h4>
                  <p>Contact us at:</p>
                  <p>📧 <strong>mansibh10@gmail.com</strong></p>
                  <p>📞 <strong>+61 402 286 502</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}