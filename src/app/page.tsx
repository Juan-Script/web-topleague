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
        px={{
          base: "20px",
          xs: "30px",
          sm: "60px",
          md: "100px",
          lg: "135px"
        }}
        py={{
          base: "60px",
          sm: "80px",
          md: "100px"
        }}
        bg="#202222"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Text
          fontSize={{
            base: "24px",
            xs: "28px",
            sm: "32px",
            md: "36px",
            lg: "40px"
          }}
          fontWeight={700}
          color="white"
          lineHeight="50px"
          textAlign={{ base: "center", lg: "left" }}
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
