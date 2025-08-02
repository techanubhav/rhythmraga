import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Registration - Enroll Today',
  description: 'Register for music and dance classes at Rhythm Raga Academy. Easy online enrollment for Indian Vocal, Bollywood Dance, Tabla, Guitar, and Wedding Choreography programs. All ages welcome.',
  keywords: 'student registration, music class enrollment, dance class registration, Indian vocal music registration, Bollywood dance enrollment, tabla class signup, guitar lessons enrollment',
  openGraph: {
    title: 'Register for Music & Dance Classes at Rhythm Raga Academy',
    description: 'Start your musical journey today! Easy online registration for all our programs. Expert instructors, flexible scheduling, and proven results.',
    url: '/registration',
    images: [
      {
        url: '/images/registration-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Student registration at Rhythm Raga Academy',
      },
    ],
  },
  twitter: {
    title: 'Register for Music & Dance Classes at Rhythm Raga Academy',
    description: 'Start your musical journey today! Easy online registration for all our programs.',
  },
}

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}