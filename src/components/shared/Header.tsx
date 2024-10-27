'use client'

import { Flex, Image, Link as ChakraLink, Button, IconButton, useDisclosure, Show, Hide } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { MenuDrawer } from './MenuDrawer'
import { BiMenu } from 'react-icons/bi'

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      bg="transparent"
      w="100%"
      px={{ base: "20px", md: "40px", lg: "135px" }}
      h="100px"
      alignItems="center"
      justifyContent="space-between"
      position="absolute"
      top="0"
      left="0"
      right="0"
      zIndex="999"
    >
      <ChakraLink as={Link} href="/">
        <Image
          src="/LogoTipo.png"
          alt="Logo"
          width="146px"
          height="26px"
        />
      </ChakraLink>

      <Hide below="md">
        <Flex gap="40px" alignItems="center">
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
            href={"/precios"}
            color="white"
            fontSize="14px"
            fontWeight="700"
            lineHeight="18px"
          >
            Precios
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
      </Hide>

      <Show below="md">
        <IconButton
          aria-label="Abrir menú"
          icon={<BiMenu />}
          onClick={onOpen}
          variant="ghost"
          color="white"
          size="lg"
        />
      </Show>

      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
