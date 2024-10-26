"use client"

import { Button, Flex, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function Hero() {
  return (
    <Flex
      bg="linear-gradient(180deg, #212E33 0%, #202222 100%)"
      w="100%"
      px={"190px"}
      pt={"220px"}
      pb={"120px"}
      position="relative"
    >
      <Flex
        w={"65%"}
        direction="column"
        gap={"40px"}
      >
        <Text
          color="white"
          fontSize="48px"
          fontWeight={700}
          lineHeight="64px"
        >
          ¡Únete a la comunidad fantasy de TopLeague y vive una temporada llena de emociones y diversión!
        </Text>

        <Text
          color="white"
          fontSize="20px"
          fontWeight={400}
          lineHeight="32px"
        >
          Disfruta del futbol fantasy cada temporada dentro de una comunidad sana y divertida gestionada con pasión para que tú solo disfrutes. Juega distintas competiciones, enfréntate al resto de equipos de TopLeague y descubre una nueva experiencia fantasy.
        </Text>

        <Button
          bg="#0094F1"
          color="white"
          rounded="8px"
          px={"20px"}
          py={"14px"}
          w={"fit-content"}
          h={"fit-content"}
          fontSize={"14px"}
          fontWeight={700}
          lineHeight={"18px"}
          rightIcon={
            <Icon
              as={BsArrowRight}
              boxSize="16px"
            />
          }
        >
          Contactar
        </Button>
      </Flex>

      <Image
        position="absolute"
        top={0}
        right={0}
        src="/bgHero.png"
        alt="bgHero"
        width={791}
        height={800}
      />
    </Flex >
  )
}
