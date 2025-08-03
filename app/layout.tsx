import type { Metadata } from 'next'
import './globals.css'
import { getSanityData } from '@/lib/sanity'
import SocialIcon from '@/components/SocialIcons'
import Image from 'next/image'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch footer content from Sanity
  const footerContent = await getSanityData('footer')
  
  // Calculate current year for copyright
  const currentYear = new Date().getFullYear()
  
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/opv5oct.css" />
      </head>
      <body>
        <header>
          <nav className="navbar">
            <div className="nav-container">
              <div className="nav-logo">
                <Image 
                  src="/images/logo.png" 
                  alt="Rhythm Raga Academy" 
                  width={120}
                  height={80}
                  priority={true}
                  sizes="120px"
                  style={{height: '80px', width: 'auto'}}
                />
              </div>
              <div className="nav-menu" id="navMenu">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About Us</a>
                <a href="/offerings" className="nav-link">Offerings</a>
                <a href="/registration" className="nav-link">Student Registration</a>
                <a href="/contact" className="nav-link">Contact Us</a>
              </div>
              <div className="nav-toggle" id="navToggle">
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
              "logo": "https://rhythmraga.com/images/logo.png",
              "image": "https://rhythmraga.com/images/academy-hero.jpg",
              "telephone": "+1-555-123-4567",
              "email": "mansibh10@gmail.com",
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
              <a href="/" className="footer-logo">
                <Image
                  src="/images/logo_gold.png"
                  alt={footerContent?.academyInfo?.name || "Rhythm Raga Academy"}
                  width={120}
                  height={80}
                  sizes="120px"
                  className="footer-logo-img"
                />
              </a>
              <p>{footerContent?.academyInfo?.tagline || "Premier Music & Dance Academy"}</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                {footerContent?.quickLinks && footerContent.quickLinks.length > 0 ? (
                  footerContent.quickLinks.map((link: any, index: number) => (
                    <li key={index}>
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))
                ) : (
                  <>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/offerings">Our Offerings</a></li>
                    <li><a href="/registration">Register</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </>
                )}
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>{footerContent?.contactInfo?.email || "mansibh10@gmail.com"}</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>{footerContent?.contactInfo?.phone || "+61 402 286 502"}</span>
              </div>
              {footerContent?.contactInfo?.address && (
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>{footerContent.contactInfo.address}</span>
                </div>
              )}
              {footerContent?.socialMedia && footerContent.socialMedia.length > 0 && (
                <div style={{marginTop: '1.5rem'}}>
                  <h5 style={{marginBottom: '0.75rem', fontSize: '1rem', color: 'var(--accent-color)'}}>Follow Us</h5>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    {footerContent.socialMedia.map((social: any, index: number) => (
                      <SocialIcon
                        key={index}
                        platform={social.platform}
                        url={social.url}
                        size={24}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {footerContent?.copyright?.customText || (
                `© ${footerContent?.copyright?.startYear && footerContent.copyright.startYear !== currentYear 
                  ? `${footerContent.copyright.startYear}-${currentYear}` 
                  : currentYear} ${footerContent?.copyright?.companyName || "Rhythm Raga Academy"}. All rights reserved.`
              )}
            </p>
          </div>
        </footer>
        
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const toggle = document.getElementById('navToggle');
              const menu = document.getElementById('navMenu');
              
              if (toggle && menu) {
                toggle.addEventListener('click', function() {
                  menu.classList.toggle('show');
                });
                
                // Close menu when clicking on links
                menu.addEventListener('click', function(e) {
                  if (e.target.classList.contains('nav-link')) {
                    menu.classList.remove('show');
                  }
                });
              }
            });
          `
        }} />
      </body>
    </html>
  )
}