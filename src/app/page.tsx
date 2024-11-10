"use client"

import Destacados from "@/components/Home/Destacados";
import Funcionalidades from "@/components/Home/Funcionalidades";
import Hero from "@/components/Home/Hero";
import Testimonios from "@/components/Home/Testimonios";
import CardContacto from "@/components/shared/CardContacto";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { motion } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";

// Crear versión animada del componente Text
const MotionText = motion(Text as any);

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
        <MotionText
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
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
        </MotionText>
      </Flex>

      <Destacados />

      <Funcionalidades />

      <Testimonios />

      <CardContacto />

      <Footer />
    </>
  );
}
