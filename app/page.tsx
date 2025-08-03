import { getSanityData, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rhythm Raga - Indian Music & Dance Academy',
  description: 'Welcome to Rhythm Raga Academy - where music meets movement. An academy for Indian Classical Music, Bollywood Dance, Tabla, Guitar, and Wedding Choreography.',
  keywords: 'music academy, dance academy, Indian vocal music, Bollywood dance classes, tabla lessons, guitar classes, wedding choreography, music school near me, dance classes for adults, kids dance classes, baulkham hills, schofields, the ponds, rouse hill, blacktown, castle hill, bella vista, australia, sydney',
  openGraph: {
    title: 'Rhythm Raga Academy - Where Music Meets Movement',
    description: 'Premier music and dance academy offering comprehensive programs in Indian Classical Music, Bollywood Dance, and more. Join our vibrant community of music and dance enthusiasts.',
    url: '/',
    images: [
      {
        url: '/images/logo_og.png',
        width: 1200,
        height: 630,
        alt: 'Rhythm Raga - A studio for Indian music and dance lovers',
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
  
  // Debug: Log the fetched data to check if heroButton exists
  console.log('Home Content:', JSON.stringify(homeContent, null, 2))

  return (
    <>
      {/* Hero Section */}
      <section className="hero-container">
        {homeContent?.heroImage && (
          <Image
            src={urlFor(homeContent.heroImage).width(1920).height(1080).url()}
            alt="Hero Background"
            width={1920}
            height={1080}
            priority={true}
            sizes="100vw"
            className="hero-background-image"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 20%',
            }}
          />
        )}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <h1>{homeContent?.title || "Welcome to Rhythm Raga"}</h1>
            <p>{homeContent?.subtitle || "Where Music Meets Movement - Premier Academy for Indian Classical Music, Bollywood Dance, and More!"}</p>
            {homeContent?.heroButton ? (
              <a 
                href={homeContent.heroButton.url || "/registration"}
                className={`btn ${homeContent.heroButton.style || "btn-primary"}`}
                target={homeContent.heroButton.isExternal ? "_blank" : "_self"}
                rel={homeContent.heroButton.isExternal ? "noopener noreferrer" : undefined}
              >
                {homeContent.heroButton.text || "Start Your Musical Journey"}
              </a>
            ) : (
              <a 
                href="/registration" 
                className="btn btn-primary"
              >
                Start Your Musical Journey
              </a>
            )}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>{homeContent?.aboutPreview?.title || "Discover Your Rhythm"}</h2>
              {homeContent?.aboutPreview?.description ? (
                <div>
                  {homeContent.aboutPreview.description.map((block: any, index: number) => {
                    if (block._type === 'block') {
                      return (
                        <p key={index}>
                          {block.children?.map((child: any) => child.text).join('') || ''}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                <>
                  <p>
                    At Rhythm Raga, we believe that music and dance are universal languages that connect hearts and souls. 
                    Our academy has been nurturing artistic talents for over a decade, providing comprehensive training in 
                    traditional Indian music and contemporary dance forms.
                  </p>
                  <p>
                    Whether you're a beginner taking your first steps or an advanced student looking to refine your skills, 
                    our experienced instructors are here to guide you on your artistic journey.
                  </p>
                </>
              )}
              <a href="/about" className="btn btn-primary">Learn More About Us</a>
            </div>
            <div>
              {homeContent?.aboutPreview?.image ? (
                <Image 
                  src={urlFor(homeContent.aboutPreview.image).width(800).height(300).url()} 
                  alt={homeContent.aboutPreview.image.alt || "Rhythm Raga Academy"} 
                  width={800}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px'}}
                />
              ) : (
                <Image 
                  src="/images/academy-interior.jpg" 
                  alt="Rhythm Raga Academy Interior" 
                  width={800}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px'}}
                />
              )}
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
                <li>Light Classical & Bollywood</li>
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
              <h3>🎵 Training Tailored to You</h3>
              <p>Every session ensures individual attention, whether you’re learning Bollywood dance, Indian classical music, or contemporary instruments.</p>
            </div>
            <div className="card">
              <h3>🏆 Proven Heritage of Excellence</h3>
              <p>From our roots at Devashram School of Music in India to Rhythm Raga in Australia, we bring over 30 years of formal training and performance experience in music and dance.</p>
            </div>
            <div className="card">
              <h3>👨‍👩‍👧‍👦 Skills That Go Beyond Classrooms</h3>
              <p>More than just lessons — we nurture cultural connection, stage confidence, discipline, and creativity through structured coaching and performance opportunities.</p>
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