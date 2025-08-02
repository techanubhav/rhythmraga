'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
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
          <h1>Contact Us</h1>
          <p>Get in Touch - We'd Love to Hear From You!</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-2">Get in Touch</h2>
              <p className="mb-3">
                Have questions about our programs, want to schedule a trial class, or need more information? 
                We're here to help! Reach out to us through any of the methods below, and we'll get back 
                to you as soon as possible.
              </p>

              <div className="contact-info-item">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>info@rhythmraga.com</p>
                  <p>admissions@rhythmraga.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>Main: (555) 123-4567</p>
                  <p>WhatsApp: (555) 123-4568</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>123 Music Boulevard</p>
                  <p>Harmony Heights, CA 12345</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="icon">🕐</span>
                <div>
                  <h4>Operating Hours</h4>
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 9:00 PM</p>
                  <p><strong>Saturday:</strong> 8:00 AM - 6:00 PM</p>
                  <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="icon">🌐</span>
                <div>
                  <h4>Follow Us</h4>
                  <p>
                    <a href="#" style={{marginRight: '1rem', textDecoration: 'none'}}>Facebook</a>
                    <a href="#" style={{marginRight: '1rem', textDecoration: 'none'}}>Instagram</a>
                    <a href="#" style={{textDecoration: 'none'}}>YouTube</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card">
                <h3>Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
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

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select a subject...</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="program-info">Program Information</option>
                      <option value="trial-class">Trial Class Request</option>
                      <option value="schedule-change">Schedule Change</option>
                      <option value="billing">Billing Question</option>
                      <option value="feedback">Feedback/Complaint</option>
                      <option value="wedding-choreography">Wedding Choreography</option>
                      <option value="partnership">Partnership/Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      rows={6}
                      placeholder="Please provide details about your inquiry..."
                      required
                    />
                  </div>

                  <div className="form-group">
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={isSubmitting}
                      style={{width: '100%'}}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="alert alert-success">
                      <p>✅ Message sent successfully! We'll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="alert alert-error">
                      <p>❌ There was an error sending your message. Please try again or call us directly.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-3">Find Us</h2>
          <div className="grid grid-2">
            <div>
              <h3>Our Location</h3>
              <p>
                Rhythm Raga Academy is conveniently located in the heart of Harmony Heights, 
                easily accessible by public transportation and with ample parking available.
              </p>
              
              <h4>Directions:</h4>
              <ul style={{paddingLeft: '1.5rem', marginBottom: '2rem'}}>
                <li><strong>By Car:</strong> Take Highway 101 to Music Boulevard exit. We're located in the Harmony Plaza.</li>
                <li><strong>By Bus:</strong> Routes 15, 22, and 45 stop directly in front of our building.</li>
                <li><strong>By Train:</strong> Harmony Heights station is a 5-minute walk from our academy.</li>
              </ul>

              <h4>Parking:</h4>
              <p>
                Free parking is available in the Harmony Plaza parking garage with validation. 
                Street parking is also available with 2-hour limits during business hours.
              </p>

              <h4>Accessibility:</h4>
              <p>
                Our facility is fully wheelchair accessible with elevator access to all floors 
                and accessible restrooms. Please let us know if you need any special accommodations.
              </p>
            </div>
            
            <div>
              <div className="map-container">
                <p>Interactive Map Coming Soon</p>
                <p style={{fontSize: '0.9rem', color: '#666'}}>
                  In the meantime, search "123 Music Boulevard, Harmony Heights, CA" in your preferred maps app
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-3">Frequently Asked Questions</h2>
          <div className="grid grid-2">
            <div className="card">
              <h4>What should I bring to my first class?</h4>
              <p>
                For music classes, just bring yourself and enthusiasm! We provide all instruments for trial classes. 
                For dance classes, wear comfortable clothes you can move in and bring a water bottle.
              </p>
            </div>

            <div className="card">
              <h4>Do you offer makeup classes?</h4>
              <p>
                Yes! We understand life gets busy. We offer makeup classes for missed sessions with 24-hour advance notice. 
                Simply contact us to reschedule.
              </p>
            </div>

            <div className="card">
              <h4>What are your payment options?</h4>
              <p>
                We accept cash, check, credit/debit cards, and online payments. Monthly fees are due on the 1st of each month. 
                Payment plans are available for longer programs.
              </p>
            </div>

            <div className="card">
              <h4>Can adults join kids programs?</h4>
              <p>
                Our kids programs are specifically designed for children's learning styles and attention spans. 
                We have separate adult programs that are more suitable for grown-up learners.
              </p>
            </div>

            <div className="card">
              <h4>Do you provide instruments?</h4>
              <p>
                We provide instruments for use during classes. For practice at home, we can help you purchase 
                or rent instruments at discounted rates through our partner music stores.
              </p>
            </div>

            <div className="card">
              <h4>How long are the classes?</h4>
              <p>
                Class duration varies by program: Individual lessons are typically 45-60 minutes, 
                group classes are 60-90 minutes, and kids classes are 45 minutes to maintain engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p>Don't wait - your musical journey begins with a single step!</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem'}}>
            <a href="/registration" className="btn btn-primary">Register Now</a>
            <a href="/offerings" className="btn btn-secondary">View Programs</a>
          </div>
        </div>
      </section>
    </>
  )
}