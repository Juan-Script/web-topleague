"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Flex, Text } from "@chakra-ui/react";

export default function ContentDescarga() {
  return (
    <Flex
        minH="100vh"
        direction="column"
        alignItems="center"
        justifyContent="center"
        p={4}
        bg="linear-gradient(180deg, #202222 0%, #212E33 100%)"
        px={{
          base: "20px",
          sm: "40px",
          md: "80px",
          lg: "135px"
        }}
        py={{
          base: "100px",
          md: "160px",
          lg: "220px"
        }}
      >
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Text
            fontSize={{
              base: "28px",
              sm: "32px",
              md: "40px",
              lg: "48px"
            }}
            fontWeight={700}
            color="white"
            textAlign="center"
            mb={8}
          >
            ¡Descarga la app ya!
          </Text>
        </motion.div>

        <Flex
          direction={{ base: "column", md: "row" }}
          gap={6}
          mt={8}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="https://play.google.com/store/apps/details?id=topleague.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <Image
                src="/descargaPlayDark.png"
                alt="Disponible en Google Play"
                width={300}
                height={60}
                className="rounded-lg"
              />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="https://apps.apple.com/es/app/topleague/id6563145410 " target="_blank" rel="noopener noreferrer">
              <Image
                src="/descargaAppDark.png"
                alt="Disponible en App Store"
                width={300}
                height={60}
                className="rounded-lg"
              />
            </Link>
          </motion.div>
        </Flex>
      </Flex>
  )
}
