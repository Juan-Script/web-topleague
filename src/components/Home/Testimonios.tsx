import { Button, Flex, Image, Text } from "@chakra-ui/react"

export default function Testimonios() {

  const testimonios = [
    {
      name: "Carlos Méndez",
      testimonio: '"Como jugador de fantasy, siempre busco esa emoción y nuevos desafíos contra mis amigos y otros clubes.Desde que descubrí TopLeague, mi experiencia ha sido increíble y súper recomendable."',
      image: "/person1.png"
    },
    {
      name: "Laura García",
      testimonio: '"Todo está organizado de manera clara y accesible, teniendo los resultados y clasificaciones a mano. Me encanta cómo puedo acceder rápidamente a la información sobre otro club rival o mi calendario de torneos"',
      image: "/person2.png"
    },
    {
      name: "Andrés López",
      testimonio: '"Los torneos y portadas personalizadas han sido un verdadero cambio de ver el juego, hace que la emoción y el buen ambiente esté presente toda la temporada. Poder personalizar mi estadio es un puntazo y lo del presidente me parece muy original"',
      image: "/person3.png"
    }
  ]

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
      <Text
        fontSize="40px"
        fontWeight={700}
        color="white"
        lineHeight="50px"
      >
        ¿Qué dicen de nosotros?
      </Text>

      <Flex
        gap="50px"
      >
        {testimonios.map((testimonio, index) => (
          <Flex
            key={index}
            direction="column"
            gap="30px"
            bg="#F5F6F8"
            rounded="12px"
            p="30px"
            w="360px"
            justifyContent="space-between"
          >
            <Text
              fontSize="16px"
              fontWeight={400}
              color="black"
              lineHeight="24px"
            >
              {testimonio?.testimonio}
            </Text>

            <Flex
              gap="24px"
              alignItems="center"
            >
              <Image
                src={testimonio?.image}
                alt={testimonio?.name}
                w="60px"
                h="60px"
                rounded="60px"
              />

              <Text
                fontSize="16px"
                fontWeight={600}
                color="black"
                lineHeight="24px"
              >
                {testimonio?.name}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <Button
        bg="#0094F1"
        color="white"
        rounded="8px"
        px={"20px"}
        py={"14px"}
        w={"fit-content"}
        h={"fit-content"}
        fontSize={"14px"}
        fontWeight={700}
        lineHeight={"18px"}
      >
        Contactar
      </Button>
    </Flex>
  )
}
