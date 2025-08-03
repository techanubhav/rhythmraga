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
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [showFeeModal, setShowFeeModal] = useState(false)

  const openTermsModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowTermsModal(true)
  }

  const closeTermsModal = () => {
    setShowTermsModal(false)
  }

  const openFeeModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowFeeModal(true)
  }

  const closeFeeModal = () => {
    setShowFeeModal(false)
  }

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
                        {/* <em style={{display: 'block', fontSize: '0.85rem', color: '#888', marginTop: '0.25rem'}}>
                          (Optional - you can opt-out by leaving this unchecked)
                        </em> */}
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
                        <strong>Terms & Conditions / Code of Conduct Agreement:</strong> I have read and agree to abide by the Academy's{' '}
                        <a 
                          href="#" 
                          onClick={openTermsModal}
                          style={{color: 'var(--link-color)', textDecoration: 'underline'}}
                        >
                          Terms & Conditions and Code of Conduct
                        </a>. *
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
                        <strong>Fee Payment Agreement:</strong> I understand and agree to the{' '}
                        <a 
                          href="#" 
                          onClick={openFeeModal}
                          style={{color: 'var(--link-color)', textDecoration: 'underline'}}
                        >
                          fee structure and payment terms
                        </a>{' '}
                        of Rhythm Raga Academy. *
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

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="modal-overlay" onClick={closeTermsModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Terms & Conditions / Code of Conduct</h2>
              <button 
                className="modal-close"
                onClick={closeTermsModal}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="terms-section">
                <h3>A. General Conduct</h3>
                <ul>
                  <li>Students are expected to be punctual for all classes.</li>
                  <li>Respect must be shown to teachers, staff, and fellow students at all times.</li>
                  <li>No disruptive behaviour or disrespectful language will be tolerated.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>B. Class Attendance & Make-up Policy</h3>
                <ul>
                  <li>Missed classes will not be refunded.</li>
                  <li>Make-up classes may be arranged at the Academy's discretion and are subject to the following conditions:
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem'}}>
                      <li>Students must inform the Academy at least 24 hours in advance of any absence</li>
                      <li>Make-up classes are subject to instructor and studio availability</li>
                      <li>Only one make-up class per month is permitted per student</li>
                      <li>Make-up classes must be scheduled within 30 days of the original missed class</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>C. Materials & Instruments</h3>
                <ul>
                  <li>Students must bring their own required materials/instruments unless otherwise provided by the Academy.</li>
                  <li>Academy-owned instruments or equipment must be handled carefully and with respect.</li>
                  <li>Any damage caused to Academy property due to negligence may incur repair/replacement costs to be paid by the student or parent/guardian.</li>
                  <li>Students are responsible for the care and maintenance of any borrowed Academy equipment during the class period.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>D. Safety</h3>
                <ul>
                  <li>Students must follow all safety instructions provided by instructors during classes.</li>
                  <li>Parents/guardians are responsible for timely drop-off and pick-up of minor students.</li>
                  <li>Students must report any injuries or accidents to instructors immediately.</li>
                  <li>The Academy reserves the right to refuse service to any student who poses a safety risk to themselves or others.</li>
                  <li>Students participate in all activities at their own risk and are encouraged to inform instructors of any physical limitations or health conditions.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>E. Media & Promotion</h3>
                <ul>
                  <li>Students and parents have the option to consent or decline participation in photo, video, or audio recordings.</li>
                  <li>This consent is managed through the separate Photography & Recording Consent checkbox in the registration form.</li>
                  <li>Students who opt-out of media consent will not be included in promotional materials or Academy marketing.</li>
                  <li>The Academy respects all privacy preferences and will honor opt-out requests at any time.</li>
                  <li>Media consent can be updated by contacting the Academy administration.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>F. Additional Terms</h3>
                <ul>
                  <li>The Academy reserves the right to modify these terms with 30 days written notice to students.</li>
                  <li>Any violations of this Code of Conduct may result in suspension or termination of enrollment.</li>
                  <li>Students and parents agree to communicate respectfully with Academy staff regarding any concerns or feedback.</li>
                  <li>These terms are governed by the laws of the jurisdiction where Rhythm Raga Academy operates.</li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary" 
                onClick={closeTermsModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fee Payment Agreement Modal */}
      {showFeeModal && (
        <div className="modal-overlay" onClick={closeFeeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Fee Structure & Payment Terms</h2>
              <button 
                className="modal-close"
                onClick={closeFeeModal}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="terms-section">
                <h3>1. Fee Structure</h3>
                <ul>
                  <li>Fees are charged as per the selected course and program duration.</li>
                  <li>Fees are subject to periodic revision, with reasonable advance notice provided to all students.</li>
                  <li>Current fee schedules are available upon request and will be provided during enrollment.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>2. Payment Schedule</h3>
                <ul>
                  <li>All payments should be made as per the due date specified in your enrollment agreement.</li>
                  <li><strong>Accepted payment methods:</strong>
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem'}}>
                      <li><strong>Bank Transfer:</strong> Direct transfer to Academy's nominated account</li>
                      <li><strong>Credit/Debit Card:</strong> Secure online payment via provided links</li>
                      <li><strong>Cash:</strong> In person at the Academy office during business hours</li>
                    </ul>
                  </li>
                  <li>Payment receipts will be provided for all transactions.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>3. Late Payment Policy</h3>
                <ul>
                  <li>Payments received after the due date will incur a late fee of <strong>AUD $10 per week overdue</strong>.</li>
                  <li>Failure to clear outstanding dues within <strong>30 days of the due date</strong> may result in suspension of classes until payment is made.</li>
                  <li>Students with outstanding fees may not be permitted to attend classes or participate in Academy events.</li>
                  <li>The Academy reserves the right to pursue collection of outstanding debts through appropriate channels.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>4. Refund Policy</h3>
                <ul>
                  <li>Fees are <strong>non-refundable</strong> once the payment has been processed, except in the following circumstances:</li>
                  <li><strong>Academy Cancellation:</strong> Full refund if a class or course is cancelled by Rhythm Raga Academy.</li>
                  <li><strong>Advance Withdrawal:</strong> Refund available if the student withdraws before the start date and has given written notice at least <strong>14 days in advance</strong>.</li>
                  <li>Refunds, where applicable, will be processed within <strong>14 business days</strong> via the original payment method.</li>
                  <li>Administrative fees may apply to refund processing.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>5. Missed Classes</h3>
                <ul>
                  <li><strong>No refunds or fee adjustments</strong> will be made for missed classes due to student absence.</li>
                  <li>Make-up classes may be offered at the Academy's discretion under the following conditions:
                    <ul style={{marginTop: '0.5rem', paddingLeft: '1.5rem'}}>
                      <li>Absence is informed at least <strong>24 hours in advance</strong></li>
                      <li>Absence is due to <strong>medical reasons with appropriate documentation</strong></li>
                      <li>Make-up classes are subject to instructor and studio <strong>availability</strong></li>
                      <li>Make-up classes must be scheduled within the current term/program period</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>6. Withdrawal & Notice Period</h3>
                <ul>
                  <li>Students wishing to withdraw must provide at least <strong>one month's written notice</strong> to the Academy.</li>
                  <li>Fees for the notice month are <strong>payable in full</strong>, regardless of attendance during the notice period.</li>
                  <li>Withdrawal notice must be submitted in writing (email acceptable) to the Academy administration.</li>
                  <li>Verbal notice or non-attendance does not constitute formal withdrawal.</li>
                  <li>Students may be liable for the full program fee if insufficient notice is provided.</li>
                </ul>
              </div>

              <div className="terms-section">
                <h3>7. Additional Terms</h3>
                <ul>
                  <li>All fees are quoted in Australian Dollars (AUD) unless otherwise specified.</li>
                  <li>Payment plans may be available for longer programs - please discuss with Academy administration.</li>
                  <li>The Academy reserves the right to modify fee structures with reasonable notice to existing students.</li>
                  <li>These payment terms are governed by Australian consumer law and Academy policies.</li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary" 
                onClick={closeFeeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}