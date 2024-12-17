"use client"

import { Flex, Icon, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { HiOutlineViewGridAdd } from 'react-icons/hi'
import { PiLayoutFill, PiPenNibStraightFill } from 'react-icons/pi'
import { RiFootballFill } from 'react-icons/ri'

interface DestacadosProps {
  data: any
}

export default function Destacados({ data }: DestacadosProps) {

  console.log(data)

  const icons = [
    BiTimeFive,
    HiOutlineViewGridAdd,
    RiFootballFill,
    PiLayoutFill
  ]

  const items = data?.carateristicas?.map((item: any, index: number) => ({
    title: item?.titulo,
    description: item?.descripcion,
    icon: icons[index]
  }))

  const MotionFlex = motion(Flex as any);

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
          {data?.general?.titulo_caracteristicas}
        </Text>

        <Text
          color="white"
          fontSize={{ base: "16px", md: "20px" }}
          fontWeight="400"
          lineHeight={{ base: "24px", md: "32px" }}
        >
          {data?.general?.descripcion_caracteristicas}
        </Text>
      </Flex>

      <SimpleGrid
        w={{ base: "100%", lg: "65%" }}
        columns={{ base: 1, sm: 2 }}
        spacing={{ base: "20px", md: "30px" }}
      >
        {items?.map((item: any, index: number) => (
          <MotionFlex
            key={index}
            p={{ base: "20px", md: "30px" }}
            direction="column"
            gap={{ base: "20px", md: "30px" }}
            borderRadius="22px"
            bg="rgba(255, 255, 255, 0.10)"
            boxShadow="0px 10px 60px 0px rgba(153, 153, 153, 0.07)"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
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
