"use client"

import { Box, Button, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";
import { PaymentDrawer } from "./PaymentDrawer";
import { useState } from "react";
import { motion } from "framer-motion";

export enum TipoPagos {
    SUSCRIPCION = 'suscripcion',
    SUSCRIPCION_CAMISETA = 'suscripcion_camiseta',
    PACK_LLAVEROS = 'pack_llaveros',
}

export const MontoPagos = {
    [TipoPagos.SUSCRIPCION]: 10.99,
    [TipoPagos.SUSCRIPCION_CAMISETA]: 36.99,
    [TipoPagos.PACK_LLAVEROS]: 19.99,
}

export const descripcionPagos = {
    [TipoPagos.SUSCRIPCION]: 'Suscripción',
    [TipoPagos.SUSCRIPCION_CAMISETA]: 'Suscripción + Camiseta',
    [TipoPagos.PACK_LLAVEROS]: 'Pack 5 llaveros',
}

const AnimatedFlex = motion(Flex as any);

export default function HeroPrecio() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [paymentType, setPaymentType] = useState<TipoPagos | null>(null);

    const onSelectPlan = (plan: TipoPagos) => {
        setPaymentType(plan);

        if (isOpen) onClose();
        onOpen();
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <AnimatedFlex
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            px={{ base: "20px", sm: "40px", md: "55px" }}
            py={{ base: "120px", md: "150px" }}
            bg="#202222"
            justifyContent="center"
            alignItems="center"
            w="100%"
            gap="60px"
            direction="column"
        >
            <AnimatedFlex
                variants={cardVariants}
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
            </AnimatedFlex>

            <AnimatedFlex
                variants={containerVariants}
                justifyContent="center"
                alignItems="center"
                direction={{ base: "column", md: "row",lg: "row" }}
            >
                <AnimatedFlex
                    variants={cardVariants}
                    w={{ base: "90%", sm: "473px", lg: "373px" }}
                    h="fit-content"
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
                        Suscripción
                    </Text>

                    <Text
                        fontSize="14px"
                        fontWeight={400}
                        color="white"
                        lineHeight="24px"
                    >
                        Suscripción anual
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
                            {MontoPagos[TipoPagos.SUSCRIPCION]} €
                        </Text>

                        {/* <Flex
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
                        </Flex> */}

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
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.stopPropagation();

                                onSelectPlan(TipoPagos.SUSCRIPCION)
                            }}
                        >
                            Comienza
                        </Button>
                    </Flex>
                </AnimatedFlex>

                <AnimatedFlex
                    variants={cardVariants}
                    w={{ base: "100%", sm: "573px", lg: "373px" }}
                    h="fit-content"
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
                            whiteSpace="nowrap"
                        >
                            Suscripción +
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
                            whiteSpace="nowrap"
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
                        Suscripción anual + Camiseta TopLeague
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
                            {MontoPagos[TipoPagos.SUSCRIPCION_CAMISETA]} €
                        </Text>

                        {/* <Flex
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
                        </Flex> */}

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
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.stopPropagation();

                                onSelectPlan(TipoPagos.SUSCRIPCION_CAMISETA)
                            }}
                        >
                            Comienza
                        </Button>
                    </Flex>
                </AnimatedFlex>

                <AnimatedFlex
                    variants={cardVariants}
                    w={{ base: "90%", sm: "473px", lg: "373px" }}
                    h={"fit-content"}
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
                        Pack Llaveros
                    </Text>

                    <Text
                        fontSize="14px"
                        fontWeight={400}
                        color="white"
                        lineHeight="24px"
                    >
                        5 Llaveros TopLeague
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
                            {MontoPagos[TipoPagos.PACK_LLAVEROS]} €
                        </Text>

                        {/* <Flex
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
                        </Flex> */}

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
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.stopPropagation();

                                onSelectPlan(TipoPagos.PACK_LLAVEROS)
                            }}
                        >
                            Comienza
                        </Button>
                    </Flex>
                </AnimatedFlex>
            </AnimatedFlex>

            {isOpen && paymentType && (
                <PaymentDrawer
                    isOpen={isOpen}
                    onClose={onClose}
                    paymentType={paymentType}
                    setPaymentType={setPaymentType}
                />
            )}
        </AnimatedFlex>
    )
}
