import { getSanityData } from '@/lib/sanity'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Premier Music & Dance Academy',
  description: 'Welcome to Rhythm Raga Academy - where music meets movement. Premier academy for Indian Classical Music, Bollywood Dance, Tabla, Guitar, and Wedding Choreography. Expert instructors, proven results.',
  keywords: 'music academy, dance academy, Indian vocal music, Bollywood dance classes, tabla lessons, guitar classes, wedding choreography, music school near me, dance classes for adults, kids dance classes',
  openGraph: {
    title: 'Rhythm Raga Academy - Where Music Meets Movement',
    description: 'Premier music and dance academy offering comprehensive programs in Indian Classical Music, Bollywood Dance, and more. Join our vibrant community of music and dance enthusiasts.',
    url: '/',
    images: [
      {
        url: '/images/home-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Rhythm Raga Academy - Students learning music and dance',
      },
    ],
  },
  twitter: {
    title: 'Rhythm Raga Academy - Where Music Meets Movement',
    description: 'Premier music and dance academy offering comprehensive programs in Indian Classical Music, Bollywood Dance, and more.',
  },
}

export default async function Home() {
  // Fetch home page content from Sanity
  const homeContent = await getSanityData('homePage')

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>{homeContent?.title || "Welcome to Rhythm Raga"}</h1>
          <p>{homeContent?.subtitle || "Where Music Meets Movement - Premier Academy for Indian Classical Music, Bollywood Dance, and More!"}</p>
          <a href="/registration" className="btn btn-primary">Start Your Musical Journey</a>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Discover Your Rhythm</h2>
              <p>
                At Rhythm Raga, we believe that music and dance are universal languages that connect hearts and souls. 
                Our academy has been nurturing artistic talents for over a decade, providing comprehensive training in 
                traditional Indian music and contemporary dance forms.
              </p>
              <p>
                Whether you're a beginner taking your first steps or an advanced student looking to refine your skills, 
                our experienced instructors are here to guide you on your artistic journey.
              </p>
              <a href="/about" className="btn btn-secondary">Learn More About Us</a>
            </div>
            <div>
              <img 
                src="/images/academy-interior.jpg" 
                alt="Rhythm Raga Academy Interior" 
                style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Offerings */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-3">Our Featured Programs</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Indian Vocal Music</h3>
              <p>Master the art of classical and semi-classical Indian vocal music with our expert guidance.</p>
              <ul style={{marginBottom: '1.5rem', paddingLeft: '1.5rem'}}>
                <li>Classical Ragas</li>
                <li>Devotional Songs</li>
                <li>Light Classical</li>
                <li>Breathing Techniques</li>
              </ul>
              <a href="/offerings#indian-vocal" className="btn">Learn More</a>
            </div>
            
            <div className="card">
              <h3>Bollywood Dance</h3>
              <p>Express yourself through energetic Bollywood dance routines for all age groups.</p>
              <ul style={{marginBottom: '1.5rem', paddingLeft: '1.5rem'}}>
                <li>Adult Classes</li>
                <li>Kids Programs</li>
                <li>Choreography</li>
                <li>Performance Training</li>
              </ul>
              <a href="/offerings#bollywood-dance" className="btn">Learn More</a>
            </div>
            
            <div className="card">
              <h3>Wedding Choreography</h3>
              <p>Make your special day memorable with custom wedding dance choreography.</p>
              <ul style={{marginBottom: '1.5rem', paddingLeft: '1.5rem'}}>
                <li>Couple's First Dance</li>
                <li>Sangeet Performances</li>
                <li>Family Routines</li>
                <li>Traditional & Modern</li>
              </ul>
              <a href="/offerings#wedding-choreography" className="btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-3">Why Choose Rhythm Raga?</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🎵 Expert Instructors</h3>
              <p>Learn from classically trained musicians and professional dancers with years of teaching experience.</p>
            </div>
            <div className="card">
              <h3>🏆 Proven Results</h3>
              <p>Our students have won numerous competitions and many have pursued successful careers in music and dance.</p>
            </div>
            <div className="card">
              <h3>👨‍👩‍👧‍👦 All Ages Welcome</h3>
              <p>From children to adults, we offer age-appropriate programs that cater to different learning styles and paces.</p>
            </div>
            <div className="card">
              <h3>📍 Convenient Location</h3>
              <p>Easily accessible location with flexible scheduling options including weekend and evening classes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2>Ready to Begin Your Musical Journey?</h2>
          <p>Join hundreds of students who have discovered their passion for music and dance with us.</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem'}}>
            <a href="/registration" className="btn btn-primary">Register Now</a>
            <a href="/contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  )
}