import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import CardContacto from '@/components/shared/CardContacto'
import HeroCompeticiones from '@/components/Competiciones/Hero'

export default function page() {
  return (
    <>
      <Header />

      <HeroCompeticiones />

      <CardContacto />

      <Footer />
    </>
  )
}
