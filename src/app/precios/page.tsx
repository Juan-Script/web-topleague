import HeroPrecio from "@/components/Precio/Hero";
import CardContacto from "@/components/shared/CardContacto";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Flex, Text } from "@chakra-ui/react";
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

export default function page() {
    return (
        <Flex
            direction="column"
            bg="#202222"
        >
            <Header />

            <HeroPrecio />

            <Flex
                px={{ base: "20px", sm: "40px", md: "80px", lg: "135px" }}
                pt={{ base: "60px", md: "80px", lg: "100px" }}
                bg="#202222"
                justifyContent="center"
                alignItems="center"
                w="100%"
            >
                <Text
                    fontSize={{ base: "24px", sm: "28px", md: "32px", lg: "40px" }}
                    fontWeight={700}
                    color="white"
                    lineHeight={{ base: "32px", sm: "38px", md: "44px", lg: "50px" }}
                    textAlign="center"
                >
                    Hecho por <Text as="span" color="#0094F1">JUGADORES</Text> para <Text as="span" color="#0094F1">JUGADORES</Text>
                </Text>
            </Flex>

            <CardContacto />

            <Footer />
        </Flex>
    )
}
