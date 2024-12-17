import { Button, Flex, Image, Text } from "@chakra-ui/react"
import Link from "next/link"

interface TestimoniosProps {
  data: any
}

export default function Testimonios({ data }: TestimoniosProps) {

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
      <Text
        fontSize={{ base: "28px", md: "40px" }}
        fontWeight={700}
        color="white"
        lineHeight={{ base: "36px", md: "50px" }}
        textAlign="center"
      >
        ¿Qué dicen de nosotros?
      </Text>

      <Flex
        gap={{ base: "20px", md: "50px" }}
        direction={{ base: "column", md: "row" }}
        w="100%"
        align="center"
        justify="center"
      >
        {data?.testimonios?.map((testimonio: any, index: any) => (
          <Flex
            key={index}
            direction="column"
            gap="30px"
            bg="#1E272C"
            rounded="12px"
            p={{ base: "20px", md: "30px" }}
            w={{ base: "100%", md: "360px" }}
            justifyContent="space-between"
            zIndex={99}
            h="340px"
          >
            <Text
              fontSize="16px"
              fontWeight={400}
              color="white"
              lineHeight="24px"
            >
              {testimonio?.testimonio}
            </Text>

            <Flex
              gap="24px"
              alignItems="center"
            >
              <Image
                src={testimonio?.avatar?.url}
                alt={testimonio?.nombre}
                w="60px"
                h="60px"
                rounded="60px"
              />

              <Text
                fontSize="16px"
                fontWeight={600}
                color="white"
                lineHeight="24px"
              >
                {testimonio?.nombre}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>

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

        >
          Contactar
        </Button>
      </Link>
    </Flex>
  )
}
