"use client"

import { Box, Button, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";
import { PaymentDrawer } from "./PaymentDrawer";

export default function HeroPrecio() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            px={{ base: "20px", sm: "40px", md: "135px" }}
            py={{ base: "120px", md: "150px" }}
            bg="#202222"
            justifyContent="center"
            alignItems="center"
            w="100%"
            gap="60px"
            direction="column"
        >
            <Flex
                direction="column"
                gap={{ base: "20px", md: "30px" }}
                justifyContent="center"
                alignItems="center"
            >
                <Text
                    fontSize={{ base: "32px", md: "40px" }}
                    fontWeight={700}
                    color="white"
                    lineHeight="50px"
                >
                    Precio
                </Text>

                <Text
                    fontSize="20px"
                    fontWeight={400}
                    color="white"
                    lineHeight="32px"
                    textAlign="center"
                >
                    Planes flexibles y asequibles para todos los aficionados. ¡Elige el que mejor se adapte a ti!
                </Text>
            </Flex>

            <Flex
                justifyContent="center"
                alignItems="center"
                direction={{ base: "column", lg: "row" }}
            >
                <Flex
                    w={{ base: "90%", sm: "473px", lg: "373px" }}
                    h="524px"
                    py="64px"
                    px="48px"
                    borderRadius={{ base: "24px 24px 0px 0px", lg: "24px 0px 0px 24px" }}
                    bg="rgba(255, 255, 255, 0.10)"
                    direction="column"
                >
                    <Text
                        fontSize="24px"
                        fontWeight={600}
                        color="white"
                        lineHeight="32px"
                    >
                        Basic
                    </Text>

                    <Text
                        fontSize="14px"
                        fontWeight={400}
                        color="white"
                        lineHeight="24px"
                    >
                        Para 3
                    </Text>

                    <Box
                        w="100%"
                        h="1px"
                        bg="white"
                        my="20px"
                    />

                    <Flex
                        direction="column"
                        gap="40px"
                    >
                        <Text
                            fontSize="40px"
                            fontWeight={700}
                            color="white"
                            lineHeight="48px"
                            letterSpacing="-0.4px"
                        >
                            39 €
                        </Text>

                        <Flex
                            direction="column"
                            gap="16px"
                        >
                            <Flex>
                                <Icon
                                    as={BsCheck}
                                    color="#0094F1"
                                    boxSize="24px"
                                />

                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    color="white"
                                    lineHeight="24px"
                                >
                                    Acceso a la app
                                </Text>
                            </Flex>

                            <Flex>
                                <Icon
                                    as={BsCheck}
                                    color="#0094F1"
                                    boxSize="24px"
                                />

                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    color="white"
                                    lineHeight="24px"
                                >
                                    Acceso a la app
                                </Text>
                            </Flex>

                            <Flex>
                                <Icon
                                    as={BsCheck}
                                    color="#0094F1"
                                    boxSize="24px"
                                />

                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    color="white"
                                    lineHeight="24px"
                                >
                                    Acceso a la app
                                </Text>
                            </Flex>
                        </Flex>

                        <Button
                            bg="#0094F1"
                            w="fit-content"
                            h="fit-content"
                            rounded="8px"
                            px="20px"
                            py="14px"
                            color="white"
                            fontSize="14px"
                            fontWeight={700}
                            lineHeight="18px"
                            onClick={onOpen}
                        >
                            Comienza
                        </Button>
                    </Flex>
                </Flex>

                <Flex
                    w={{ base: "100%", sm: "573px", lg: "373px" }}
                    h="588px"
                    py="96px"
                    px="48px"
                    borderRadius="24px"
                    border="1px solid #FFF"
                    bg="linear-gradient(113deg, #0567BD -16.99%, #0094F1 66.23%)"
                    boxShadow="0px 60px 80px -44px rgba(15, 35, 85, 0.12)"
                    direction="column"
                    mt={{ base: "0", lg: "-32px" }}
                >
                    <Flex
                        gap="16px"
                        alignItems="center"
                    >
                        <Text
                            fontSize="24px"
                            fontWeight={600}
                            color="white"
                            lineHeight="32px"
                        >
                            Premium
                        </Text>

                        <Text
                            fontSize="12px"
                            fontWeight={700}
                            color="white"
                            lineHeight="12px"
                            textTransform="uppercase"
                            px="8px"
                            py="6px"
                            bg="#202222"
                            rounded="4px"
                        >
                            más popular
                        </Text>
                    </Flex>

                    <Text
                        fontSize="14px"
                        fontWeight={400}
                        color="white"
                        lineHeight="24px"
                    >
                        Para muchos
                    </Text>

                    <Box
                        w="100%"
                        h="1px"
                        bg="white"
                        my="20px"
                    />

                    <Flex
                        direction="column"
                        gap="40px"
                    >
                        <Text
                            fontSize="40px"
                            fontWeight={700}
                            color="white"
                            lineHeight="48px"
                            letterSpacing="-0.4px"
                        >
                            69 €
                        </Text>

                        <Flex
                            direction="column"
                            gap="16px"
                        >
                            <Flex>
                                <Icon
                                    as={BsCheck}
                                    color="white"
                                    boxSize="24px"
                                />

                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    color="white"
                                    lineHeight="24px"
                                >
                                    Acceso a la app
                                </Text>
                            </Flex>

                            <Flex>
                                <Icon
                                    as={BsCheck}
                                    color="white"
                                    boxSize="24px"
                                />

                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    color="white"
                                    lineHeight="24px"
                                >
                                    Acceso a la app
                                </Text>
                            </Flex>

                            <Flex>
                                <Icon
                                    as={BsCheck}
                                    color="white"
                                    boxSize="24px"
                                />

                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    color="white"
                                    lineHeight="24px"
                                >
                                    Acceso a la app
                                </Text>
                            </Flex>
                        </Flex>

                        <Button
                            bg="transparent"
                            border="1px solid white"
                            w="fit-content"
                            h="fit-content"
                            rounded="8px"
                            px="20px"
                            py="14px"
                            color="white"
                            fontSize="14px"
                            fontWeight={700}
                            lineHeight="18px"
                            onClick={onOpen}
                        >
                            Comienza
                        </Button>
                    </Flex>
                </Flex>

                <Flex
                    w={{ base: "90%", sm: "473px", lg: "373px" }}
                    h={"524px"}
                    py="64px"
                    px="48px"
                    borderRadius={{ base: "0px 0px 24px 24px", lg: "0px 24px 24px 0px" }}
                    bg="rgba(255, 255, 255, 0.10)"
                    direction="column"
                >
                    <Text
                        fontSize="24px"
                        fontWeight={600}
                        color="white"
                        lineHeight="32px"
                    >
                        Standard
                    </Text>

                    <Text
                        fontSize="14px"
                        fontWeight={400}
                        color="white"
                        lineHeight="24px"
                    >
                        Para 2
                    </Text>

                    <Box
                        w="100%"
                        h="1px"
                        bg="white"
                        my="20px"
                    />

                    <Flex
                        direction="column"
                        gap="40px"
                    >
                        <Text
                            fontSize="40px"
                            fontWeight={700}
                            color="white"
                            lineHeight="48px"
                            letterSpacing="-0.4px"
                        >
                            19 €
                        </Text>

                        <Flex
                            direction="column"
                            gap="16px"
                        >
                            <Flex>
                                <Icon
                                    as={BsCheck}
                                    color="#0094F1"
                                    boxSize="24px"
                                />

                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    color="white"
                                    lineHeight="24px"
                                >
                                    Acceso a la app
                                </Text>
                            </Flex>

                            <Flex>
                                <Icon
                                    as={BsCheck}
                                    color="#0094F1"
                                    boxSize="24px"
                                />

                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    color="white"
                                    lineHeight="24px"
                                >
                                    Acceso a la app
                                </Text>
                            </Flex>

                            <Flex>
                                <Icon
                                    as={BsCheck}
                                    color="#0094F1"
                                    boxSize="24px"
                                />

                                <Text
                                    fontSize="14px"
                                    fontWeight={400}
                                    color="white"
                                    lineHeight="24px"
                                >
                                    Acceso a la app
                                </Text>
                            </Flex>
                        </Flex>

                        <Button
                            bg="#0094F1"
                            w="fit-content"
                            h="fit-content"
                            rounded="8px"
                            px="20px"
                            py="14px"
                            color="white"
                            fontSize="14px"
                            fontWeight={700}
                            lineHeight="18px"
                            onClick={onOpen}
                        >
                            Comienza
                        </Button>
                    </Flex>
                </Flex>
            </Flex>

            <PaymentDrawer
                isOpen={isOpen}
                onClose={onClose}
            />
        </Flex>
    )
}
