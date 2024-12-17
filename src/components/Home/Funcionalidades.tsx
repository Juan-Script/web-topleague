"use client"

import { Flex, Image, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FuncionalidadesProps {
  data: any
}

export default function Funcionalidades({ data }: FuncionalidadesProps) {

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
          {data?.general?.titulo_funcionalidad}
        </Text>

        <Text
          fontSize="20px"
          fontWeight={400}
          color="white"
          lineHeight="32px"
          textAlign={{ base: "center", md: "left" }}
        >
          {data?.general?.descripcion_funcionalidad}
        </Text>
      </Flex>

      {data?.funcionalidades?.map((funcionalidad: any, index: number) => (
        <Flex
          gap={{ base: "40px", md: "100px" }}
          alignItems="center"
          justifyContent="center"
          maxW="825px"
          direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
        >
          <MotionFlex
            minW="236px"
            minH="491px"
            borderRadius="22px"
            background="rgba(255, 255, 255, 0.04)"
            shadow="0px 10px 60px 0px rgba(153, 153, 153, 0.07)"
            alignItems="center"
            justifyContent="center"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : (index % 2 === 0 ? -100 : 100)
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              zIndex={99}
              src={funcionalidad?.imagen?.url}
              alt={funcionalidad?.titulo}
              w="216px"
              h="467px"
            />
          </MotionFlex>

          <MotionFlex
            direction="column"
            gap="30px"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? 100 : -100
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : (index % 2 === 0 ? 100 : -100)
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Text
              fontSize="24px"
              fontWeight={700}
              color="white"
              lineHeight="32px"
              textAlign={{ base: "center", md: "left" }}
            >
              {funcionalidad?.titulo}
            </Text>

            <Text
              fontSize="16px"
              fontWeight={400}
              color="white"
              lineHeight="24px"
              textAlign={{ base: "center", md: "left" }}
            >
              {funcionalidad?.descripcion}
            </Text>
          </MotionFlex>
        </Flex>
      ))}
    </Flex>
  )
}
