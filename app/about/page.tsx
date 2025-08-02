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
        url: '/images/about-og.jpg',
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
          <h1>About Rhythm Raga</h1>
          <p>Nurturing Musical Excellence Since 2014</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Our Story</h2>
              <p>
                Rhythm Raga Academy was founded in 2014 with a simple yet profound mission: to preserve and promote 
                the rich traditions of Indian classical music while embracing contemporary dance forms that bring 
                joy and expression to people of all ages.
              </p>
              <p>
                What started as a small music school with just a handful of students has grown into a vibrant 
                community of over 300 active learners, ranging from 4-year-old children taking their first steps 
                in music to adults rediscovering their passion for the arts.
              </p>
              <p>
                Our founder, Priya Sharma, a classically trained vocalist with over 20 years of performance 
                experience, envisioned a place where traditional Indian music could flourish alongside contemporary 
                dance forms, creating a unique learning environment that celebrates both heritage and innovation.
              </p>
            </div>
            <div>
              <img 
                src="/images/founder-priya-sharma.jpg" 
                alt="Priya Sharma - Founder of Rhythm Raga Academy" 
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
                To provide exceptional music and dance education that nurtures creativity, builds confidence, 
                and preserves cultural heritage while making the arts accessible to students of all backgrounds 
                and skill levels.
              </p>
            </div>
            <div className="card">
              <h3>Our Vision</h3>
              <p>
                To be the premier destination for music and dance education in our community, where students 
                not only learn technical skills but also develop a lifelong appreciation for the transformative 
                power of the arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Instructors */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-3">Meet Our Expert Instructors</h2>
          <div className="grid grid-3">
            <div className="card text-center">
              <img 
                src="/images/instructor-priya.jpg" 
                alt="Priya Sharma" 
                style={{width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 1rem'}}
              />
              <h4>Priya Sharma</h4>
              <p className="text-secondary">Founder & Lead Vocal Instructor</p>
              <p>
                M.A. in Indian Classical Music, 20+ years of teaching experience. 
                Specializes in Hindustani classical music and devotional songs.
              </p>
            </div>
            
            <div className="card text-center">
              <img 
                src="/images/instructor-arjun.jpg" 
                alt="Arjun Patel" 
                style={{width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 1rem'}}
              />
              <h4>Arjun Patel</h4>
              <p className="text-secondary">Tabla & Percussion Instructor</p>
              <p>
                Trained under renowned tabla maestros, 15+ years of performance experience. 
                Expert in both solo and accompaniment styles.
              </p>
            </div>
            
            <div className="card text-center">
              <img 
                src="/images/instructor-neha.jpg" 
                alt="Neha Kapoor" 
                style={{width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 1rem'}}
              />
              <h4>Neha Kapoor</h4>
              <p className="text-secondary">Bollywood Dance Choreographer</p>
              <p>
                Professional dancer and choreographer with Bollywood industry experience. 
                Specializes in contemporary and fusion dance styles.
              </p>
            </div>
            
            <div className="card text-center">
              <img 
                src="/images/instructor-raj.jpg" 
                alt="Raj Mehta" 
                style={{width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 1rem'}}
              />
              <h4>Raj Mehta</h4>
              <p className="text-secondary">Guitar Instructor</p>
              <p>
                Versatile guitarist proficient in classical, folk, and contemporary styles. 
                10+ years of teaching experience with all age groups.
              </p>
            </div>
            
            <div className="card text-center">
              <img 
                src="/images/instructor-kavya.jpg" 
                alt="Kavya Singh" 
                style={{width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 1rem'}}
              />
              <h4>Kavya Singh</h4>
              <p className="text-secondary">Kids Dance Instructor</p>
              <p>
                Specialized in teaching children aged 4-14. Expert in making learning fun 
                while building strong foundations in dance technique.
              </p>
            </div>
            
            <div className="card text-center">
              <img 
                src="/images/instructor-maya.jpg" 
                alt="Maya Reddy" 
                style={{width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 1rem'}}
              />
              <h4>Maya Reddy</h4>
              <p className="text-secondary">Wedding Choreographer</p>
              <p>
                Specialist in wedding choreography with 200+ successful weddings. 
                Expert in creating memorable performances for special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="section section-alt">
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
      </section>

      {/* Facilities */}
      <section className="section">
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
      </section>

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