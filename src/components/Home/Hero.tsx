"use client"

import { Button, Flex, Icon, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from "framer-motion";

interface HeroProps {
  data: any
}

export default function Hero({ data }: HeroProps) {

  const MotionText = motion(Text as any);
  const MotionFlex = motion(Flex as any);
  const MotionImage = motion(Image as any);

  return (
    <Flex
      bg="linear-gradient(180deg, #212E33 0%, #202222 100%)"
      w="100%"
      px={{ base: "16px", sm: "24px", md: "80px", lg: "190px" }}
      pt={{ base: "140px", sm: "120px", md: "180px", lg: "220px" }}
      pb={{ base: "60px", sm: "80px", md: "100px", lg: "120px" }}
      position="relative"
      direction={{ base: "column", md: "row" }}
      gap={{ base: "40px", md: "0" }}
    >
      <Flex
        w={{ base: "100%", md: "60%", lg: "65%" }}
        direction="column"
        gap={{ base: "24px", md: "32px", lg: "40px" }}
        px={{ base: "8px", sm: "24px", md: "0" }}
        zIndex={1}
      >
        <MotionText
          color="white"
          fontSize={{ base: "24px", sm: "32px", md: "40px", lg: "48px" }}
          fontWeight={700}
          lineHeight={{ base: "32px", sm: "42px", md: "52px", lg: "64px" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {data?.titulo_hero}
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
            {data?.descripcion_hero}
          </Text>

          <Link
            href={"/contacto"}
          >
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
          </Link>
        </MotionFlex>
      </Flex>

      <MotionImage
        position={{ base: "absolute" }}
        right="0"
        top="0"
        bottom="0"
        src="/bgHeroHome.png"
        alt="Fondo ondulado"
        width={{ base: "100%", md: "50%" }}
        height="100%"
        objectFit="cover"
        objectPosition="center right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        zIndex={0}
      />


      <Flex
        mt={{ base: "400px", md: "0px" }}
      >
        <MotionImage
          position={{ base: "absolute" }}
          right={{ base: "0%", md: "0%" }}
          bottom="0"
          src="/PortadaHeroHome.png"
          alt="Aplicación móvil TopLeague"
          width={{ base: "100%", sm: "90%", md: "45%" }}
          height="auto"
          maxHeight={{ base: "60%", sm: "70%", md: "90%" }}
          objectFit="contain"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut"
          }}
          zIndex={1}
        />
      </Flex>
    </Flex>
  )
}
