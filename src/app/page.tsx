import Banner from "@/components/Home/Banner";
import Destacados from "@/components/Home/Destacados";
import Funcionalidades from "@/components/Home/Funcionalidades";
import Hero from "@/components/Home/Hero";
import Testimonios from "@/components/Home/Testimonios";
import CardContacto from "@/components/shared/CardContacto";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Metadata } from "next";

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

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Banner />

      <Destacados />

      <Funcionalidades />

      <Testimonios />

      <CardContacto />

      <Footer />
    </>
  );
}
