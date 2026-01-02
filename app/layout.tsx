import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kadisco General Hospital | ካዲስኮ ጠቅላላ ሆስፒታል - Quality Healthcare in Addis Ababa',
  description: 'Kadisco General Hospital is a trusted private hospital in Gerji, Addis Ababa, Ethiopia. Offering 24/7 emergency care, maternity services, surgery, and comprehensive medical care since 2007.',
  keywords: 'Kadisco General Hospital, Hospital in Gerji Addis Ababa, Maternity Hospital Addis Ababa, Ethiopia Hospital, Emergency Care, Surgery, OB/GYN, Pediatrics',
  authors: [{ name: 'Kadisco General Hospital' }],
  openGraph: {
    title: 'Kadisco General Hospital | Comprehensive Healthcare You Can Trust',
    description: '24/7 Medical Services • Advanced Diagnostics • Compassionate Care in Addis Ababa, Ethiopia',
    type: 'website',
    locale: 'en_ET',
    siteName: 'Kadisco General Hospital',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}

