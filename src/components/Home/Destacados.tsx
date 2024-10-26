"use client"

import { Flex, Icon, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
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

  return (
    <Flex
      px={"135px"}
      py={"100px"}
      bg="#202222"
      justifyContent="center"
      alignItems="center"
      w="100%"
      gap="30px"
      position="relative"
    >
      <Flex
        direction="column"
        gap="40px"
        w={"35%"}
      >
        <Text
          color="white"
          fontSize="40px"
          fontWeight="700"
          lineHeight="50px"
        >
          Únete a la comunidad de TopLeague
        </Text>

        <Text
          color="white"
          fontSize="20px"
          fontWeight="400"
          lineHeight="32px"
        >
          Todo lo que necesitas para una experiencia de liga fantasy inigualable.
        </Text>
      </Flex>

      <SimpleGrid
        w={"65%"}
        columns={2}
        spacing={"30px"}
      >
        {items.map((item, index) => (
          <Flex
            key={index}
            p="30px"
            direction="column"
            gap="30px"
            borderRadius="22px"
            bg="rgba(255, 255, 255, 0.10)"
            boxShadow="0px 10px 60px 0px rgba(153, 153, 153, 0.07)"
          >
            <Flex
              gap="30px"
              alignItems="center"
            >
              <Flex
                w="64px"
                h="64px"
                p="13px"
                borderRadius="12px"
                bg="#0094F1"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={item?.icon} color="white" boxSize="38px" />
              </Flex>

              <Text
                color="white"
                fontSize="24px"
                fontWeight="700"
                lineHeight="32px"
              >
                {item?.title}
              </Text>
            </Flex>

            <Text
              color="white"
              fontSize="16px"
              fontWeight="700"
              lineHeight="24px"
            >
              {item?.description}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>

      <Image
        src="/bgMid.png"
        alt="bgMid"
        position="absolute"
        bottom="-50%"
        left="0"
        w="507px"
        h="782px"
      />
    </Flex>
  )
}
