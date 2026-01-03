import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import Maternity from '@/components/Maternity'
import WhyChoose from '@/components/WhyChoose'
import Testimonials from '@/components/Testimonials'
import Facilities from '@/components/Facilities'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import EmergencyButton from '@/components/EmergencyButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Maternity />
      <WhyChoose />
      <Testimonials />
      <Facilities />
      <Gallery />
      <Contact />
      <Footer />
      <EmergencyButton />
    </main>
  )
}


