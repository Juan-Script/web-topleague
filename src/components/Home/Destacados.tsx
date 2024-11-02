"use client"

import { Flex, Icon, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PiLayoutFill, PiPenNibStraightFill } from 'react-icons/pi'

export default function Destacados() {

  const items = [
    {
      title: "Resultados en Tiempo Real",
      description: "Mantente al día con los resultados de todos los partidos y ligas. ¡No te pierdas ni un solo gol!",
      icon: PiPenNibStraightFill
    },
    {
      title: "Estadísticas Detalladas",
      description: "Accede a estadísticas completas de todos los equipos y jugadores para tomar decisiones informadas y certeras.",
      icon: PiPenNibStraightFill
    },
    {
      title: "Emoción hasta la última jornada",
      description: "Tu Liga ha ideado un sistema de triple competición, que llevará a los managers al límite exigiendo adaptarse a cada modo de juego a lo largo del año.",
      icon: PiPenNibStraightFill
    },
    {
      title: "Multiliga y Gestión Integral",
      description: "Personaliza tu equipo con jugadores únicos, diseña tu estadio y ajusta las reglas de tu liga para una experiencia a tu medida.",
      icon: PiLayoutFill

    }
  ]

  const MotionFlex = motion(Flex);

  const destacadosRef = useRef(null)

  const isInView = useInView(destacadosRef, {
    once: true,
    amount: 0.3
  })

  return (
    <Flex
      ref={destacadosRef}
      px={{ base: "20px", sm: "40px", md: "80px", lg: "135px" }}
      py={{ base: "50px", md: "80px", lg: "100px" }}
      bg="#202222"
      justifyContent="center"
      alignItems="center"
      w="100%"
      gap={{ base: "20px", md: "30px" }}
      position="relative"
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Flex
        direction="column"
        gap={{ base: "20px", md: "40px" }}
        w={{ base: "100%", lg: "35%" }}
        textAlign={{ base: "center", lg: "left" }}
      >
        <Text
          color="white"
          fontSize={{ base: "28px", sm: "32px", md: "40px" }}
          fontWeight="700"
          lineHeight={{ base: "36px", md: "50px" }}
        >
          Únete a la comunidad de TopLeague
        </Text>

        <Text
          color="white"
          fontSize={{ base: "16px", md: "20px" }}
          fontWeight="400"
          lineHeight={{ base: "24px", md: "32px" }}
        >
          Todo lo que necesitas para una experiencia de liga fantasy inigualable.
        </Text>
      </Flex>

      <SimpleGrid
        w={{ base: "100%", lg: "65%" }}
        columns={{ base: 1, sm: 2 }}
        spacing={{ base: "20px", md: "30px" }}
      >
        {items.map((item, index) => (
          <MotionFlex
            key={index}
            p={{ base: "20px", md: "30px" }}
            direction="column"
            gap={{ base: "20px", md: "30px" }}
            borderRadius="22px"
            bg="rgba(255, 255, 255, 0.10)"
            boxShadow="0px 10px 60px 0px rgba(153, 153, 153, 0.07)"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <Flex
              gap={{ base: "15px", md: "30px" }}
              alignItems="center"
            >
              <Flex
                w={{ base: "48px", md: "64px" }}
                h={{ base: "48px", md: "64px" }}
                p={{ base: "10px", md: "13px" }}
                borderRadius="12px"
                bg="#0094F1"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={item?.icon} color="white" boxSize={{ base: "28px", md: "38px" }} />
              </Flex>

              <Text
                color="white"
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight="700"
                lineHeight={{ base: "28px", md: "32px" }}
              >
                {item?.title}
              </Text>
            </Flex>

            <Text
              color="white"
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="700"
              lineHeight={{ base: "20px", md: "24px" }}
            >
              {item?.description}
            </Text>
          </MotionFlex>
        ))}
      </SimpleGrid>

      <Image
        src="/bgMid.png"
        alt="bgMid"
        position="absolute"
        bottom="-50%"
        left="0"
        w={{ base: "300px", md: "407px", lg: "507px" }}
        h={{ base: "462px", md: "582px", lg: "782px" }}
        display={{ base: "none", md: "block" }}
      />
    </Flex>
  )
}
