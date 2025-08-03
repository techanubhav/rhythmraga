import { getSanityData } from '@/lib/sanity'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Our Story & Expert Instructors',
  description: 'Learn about Rhythm Raga Academy\'s journey since 2014. Meet our expert instructors specializing in Indian Classical Music, Bollywood Dance, Tabla, and Guitar. Discover our mission, facilities, and achievements.',
  keywords: 'about rhythm raga academy, music instructors, dance teachers, Indian classical music teachers, Bollywood dance instructors, tabla teachers, guitar instructors, music academy history',
  openGraph: {
    title: 'About Rhythm Raga Academy - Our Story & Expert Team',
    description: 'Founded in 2014, Rhythm Raga Academy has been nurturing musical talents for over a decade. Meet our expert instructors and discover our state-of-the-art facilities.',
    url: '/about',
    images: [
      {
        url: '/images/aboutus.png',
        width: 1200,
        height: 630,
        alt: 'Rhythm Raga Academy team and facilities',
      },
    ],
  },
  twitter: {
    title: 'About Rhythm Raga Academy - Our Story & Expert Team',
    description: 'Founded in 2014, Rhythm Raga Academy has been nurturing musical talents for over a decade. Meet our expert instructors.',
  },
}

export default async function About() {
  const aboutContent = await getSanityData('aboutPage')

  return (
    <>
      {/* Page Header */}
      <section className="hero" style={{padding: '4rem 0'}}>
        <div className="container">
          <h1>🎶 30 Years of Music & Dance Excellence</h1>
          <p>From Devashram School of Music to Rhythm Raga in Australia — blending tradition, skill, and passion in every class.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Our Story</h2>
              <p>
              Rhythm Raga traces its roots back to the Devashram School of Music in India, a renowned institution dedicated to preserving and promoting the rich traditions of Indian classical music and dance. For over three decades, Devashram has nurtured hundreds of students in vocals, tabla, and other classical instruments, shaping confident performers and passionate learners.
              </p>
              <p>
              Today, Rhythm Raga offers formal coaching in Bollywood dance, Indian classical and semi-classical vocals, tabla, guitar, keyboard, and more. With a strong focus on personal growth, cultural connection, and stage confidence, our mission is to inspire every learner to embrace their rhythm — and carry it forward in every aspect of life.
              </p>
            </div>
            <div>
              <img 
                src="/images/aboutus.png" 
                alt="Founders of Rhythm Raga Academy" 
                style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h3>Our Mission</h3>
              <p>
              At Rhythm Raga, our mission is to provide high-quality, structured training in music and dance that nurtures skill, confidence, and creativity. We aim to create a space where every learner — from beginners to advanced students — can explore their artistic potential while building a deeper connection to culture and self-expression.
              </p>
            </div>
            <div className="card">
              <h3>Our Vision</h3>
              <p>
              Our vision is to become a leading centre for music and dance education that bridges Indian tradition with modern learning. We aspire to grow into a vibrant academy that inspires learners of all ages, creates lasting cultural impact, and serves as a platform for performances, collaborations, and lifelong artistic journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Instructors */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-3">Meet Our Instructors</h2>
          <div className="grid grid-3">
            <div className="card text-center">
              <img 
                src="/images/headshot_anubhav.jpg" 
                alt="Anubhav Sharma" 
                style={{width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 1rem'}}
              />
              <h4>Anubhav Sharma</h4>
              <p className="text-secondary">Co-Founder & Music Instructor</p>
              <p>
                M.A. in Indian Classical Music, 20+ years of teaching experience. 
                Specializes in Vocal music, Tabla, Guitar, and Keyboard.
              </p>
            </div>
            
            <div className="card text-center">
              <img 
                src="/images/headshot_mansi.png" 
                alt="Mansi Bhardwaj" 
                style={{width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 1rem'}}
              />
              <h4>Mansi Bhardwaj</h4>
              <p className="text-secondary">Co-Founder & Dance Instructor</p>
              <p>
                Sr. Diploma in Dance, 5+ years of teaching experience. 
                Specializes in Bollywood and Contemporary dance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      {/* <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-3">Our Achievements</h2>
          <div className="grid grid-2">
            <div>
              <h3>Student Accomplishments</h3>
              <ul style={{paddingLeft: '1.5rem', marginBottom: '2rem'}}>
                <li>Over 50 students have won state and national level music competitions</li>
                <li>15 students have been selected for prestigious music scholarships</li>
                <li>Alumni performing in professional dance companies and Bollywood productions</li>
                <li>100+ successful wedding choreographies completed</li>
                <li>Annual student concerts featuring 200+ performers</li>
              </ul>
            </div>
            <div>
              <h3>Academy Recognition</h3>
              <ul style={{paddingLeft: '1.5rem'}}>
                <li>"Best Music Academy" - Local Arts Council (2022, 2023)</li>
                <li>Featured in "Top 10 Cultural Institutions" - City Magazine</li>
                <li>Partnership with National Music Foundation</li>
                <li>Certified by Indian Classical Music Board</li>
                <li>Cultural Ambassador Program participant</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Facilities */}
      {/* <section className="section">
        <div className="container">
          <h2 className="text-center mb-3">Our Facilities</h2>
          <div className="grid grid-3">
            <div className="card text-center">
              <h4>🎵 Music Studios</h4>
              <p>
                5 soundproof practice rooms equipped with harmoniums, tanpuras, 
                and digital recording equipment for optimal learning experience.
              </p>
            </div>
            <div className="card text-center">
              <h4>💃 Dance Studios</h4>
              <p>
                2 spacious dance studios with mirrors, professional flooring, 
                and sound systems. Perfect for both individual and group sessions.
              </p>
            </div>
            <div className="card text-center">
              <h4>🎤 Performance Hall</h4>
              <p>
                150-seat auditorium for recitals, concerts, and competitions. 
                Professional lighting and sound systems for memorable performances.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2>Join Our Musical Family</h2>
          <p>Discover your potential and be part of our vibrant community of music and dance enthusiasts.</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem'}}>
            <a href="/offerings" className="btn btn-primary">Explore Our Programs</a>
            <a href="/registration" className="btn btn-secondary">Register Today</a>
          </div>
        </div>
      </section>
    </>
  )
}