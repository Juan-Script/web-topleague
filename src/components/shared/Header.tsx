import { Flex, Image, Link as ChakraLink, Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <Flex
      bg="transparent"
      w="100%"
      px="135px"
      h="100px"
      alignItems="center"
      justifyContent="space-between"
      position="absolute"
      top="0"
      left="0"
      right="0"
      zIndex="999"
    >
      <ChakraLink
        as={Link}
        href="/"
      >
        <Image
          src="/LogoTipo.png"
          alt="Logo"
          width="146px"
          height="26px"
        />
      </ChakraLink>

      <Flex
        gap="40px"
        alignItems="center"
      >
        <ChakraLink
          as={Link}
          href={"/competiciones"}
          color="white"
          fontSize="14px"
          fontWeight="700"
          lineHeight="18px"
        >
          Competiciones
        </ChakraLink>

        <ChakraLink
          as={Link}
          href={"/contacto"}
          color="white"
          fontSize="14px"
          fontWeight="700"
          lineHeight="18px"
        >
          Contacto
        </ChakraLink>

        <Button
          bg="#0094F1"
          color="white"
          rounded="8px"
          px={"14px"}
          py={"10px"}
          h="fit-content"
          w="fit-content"
          fontSize="14px"
          fontWeight="700"
          lineHeight="18px"
          textTransform="uppercase"
        >
          Comienza
        </Button>
      </Flex>
    </Flex>
  )
}
