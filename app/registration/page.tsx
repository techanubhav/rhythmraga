'use client'

import { useState } from 'react'

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    program: '',
    experience: '',
    preferredSchedule: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalConditions: '',
    hearAboutUs: '',
    additionalNotes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
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
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          program: '',
          experience: '',
          preferredSchedule: '',
          emergencyContact: '',
          emergencyPhone: '',
          medicalConditions: '',
          hearAboutUs: '',
          additionalNotes: ''
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
                  
                  <div className="grid grid-2">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
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
                      <label htmlFor="age" className="form-label">Age *</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="form-input"
                        min="4"
                        max="99"
                        required
                      />
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
                    <label htmlFor="preferredSchedule" className="form-label">Preferred Schedule</label>
                    <select
                      id="preferredSchedule"
                      name="preferredSchedule"
                      value={formData.preferredSchedule}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select preferred timing...</option>
                      <option value="morning-weekday">Morning Weekdays</option>
                      <option value="evening-weekday">Evening Weekdays</option>
                      <option value="weekend-morning">Weekend Morning</option>
                      <option value="weekend-evening">Weekend Evening</option>
                      <option value="flexible">Flexible</option>
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
                  Monthly fees are due on the 1st of each month. We accept cash, check, 
                  or card payments. Payment plans available for longer programs.
                </p>

                <div className="mt-2">
                  <h4>Questions?</h4>
                  <p>Contact us at:</p>
                  <p>📧 <strong>info@rhythmraga.com</strong></p>
                  <p>📞 <strong>(555) 123-4567</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}