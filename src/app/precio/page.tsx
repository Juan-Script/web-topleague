import HeroPrecio from "@/components/Precio/Hero";
import CardContacto from "@/components/shared/CardContacto";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Flex, Text } from "@chakra-ui/react";

export default function page() {
    return (
        <>
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
        </>
    )
}
