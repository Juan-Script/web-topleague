import Destacados from "@/components/Home/Destacados";
import Funcionalidades from "@/components/Home/Funcionalidades";
import Hero from "@/components/Home/Hero";
import Testimonios from "@/components/Home/Testimonios";
import CardContacto from "@/components/shared/CardContacto";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Flex
        px={"135px"}
        py={"100px"}
        bg="#202222"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Text
          fontSize="40px"
          fontWeight={700}
          color="white"
          lineHeight="50px"
        >
          Una nueva forma de ver tu juego fantasy
        </Text>
      </Flex>

      <Destacados />

      <Funcionalidades />

      <Testimonios />

      <CardContacto />

      <Footer />
    </>
  );
}
