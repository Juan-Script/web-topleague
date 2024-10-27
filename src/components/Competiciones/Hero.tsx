import { Button, Flex, Image, Text } from "@chakra-ui/react";

export default function HeroCompeticiones() {
    return (
        <Flex
            bg="#202222"
            pt={{ base: "50px", md: "100px" }}
        >
            <Flex
                px={{ base: "20px", sm: "40px", md: "80px", lg: "135px" }}
                py={{ base: "50px", md: "100px" }}
                bg="#212E33"
                justifyContent="center"
                alignItems="center"
                w="100%"
                gap={{ base: "40px", md: "80px" }}
                direction="column"
            >
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    gap="15px"
                    px={{ base: "15px", md: "0" }}
                >
                    <Text
                        fontSize={{ base: "28px", sm: "32px", md: "40px" }}
                        fontWeight={700}
                        color="white"
                        lineHeight={{ base: "36px", md: "50px" }}
                        textAlign="center"
                    >
                        Descubre nuestras competiciones
                    </Text>

                    <Text
                        fontSize={{ base: "16px", md: "20px" }}
                        fontWeight={400}
                        color="white"
                        lineHeight={{ base: "24px", md: "32px" }}
                        textAlign="center"
                    >
                        Una app única que llevará tu experiencia de juego más allá
                    </Text>
                </Flex>

                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={{ base: "40px", md: "100px" }}
                >
                    <Flex
                        gap={{ base: "30px", md: "50px", lg: "100px" }}
                        direction={{ base: "column", md: "row" }}
                    >
                        <Flex
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            gap="10px"
                        >
                            <Image
                                src="/liga.png"
                                alt="liga"
                                w="65px"
                                h="65px"
                            />

                            <Text
                                color="white"
                                fontSize="24px"
                                fontWeight={700}
                                lineHeight="32px"
                                textAlign="center"
                            >
                                Top Liga
                            </Text>

                            <Text
                                color="white"
                                fontSize="13px"
                                fontWeight={500}
                                lineHeight="24px"
                                textAlign="center"
                            >
                                Crea y personaliza tu equipo, su escudo, estadio e incluso nombra al presidente que te representará y haz que toda la comunidad conozca tu club.
                            </Text>
                        </Flex>

                        <Flex
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            gap="10px"
                        >
                            <Image
                                src="/copa.png"
                                alt="copa"
                                w="65px"
                                h="65px"
                            />

                            <Text
                                color="white"
                                fontSize="24px"
                                fontWeight={700}
                                lineHeight="32px"
                                textAlign="center"
                            >
                                Top Copa
                            </Text>

                            <Text
                                color="white"
                                fontSize="13px"
                                fontWeight={500}
                                lineHeight="24px"
                                textAlign="center"
                            >
                                Crea y personaliza tu equipo, su escudo, estadio e incluso nombra al presidente que te representará y haz que toda la comunidad conozca tu club.
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex
                        gap={{ base: "30px", md: "50px", lg: "100px" }}
                        direction={{ base: "column", md: "row" }}
                    >
                        <Flex
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            gap="10px"
                        >
                            <Image
                                src="/champions.png"
                                alt="champions"
                                w="65px"
                                h="65px"
                            />

                            <Text
                                color="white"
                                fontSize="24px"
                                fontWeight={700}
                                lineHeight="32px"
                                textAlign="center"
                            >
                                Top Champions
                            </Text>

                            <Text
                                color="white"
                                fontSize="13px"
                                fontWeight={500}
                                lineHeight="24px"
                                textAlign="center"
                            >
                                Crea y personaliza tu equipo, su escudo, estadio e incluso nombra al presidente que te representará y haz que toda la comunidad conozca tu club.
                            </Text>
                        </Flex>

                        <Flex
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            gap="10px"
                        >
                            <Image
                                src="/super.png"
                                alt="super"
                                w="65px"
                                h="65px"
                            />

                            <Text
                                color="white"
                                fontSize="24px"
                                fontWeight={700}
                                lineHeight="32px"
                                textAlign="center"
                            >
                                Top Super
                            </Text>

                            <Text
                                color="white"
                                fontSize="13px"
                                fontWeight={500}
                                lineHeight="24px"
                                textAlign="center"
                            >
                                Crea y personaliza tu equipo, su escudo, estadio e incluso nombra al presidente que te representará y haz que toda la comunidad conozca tu club.
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        gap="10px"
                    >
                        <Image
                            src="/zeus.png"
                            alt="zeus"
                            w="65px"
                            h="65px"
                        />

                        <Text
                            color="white"
                            fontSize="24px"
                            fontWeight={700}
                            lineHeight="32px"
                            textAlign="center"
                        >
                            Top Zeus
                        </Text>

                        <Text
                            color="white"
                            fontSize="13px"
                            fontWeight={500}
                            lineHeight="24px"
                            textAlign="center"
                            w={{ base: "100%", md: "60%" }}
                        >
                            Crea y personaliza tu equipo, su escudo, estadio e incluso nombra al presidente que te representará y haz que toda la comunidad conozca tu club.
                        </Text>
                    </Flex>

                    <Button
                        bg="#0094F1"
                        h="fit-content"
                        w="fit-content"
                        px={{ base: "15px", md: "20px" }}
                        py={{ base: "12px", md: "14px" }}
                        fontSize={{ base: "12px", md: "14px" }}
                        fontWeight={700}
                        color="white"
                        rounded="8px"
                        textTransform="uppercase"
                    >
                        Comienza ya
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
