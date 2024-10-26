import { Box, Button, Flex, Text } from "@chakra-ui/react"

export default function CardContacto() {
  return (
    <Flex
      direction="column"
      gap="50px"
      bg="#202222"
      px={"135px"}
      py={"100px"}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        bg="#0094F1"
        px={"60px"}
        py={"50px"}
        justifyContent="space-between"
        alignItems="center"
        borderRadius="8px"
        w="100%"
        position="relative"
        overflow="hidden"
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
            fontSize="40px"
            fontWeight={700}
          >
            ¡Pruébala ya!
          </Text>
        </Flex>

        <Button
          bg="transparent"
          px="20px"
          py="14px"
          w="fit-content"
          h="fit-content"
          rounded="8px"
          border="1px solid white"
          color="white"
          fontSize="14px"
          fontWeight={700}
          lineHeight="18px"
          zIndex={99}
        >
          Contacto
        </Button>

        <Box
          position="absolute"
          bottom="-259px"
          right="-80px"
          rounded="100%"
          w="528px"
          h="558px"
          bg="#202222"
          opacity={0.5}
        />
      </Flex>
    </Flex>
  )
}
