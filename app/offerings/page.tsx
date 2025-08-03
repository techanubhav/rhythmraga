import { getSanityData } from '@/lib/sanity'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programs & Classes - Music & Dance Offerings',
  description: 'Explore our comprehensive programs: Indian Vocal Music, Bollywood Dance (Adults & Kids), Tabla, Guitar, and Wedding Choreography. View pricing, schedules, and course details. Ages 4+ welcome.',
  keywords: 'Indian vocal music classes, Bollywood dance classes adults, Bollywood dance kids, tabla lessons, guitar lessons, wedding choreography, music class pricing, dance class schedules, beginner music classes',
  openGraph: {
    title: 'Music & Dance Programs at Rhythm Raga Academy',
    description: 'Comprehensive music and dance programs for all ages and skill levels. From Indian Classical Music to Bollywood Dance and Wedding Choreography.',
    url: '/offerings',
    images: [
      {
        url: '/images/offerings-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Rhythm Raga Academy programs and classes',
      },
    ],
  },
  twitter: {
    title: 'Music & Dance Programs at Rhythm Raga Academy',
    description: 'Comprehensive music and dance programs for all ages and skill levels. From Indian Classical Music to Bollywood Dance.',
  },
}

export default async function Offerings() {
  const offeringsContent = await getSanityData('offeringsPage')

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{padding: '4rem 0'}}>
        <div className="container">
          <h1>Our Offerings</h1>
          <p>Comprehensive Music and Dance Programs for All Ages and Skill Levels</p>
        </div>
      </section>

      {/* Indian Vocal Music */}
      <section id="indian-vocal" className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="text-primary">Indian Vocal Music</h2>
              <p>
                Immerse yourself in the rich tradition of Indian classical and semi-classical vocal music. 
                Our comprehensive program covers both Hindustani and Carnatic styles, with emphasis on 
                proper technique, breath control, and emotional expression.
              </p>
              
              <h3>What You'll Learn:</h3>
              <ul style={{paddingLeft: '1.5rem', marginBottom: '2rem'}}>
                <li>Fundamental breathing techniques and voice modulation</li>
                <li>Classical ragas and their emotional expressions</li>
                <li>Bollywood, Semi-classical, and Devotional songs</li>
                <li>Light classical compositions</li>
                <li>Performance skills and stage presence</li>
                <li>Music theory and notation</li>
              </ul>

              {/* <div className="grid grid-2 mb-2">
                <div className="card">
                  <h4>Beginner Level</h4>
                  <p><strong>Duration:</strong> 6 months</p>
                  <p><strong>Frequency:</strong> 2 classes/week</p>
                  <p><strong>Fee:</strong> $120/month</p>
                </div>
                <div className="card">
                  <h4>Intermediate/Advanced</h4>
                  <p><strong>Duration:</strong> Ongoing</p>
                  <p><strong>Frequency:</strong> 2-3 classes/week</p>
                  <p><strong>Fee:</strong> $150/month</p>
                </div>
              </div> */}
            </div>
            {/* <div>
              <img 
                src="/images/indian-vocal-class.jpg" 
                alt="Indian Vocal Music Class" 
                style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px'}}
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Bollywood Dance - Adults */}
      <section id="bollywood-dance-adult" className="section section-alt">
        <div className="container">
          <div className="grid grid-2">
            {/* <div>
              <img 
                src="/images/bollywood-dance-adults.jpg" 
                alt="Adult Bollywood Dance Class" 
                style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px'}}
              />
            </div> */}
            <div>
              <h2 className="text-primary">Bollywood Dance - Adults</h2>
              <p>
                Express your creativity through energetic and vibrant Bollywood dance routines. 
                Our adult classes combine traditional Indian dance elements with contemporary 
                choreography, creating an exciting and fitness-focused learning experience.
              </p>
              
              <h3>Program Highlights:</h3>
              <ul style={{paddingLeft: '1.5rem', marginBottom: '2rem'}}>
                <li>Latest Bollywood song choreographies</li>
                <li>Classical Indian dance foundations</li>
                <li>Fusion and contemporary elements</li>
                <li>Fitness and flexibility training</li>
                <li>Performance opportunities</li>
                <li>Solo and group choreography</li>
              </ul>

              {/* <div className="grid grid-2 mb-2">
                <div className="card">
                  <h4>Regular Classes</h4>
                  <p><strong>Duration:</strong> Ongoing</p>
                  <p><strong>Frequency:</strong> 2 classes/week</p>
                  <p><strong>Fee:</strong> $100/month</p>
                </div>
                <div className="card">
                  <h4>Intensive Program</h4>
                  <p><strong>Duration:</strong> 3 months</p>
                  <p><strong>Frequency:</strong> 3 classes/week</p>
                  <p><strong>Fee:</strong> $140/month</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Bollywood Dance - Kids */}
      <section id="bollywood-dance-kids" className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="text-primary">Bollywood Dance - Kids</h2>
              <p>
                Specially designed for children aged 4-14, our kids' Bollywood dance program 
                focuses on building confidence, coordination, and creativity through fun and 
                engaging dance routines.
              </p>
              
              <h3>Age Groups & Focus:</h3>
              <div className="mb-2">
                <h4>Little Dancers (Ages 4-7)</h4>
                <ul style={{paddingLeft: '1.5rem', marginBottom: '1rem'}}>
                  <li>Basic rhythm and movement</li>
                  <li>Simple choreography</li>
                  <li>Fun songs and games</li>
                  <li>Building confidence</li>
                </ul>
                
                <h4>Young Performers (Ages 8-14)</h4>
                <ul style={{paddingLeft: '1.5rem', marginBottom: '2rem'}}>
                  <li>Complex choreography</li>
                  <li>Performance skills</li>
                  <li>Competition preparation</li>
                  <li>Leadership development</li>
                </ul>
              </div>

              {/* <div className="grid grid-2 mb-2">
                <div className="card">
                  <h4>Little Dancers</h4>
                  <p><strong>Duration:</strong> Ongoing</p>
                  <p><strong>Frequency:</strong> 1 class/week</p>
                  <p><strong>Fee:</strong> $60/month</p>
                </div>
                <div className="card">
                  <h4>Young Performers</h4>
                  <p><strong>Duration:</strong> Ongoing</p>
                  <p><strong>Frequency:</strong> 2 classes/week</p>
                  <p><strong>Fee:</strong> $80/month</p>
                </div>
              </div> */}
            </div>
            {/* <div>
              <img 
                src="/images/bollywood-dance-kids.jpg" 
                alt="Kids Bollywood Dance Class" 
                style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px'}}
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Tabla */}
      <section id="tabla" className="section section-alt">
        <div className="container">
          <div className="grid grid-2">
            {/* <div>
              <img 
                src="/images/tabla-class.jpg" 
                alt="Tabla Learning Session" 
                style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px'}}
              />
            </div> */}
            <div>
              <h2 className="text-primary">Tabla</h2>
              <p>
                Master the art of tabla, the most popular percussion instrument in Indian classical music. 
                Our structured program takes you from basic finger techniques to complex rhythmic compositions.
              </p>
              
              <h3>Learning Path:</h3>
              <ul style={{paddingLeft: '1.5rem', marginBottom: '2rem'}}>
                <li>Proper sitting posture and hand positions</li>
                <li>Basic strokes (na, tin, tun, etc.)</li>
                <li>Traditional compositions (kaidas, gats)</li>
                <li>Accompaniment techniques</li>
                <li>Solo performance skills</li>
                <li>Different tabla styles and gharanas</li>
              </ul>

              {/* <div className="grid grid-2 mb-2">
                <div className="card">
                  <h4>Foundation Course</h4>
                  <p><strong>Duration:</strong> 8 months</p>
                  <p><strong>Frequency:</strong> 2 classes/week</p>
                  <p><strong>Fee:</strong> $130/month</p>
                </div>
                <div className="card">
                  <h4>Advanced Training</h4>
                  <p><strong>Duration:</strong> Ongoing</p>
                  <p><strong>Frequency:</strong> 2-3 classes/week</p>
                  <p><strong>Fee:</strong> $160/month</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Guitar */}
      <section id="guitar" className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="text-primary">Guitar</h2>
              <p>
                Learn to play guitar with your favourite bollywood songs and ghazals.
              </p>
              
              <h3>Styles Covered:</h3>
              <ul style={{paddingLeft: '1.5rem', marginBottom: '2rem'}}>
                <li>Bollywood guitar techniques</li>
                <li>Indian fusion guitar</li>
                <li>Fingerpicking patterns</li>
                <li>Guitar theory </li>
              </ul>

              {/* <div className="grid grid-2 mb-2">
                <div className="card">
                  <h4>Beginner Course</h4>
                  <p><strong>Duration:</strong> 6 months</p>
                  <p><strong>Frequency:</strong> 2 classes/week</p>
                  <p><strong>Fee:</strong> $110/month</p>
                </div>
                <div className="card">
                  <h4>Intermediate/Advanced</h4>
                  <p><strong>Duration:</strong> Ongoing</p>
                  <p><strong>Frequency:</strong> 2 classes/week</p>
                  <p><strong>Fee:</strong> $130/month</p>
                </div>
              </div> */}
            </div>
            {/* <div>
              <img 
                src="/images/guitar-lesson.jpg" 
                alt="Guitar Learning Session" 
                style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px'}}
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Wedding Choreography */}
      <section id="wedding-choreography" className="section section-alt">
        <div className="container">
          <div className="grid grid-2">
            {/* <div>
              <img 
                src="/images/wedding-choreography.jpg" 
                alt="Wedding Dance Choreography" 
                style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px'}}
              />
            </div> */}
            <div>
              <h2 className="text-primary">Wedding Choreography</h2>
              <p>
                Make your special day unforgettable with our custom wedding dance choreography services. 
                We create personalized routines for couples, families, and wedding parties that perfectly 
                capture your unique style and celebration.
              </p>
              
              <h3>Services Offered:</h3>
              <ul style={{paddingLeft: '1.5rem', marginBottom: '2rem'}}>
                <li>Couple's first dance choreography</li>
                <li>Sangeet performance routines</li>
                <li>Family group choreography</li>
                <li>Bridal party performances</li>
                <li>Traditional and contemporary fusion</li>
                <li>On-location rehearsals available</li>
              </ul>

              {/* <div className="grid grid-2 mb-2">
                <div className="card">
                  <h4>Couple's Package</h4>
                  <p><strong>Sessions:</strong> 4-6 sessions</p>
                  <p><strong>Duration:</strong> 3-4 weeks</p>
                  <p><strong>Price:</strong> $400-600</p>
                </div>
                <div className="card">
                  <h4>Group Package</h4>
                  <p><strong>Sessions:</strong> 6-10 sessions</p>
                  <p><strong>Duration:</strong> 4-6 weeks</p>
                  <p><strong>Price:</strong> $800-1200</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-3">Additional Information</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>🎼 Trial Classes</h3>
              <p>
                Not sure which program is right for you? We offer trial classes for all our programs. Experience our teaching style before committing.
              </p>
            </div>
            <div className="card">
              <h3>🏆 Performance Opportunities</h3>
              <p>
                Regular student showcases, competitions, and community performances provide platforms 
                for students to display their skills and build confidence.
              </p>
            </div>
            <div className="card">
              <h3>📅 Flexible Scheduling</h3>
              <p>
                We offer morning, evening, and weekend classes to accommodate different schedules. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2>Ready to Start Your Journey?</h2>
          <p>Choose your program and begin your musical adventure with Rhythm Raga Academy today!</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem'}}>
            <a href="/registration" className="btn btn-primary">Register Now</a>
            <a href="/contact" className="btn btn-secondary">Ask Questions</a>
          </div>
        </div>
      </section>
    </>
  )
}