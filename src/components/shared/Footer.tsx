'use client'

import { Flex, Link as ChakraLink, Text, Image, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { PiChatsThin } from 'react-icons/pi'

export default function Footer() {

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Federaciones",
      href: "/federaciones",
    },
    {
      label: "Dioses de fantasy",
      href: "/dioses-de-fantasy",
    },
    {
      label: "Noticias",
      href: "/noticias",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },
  ]

  const socialMedia = [
    {
      label: "Facebook",
      href: "https://www.facebook.com",
      icon: FaFacebook
    },
    {
      label: "Twitter",
      href: "https://www.twitter.com",
      icon: AiFillTwitterCircle
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com",
      icon: FaLinkedin
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com",
      icon: AiFillInstagram
    },
  ]

  return (
    <Flex
      bg="linear-gradient(180deg, #202222 0%, #212E33 100%)"
      w="100%"
      px={{ base: "20px", sm: "40px", md: "80px", lg: "135px" }}
      direction="column"
      gap="30px"
    >
      <Flex
        borderTop="1px solid white"
        borderBottom="1px solid white"
        py="20px"
        justifyContent="space-between"
        w="100%"
        direction={{ base: "column", md: "row" }}
        gap={{ base: "20px", md: "0" }}
      >
        <Flex
          gap={{ base: "20px", md: "40px" }}
          alignItems="center"
          flexWrap="wrap"
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          {links.map((link, index) => (
            <ChakraLink
              as={Link}
              href={link.href}
              key={link.label}
              color="white"
              fontSize="16px"
              fontWeight="400"
            >
              {link.label}
            </ChakraLink>
          ))}
        </Flex>

        <Flex
          gap={{ base: "20px", md: "40px" }}
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <ChakraLink
            as={Link}
            href={"/aviso-legal"}
            color="white"
            fontSize="16px"
            fontWeight="400"
          >
            Aviso legal
          </ChakraLink>

          <ChakraLink
            as={Link}
            href={"/politica-de-privacidad"}
            color="white"
            fontSize="16px"
            fontWeight="400"
          >
            Política de privacidad
          </ChakraLink>
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-between"
        w="100%"
        alignItems={{ base: "center", lg: "flex-start" }}
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "60px", lg: "0" }}
      >
        <Image
          src="/LogoTipo.png"
          alt="Logo"
          width="146px"
          height="26px"
        />

        <Flex
          direction="column"
          gap="20px"
          alignItems={{ base: "center", lg: "flex-start" }}
        >
          <Text
            fontSize="20px"
            fontWeight="700"
            color="#0094F1"
          >
            ¿Tienes alguna pregunta?
          </Text>

          <Flex
            gap="15px"
            alignItems="flex-start"
          >
            <Icon
              as={PiChatsThin}
              color="#0094F1"
              boxSize="40px"
            />

            <Flex
              direction="column"
              color="white"
              fontSize="16px"
              fontWeight="400"
              gap="7px"
            >
              <Text>
                +34 91 123 45 67
              </Text>

              <Text>
                info@topleague.es
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          direction="column"
          gap="24px"
          alignItems={{ base: "center", lg: "flex-start" }}
        >
          <Text
            fontSize="20px"
            fontWeight="700"
            color="#0094F1"
          >
            Síguenos
          </Text>

          <Flex
            direction="column"
            gap="24px"
            alignItems="flex-start"
          >
            {socialMedia.map((social) => (
              <ChakraLink
                as={Link}
                href={social.href}
                key={social.label}
                display="flex"
                alignItems="center"
                gap="15px"
              >
                <Icon
                  as={social.icon}
                  color="#0094F1"
                  boxSize="22px"
                />

                <Text
                  fontSize="16px"
                  fontWeight="500"
                  color="white"
                >
                  {social.label}
                </Text>
              </ChakraLink>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        borderTop="1px solid white"
        w="100%"
        py="30px"
      >
        <Text
          color="white"
          fontSize="16px"
          fontWeight="400"
        >
          Copyright &copy; 2024 TopLeague.
        </Text>
      </Flex>
    </Flex>
  )
}
