import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact Rhythm Raga Academy for inquiries about music and dance classes. Call us at +61 402 286 502, or send a message. We\'d love to hear from you!',
  keywords: 'contact rhythm raga academy, music academy contact, dance academy phone number, academy location, music class inquiries, dance class questions, academy address',
  openGraph: {
    title: 'Contact Rhythm Raga Academy - We\'d Love to Hear From You',
    description: 'Get in touch with us for any questions about our music and dance programs. Multiple ways to reach us including phone, email, and in-person visits.',
    url: '/contact',
    images: [
      {
        url: '/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Rhythm Raga Academy',
      },
    ],
  },
  twitter: {
    title: 'Contact Rhythm Raga Academy - We\'d Love to Hear From You',
    description: 'Get in touch with us for any questions about our music and dance programs.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}