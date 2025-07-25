'use client'

import Hero from '../components/home/Hero'
import WhyMavera from '../components/home/WhyMavera'
import Gallery from '../components/home/Gallery'
import CustomizeOccasion from '../components/home/CustomizeOccasion'
import Testimonials from '../components/home/Testimonials'
import ReservationCTA from '../components/home/ReservationCTA'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Cinematic flow with perfect rhythm */}
      <Hero />
      <WhyMavera />
      <Gallery />
      <CustomizeOccasion />
      <Testimonials />
      <ReservationCTA />
    </div>
  )
}
