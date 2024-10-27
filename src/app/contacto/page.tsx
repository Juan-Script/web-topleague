import HeroContacto from '@/components/Contacto/Hero'
import CardContacto from '@/components/shared/CardContacto'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import React from 'react'

export default function Contacto() {
  return (
    <>
      <Header />

      <HeroContacto />

      <CardContacto />

      <Footer />
    </>
  )
}
