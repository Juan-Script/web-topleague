"use client"

import { Flex, Image, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Funcionalidades() {

  const MotionFlex = motion(Flex as any);


  const funcionalidadesRef = useRef(null)

  const isInView = useInView(funcionalidadesRef, {
    once: true,
    amount: 0.3
  })

  return (
    <Flex
      ref={funcionalidadesRef}
      bg="#212E33"
      w="100%"
      px={{ base: "20px", sm: "40px", md: "80px", lg: "135px" }}
      py={{ base: "60px", md: "100px" }}
      gap={{ base: "40px", md: "80px" }}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        direction="column"
        gap={{ base: "24px", md: "36px" }}
      >
        <Text
          fontSize={{ base: "28px", md: "40px" }}
          fontWeight={700}
          color="white"
          lineHeight="50px"
          textAlign={{ base: "center", md: "left" }}
        >
          Reiventamos tu fantasy de siempre
        </Text>

        <Text
          fontSize="20px"
          fontWeight={400}
          color="white"
          lineHeight="32px"
          textAlign={{ base: "center", md: "left" }}
        >
          Una app única que llevará tu experiencia de juego más allá
        </Text>
      </Flex>

      <Flex
        gap={{ base: "40px", md: "100px" }}
        alignItems="center"
        justifyContent="center"
        maxW="825px"
        direction={{ base: "column", md: "row" }}
      >
        <MotionFlex
          minW="236px"
          minH="491px"
          borderRadius="22px"
          background="rgba(255, 255, 255, 0.04)"
          shadow="0px 10px 60px 0px rgba(153, 153, 153, 0.07)"
          alignItems="center"
          justifyContent="center"
          initial={{ opacity: 0, x: { base: -50, md: -200 } }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: { base: -50, md: -200 } }}
          transition={{ duration: 1 }}
        >
          <Image
            zIndex={99}
            src="/app1.png"
            alt="app1"
            w="216px"
            h="467px"
          />
        </MotionFlex>

        <MotionFlex
          direction="column"
          gap="30px"
          initial={{ opacity: 0, x: { base: 50, md: 200 } }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: { base: 50, md: 200 } }}
          transition={{ duration: 1 }}
        >
          <Text
            fontSize="24px"
            fontWeight={700}
            color="white"
            lineHeight="32px"
            textAlign={{ base: "center", md: "left" }}
          >
            Ver Resultados y tu Posición
          </Text>

          <Text
            fontSize="16px"
            fontWeight={400}
            color="white"
            lineHeight="24px"
            textAlign={{ base: "center", md: "left" }}
          >
            Consulta los resultados de los partidos en tiempo real y verifica tu posición en las ligas. Sigue de cerca tu progreso y el de tus rivales para ajustar tu estrategia y alcanzar la cima.
          </Text>
        </MotionFlex>
      </Flex>

      <Flex
        gap={{ base: "40px", md: "100px" }}
        maxW="825px"
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column-reverse", md: "row" }}
      >
        <MotionFlex
          direction="column"
          gap="80px"
          initial={{ opacity: 0, x: { base: -50, md: -200 } }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: { base: -50, md: -200 } }}
          transition={{ duration: 1 }}
        >
          <Flex
            direction="column"
            gap="10px"
          >
            <Text
              fontSize="24px"
              fontWeight={700}
              color="white"
              lineHeight="32px"
              textAlign={{ base: "center", md: "left" }}
            >
              Funda tu club
            </Text>

            <Text
              fontSize="16px"
              fontWeight={400}
              color="white"
              lineHeight="24px"
              textAlign={{ base: "center", md: "left" }}
            >
              Crea y personaliza tu equipo, su escudo, estadio e incluso nombra al presidente que te representará y haz que toda la comunidad conozca tu club.
            </Text>
          </Flex>

          <Flex
            direction="column"
            gap="10px"
          >
            <Text
              fontSize="24px"
              fontWeight={700}
              color="white"
              lineHeight="32px"
              textAlign={{ base: "center", md: "left" }}
            >
              Compite en más torneos que nunca:
            </Text>

            <Text
              fontSize="16px"
              fontWeight={400}
              color="white"
              lineHeight="24px"
              textAlign={{ base: "center", md: "left" }}
            >
              Participa en múltiples competiciones con diferentes modos de juego, clasificación y puntuación que te harán luchar por títulos hasta final de temporada.
            </Text>
          </Flex>
        </MotionFlex>

        <MotionFlex
          minW="236px"
          minH="491px"
          borderRadius="22px"
          background="rgba(255, 255, 255, 0.04)"
          shadow="0px 10px 60px 0px rgba(153, 153, 153, 0.07)"
          alignItems="center"
          justifyContent="center"
          initial={{ opacity: 0, x: { base: 50, md: 200 } }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            zIndex={99}
            src="/app2.png"
            alt="app2"
            w="216px"
            h="467px"
          />
        </MotionFlex>
      </Flex>

      <Flex
        gap={{ base: "40px", md: "100px" }}
        maxW="825px"
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
      >
        <MotionFlex
          minW="236px"
          minH="491px"
          borderRadius="22px"
          background="rgba(255, 255, 255, 0.04)"
          shadow="0px 10px 60px 0px rgba(153, 153, 153, 0.07)"
          alignItems="center"
          justifyContent="center"
          initial={{ opacity: 0, x: { base: -50, md: -200 } }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            zIndex={99}
            src="/app3.png"
            alt="app3"
            w="216px"
            h="467px"
          />
        </MotionFlex>

        <MotionFlex
          direction="column"
          gap="30px"
          initial={{ opacity: 0, x: { base: 50, md: 200 } }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Text
            fontSize="24px"
            fontWeight={700}
            color="white"
            lineHeight="32px"
            textAlign={{ base: "center", md: "left" }}
          >
            Emoción hasta la última joranada
          </Text>

          <Text
            fontSize="16px"
            fontWeight={400}
            color="white"
            lineHeight="24px"
            textAlign={{ base: "center", md: "left" }}
          >
            Mantente al día con los resultados de todos los partidos y ligas. ¡No te pierdas ni un solo gol!
          </Text>
        </MotionFlex>
      </Flex>
    </Flex>
  )
}
