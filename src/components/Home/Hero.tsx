"use client"

import { Button, Flex, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from "framer-motion";

export default function Hero() {

  const MotionText = motion(Text as any);
  const MotionFlex = motion(Flex as any);
  const MotionImage = motion(Image as any);

  return (
    <Flex
      bg="linear-gradient(180deg, #212E33 0%, #202222 100%)"
      w="100%"
      px={{ base: "0", sm: "0", md: "80px", lg: "190px" }}
      pt={{ base: "100px", sm: "140px", md: "180px", lg: "220px" }}
      pb={{ base: "60px", sm: "80px", md: "100px", lg: "120px" }}
      position="relative"
      direction={{ base: "column", md: "row" }}
      gap={{ base: "40px", md: "0" }}
    >
      <Flex
        w={{ base: "100%", md: "60%", lg: "65%" }}
        direction="column"
        gap={{ base: "24px", md: "32px", lg: "40px" }}
        px={{ base: "20px", sm: "40px", md: "0" }}
        zIndex={1}
      >
        <MotionText
          color="white"
          fontSize={{ base: "28px", sm: "32px", md: "40px", lg: "48px" }}
          fontWeight={700}
          lineHeight={{ base: "36px", sm: "42px", md: "52px", lg: "64px" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          ¡Únete a la comunidad fantasy de TopLeague y vive una temporada llena de emociones y diversión!
        </MotionText>

        <MotionFlex
          direction="column"
          gap={{ base: "24px", md: "32px", lg: "40px" }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text
            color="white"
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            fontWeight={400}
            lineHeight={{ base: "24px", md: "28px", lg: "32px" }}
          >
            Disfruta del futbol fantasy cada temporada dentro de una comunidad sana y divertida gestionada con pasión para que tú solo disfrutes. Juega distintas competiciones, enfréntate al resto de equipos de TopLeague y descubre una nueva experiencia fantasy.
          </Text>

          <Button
            bg="#0094F1"
            color="white"
            rounded="8px"
            px={{ base: "16px", md: "18px", lg: "20px" }}
            py={{ base: "12px", md: "13px", lg: "14px" }}
            w={"fit-content"}
            h={"fit-content"}
            fontSize={{ base: "12px", md: "13px", lg: "14px" }}
            fontWeight={700}
            lineHeight={"18px"}
            rightIcon={
              <Icon
                as={BsArrowRight}
                boxSize={{ base: "14px", md: "15px", lg: "16px" }}
              />
            }
          >
            Contactar
          </Button>
        </MotionFlex>
      </Flex>

      <MotionImage
        position={{ base: "static", md: "absolute" }}
        top={{ md: 0 }}
        right={{ md: 0 }}
        mt={{ base: "-80px", sm: "-80px", md: "0" }}
        src="/bgHero.png"
        alt="bgHero"
        width={{ base: "100%", md: "50%", lg: 791 }}
        height={{ base: "auto", md: "100%", lg: 800 }}
        objectFit="cover"
        initial={{ opacity: 0, x: 200 }}
        animate={{ 
          opacity: 1, 
          x: 0,
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      />
    </Flex>
  )
}
