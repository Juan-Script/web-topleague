import ContentDescarga from "@/components/Descarga/ContentDescarga";
import Header from "@/components/shared/Header";
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

export default function DescargaPage() {
  return (
    <>
      <Header />
      
      <ContentDescarga />

    </>
  );
}
