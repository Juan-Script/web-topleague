import HeroContacto from '@/components/Contacto/Hero'
import CardContacto from '@/components/shared/CardContacto'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import React from 'react'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const TITLE = "TopLeague - Fantasy Football"
  const DESCRIPTION = 'Una nueva forma de ver tu juego fantasy'
  return {
      title: TITLE,
      description: DESCRIPTION,
      robots: {
          index: true,
          follow: true,
          googleBot: {
              index: true,
              follow: true,
          },
      },
      openGraph: {
          type: 'website',
          title: TITLE,
          description: DESCRIPTION,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          images: ["/OP.webp"],
      },
  }
}

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
