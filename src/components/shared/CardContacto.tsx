"use client"

import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
export default function CardContacto() {
  const MotionFlex = motion(Flex as any);

  const cardContactoRef = useRef(null)

  const isInView = useInView(cardContactoRef, {
    once: true,
    amount: 0.3
  })

  return (
    <Flex
      direction="column"
      gap={{ base: "30px", md: "50px" }}
      bg="#202222"
      px={{ base: "20px", sm: "40px", md: "80px", lg: "135px" }}
      py={{ base: "50px", md: "100px" }}
      justifyContent="center"
      alignItems="center"
    >
      <MotionFlex
        ref={cardContactoRef}
        bg="#0094F1"
        px={{ base: "20px", sm: "40px", md: "60px" }}
        py={{ base: "30px", sm: "40px", md: "50px" }}
        justifyContent="space-between"
        alignItems="center"
        borderRadius="8px"
        w="100%"
        position="relative"
        overflow="hidden"
        flexDirection={{ base: "column", sm: "row" }}
        gap={{ base: "20px", sm: "0" }}
        initial={{ opacity: 0}}
        animate={isInView ? { opacity: 1 } : { opacity: 0}}
        transition={{ duration: 1 }}
      >
        <Flex
          direction="column"
          gap="10px"
        >
          <Box
            bg="white"
            w="45px"
            h="3px"
          />

          <Text
            color="white"
            fontSize={{ base: "28px", sm: "32px", md: "40px" }}
            fontWeight={700}
          >
            ¡Pruébala ya!
          </Text>
        </Flex>

        <Link
          href={"/descarga"}
        >
          <Button
            bg="transparent"
          px="20px"
          py="14px"
          w="fit-content"
          h="fit-content"
          rounded="8px"
          border="1px solid white"
          color="white"
          fontSize={{ base: "12px", md: "14px" }}
          fontWeight={700}
          lineHeight="18px"
          zIndex={99}
        >
            Comienza
          </Button>
        </Link>

        <Box
          position="absolute"
          bottom={{ base: "-109px", md: "-259px" }}
          right={{ base: "-185px", sm: "-100px", md: "-80px" }}
          rounded="100%"
          w={{ base: "328px", md: "528px" }}
          h={{ base: "358px", md: "558px" }}
          bg="#202222"
          opacity={0.5}
        />
      </MotionFlex>
    </Flex>
  )
}
