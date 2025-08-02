import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Rhythm Raga - Music & Dance Academy',
    template: '%s | Rhythm Raga Academy'
  },
  description: 'Premier music and dance academy offering Indian Vocal, Bollywood Dance, Tabla, Guitar, and Wedding Choreography classes for all ages. Expert instructors, proven results, and flexible scheduling.',
  keywords: 'music academy, dance academy, Indian vocal, Bollywood dance, tabla, guitar, wedding choreography, music lessons, dance classes, Indian classical music, adult dance classes, kids dance classes',
  authors: [{ name: 'Rhythm Raga Academy' }],
  creator: 'Rhythm Raga Academy',
  publisher: 'Rhythm Raga Academy',
  metadataBase: new URL('https://rhythmraga.com'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rhythmraga.com',
    title: 'Rhythm Raga - Music & Dance Academy',
    description: 'Premier music and dance academy offering Indian Vocal, Bollywood Dance, Tabla, Guitar, and Wedding Choreography classes for all ages.',
    siteName: 'Rhythm Raga Academy',
    images: [
      {
        url: '/images/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Rhythm Raga Music & Dance Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rhythm Raga - Music & Dance Academy',
    description: 'Premier music and dance academy offering Indian Vocal, Bollywood Dance, Tabla, Guitar, and Wedding Choreography classes for all ages.',
    images: ['/images/og-image.jpg'],
    creator: '@rhythmraga', // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar">
            <div className="nav-container">
              <div className="nav-logo">
                <img 
                  src="/images/rhythm_raga_sitelogo.png" 
                  alt="Rhythm Raga Academy" 
                  style={{height: '80px', width: 'auto'}}
                />
              </div>
              <div className="nav-menu">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About Us</a>
                <a href="/offerings" className="nav-link">Offerings</a>
                <a href="/registration" className="nav-link">Student Registration</a>
                <a href="/contact" className="nav-link">Contact Us</a>
              </div>
              <div className="nav-toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicSchool",
              "name": "Rhythm Raga Academy",
              "alternateName": "Rhythm Raga Music & Dance Academy",
              "description": "Premier music and dance academy offering Indian Vocal, Bollywood Dance, Tabla, Guitar, and Wedding Choreography classes for all ages.",
              "url": "https://rhythmraga.com",
              "logo": "https://rhythmraga.com/images/rhythm_raga_sitelogo.png",
              "image": "https://rhythmraga.com/images/academy-hero.jpg",
              "telephone": "+1-555-123-4567",
              "email": "info@rhythmraga.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Music Boulevard",
                "addressLocality": "Harmony Heights",
                "addressRegion": "CA",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.7749", // Update with actual coordinates
                "longitude": "-122.4194"
              },
              "openingHours": [
                "Mo-Fr 09:00-21:00",
                "Sa 08:00-18:00", 
                "Su 10:00-16:00"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "37.7749",
                  "longitude": "-122.4194"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Music and Dance Programs",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Indian Vocal Music",
                      "description": "Classical and semi-classical Indian vocal music training",
                      "provider": {
                        "@type": "Organization",
                        "name": "Rhythm Raga Academy"
                      }
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Bollywood Dance",
                      "description": "Energetic Bollywood dance classes for adults and children",
                      "provider": {
                        "@type": "Organization",
                        "name": "Rhythm Raga Academy"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course", 
                      "name": "Tabla",
                      "description": "Traditional Indian percussion instrument training",
                      "provider": {
                        "@type": "Organization",
                        "name": "Rhythm Raga Academy"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Guitar",
                      "description": "Guitar lessons covering classical, folk, and contemporary styles",
                      "provider": {
                        "@type": "Organization",
                        "name": "Rhythm Raga Academy"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wedding Choreography",
                      "description": "Custom wedding dance choreography services",
                      "provider": {
                        "@type": "Organization",
                        "name": "Rhythm Raga Academy"
                      }
                    }
                  }
                ]
              },
              "founder": {
                "@type": "Person",
                "name": "Priya Sharma",
                "jobTitle": "Founder & Lead Vocal Instructor"
              },
              "foundingDate": "2014",
              "areaServed": {
                "@type": "State",
                "name": "California"
              },
              "sameAs": [
                "https://www.facebook.com/rhythmragaacademy",
                "https://www.instagram.com/rhythmragaacademy", 
                "https://www.youtube.com/rhythmragaacademy"
              ]
            })
          }}
        />
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Rhythm Raga</h3>
              <p>Premier Music & Dance Academy</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/offerings">Our Offerings</a></li>
                <li><a href="/registration">Register</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Email: info@rhythmraga.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Rhythm Raga Academy. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}