"use client"

import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Link as ChakraLink, Flex, Box, Text, Image, Skeleton, Button, Icon } from "@chakra-ui/react"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from "./PaymentForm";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { descripcionPagos, MontoPagos, TipoPagos } from "./Hero";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    paymentType: TipoPagos | null;
    setPaymentType: (paymentType: TipoPagos | null) => void;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC || "");

export const PaymentDrawer = ({ isOpen, onClose, paymentType, setPaymentType }: Props) => {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        if (!paymentType) return;

        console.log(paymentType)
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/stripe/checkout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": process.env.NEXT_PUBLIC_API_TOKEN!
            },
            body: JSON.stringify({
                tipo: paymentType
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data?.clientSecret);
                setId(data?.id);
            })
    }, []);

    const appearance: any = {
        theme: 'stripe',
        labels: 'floating',
        variables: {
            borderRadius: '7px',
            colorBackground: '#FFF',
            colorText: '#252F40',
            colorTextSecondary: '#252F40',
            colorTextPlaceholder: '#252F40',
            colorPrimary: '#67748E',
            fontFamily: 'Inter, sans-serif',
            fontWeightNormal: '500',
        }
    };

    const options: any = {
        clientSecret: clientSecret,
        appearance,
    };

    const handleCancel = async (e: React.MouseEvent) => {
        e.preventDefault();

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/stripe/cancel`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": process.env.NEXT_PUBLIC_API_TOKEN!
            },
            body: JSON.stringify({
                id: id,
            }),
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setClientSecret(null);
                setId(null);
                setPaymentType(null);
                onClose();
            })
    };

    return (
        <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={onClose}
            closeOnEsc={false}
            closeOnOverlayClick={false}
            size="full"
        >
            <DrawerOverlay />
            <DrawerContent
                p="0"
                overflow="auto"
            >
                <DrawerBody
                    p="0"
                    h="100vh"
                    position="relative"
                >
                    <Button
                        cursor="pointer"
                        _active={{ transform: "scale(0.95)" }}
                        w="fit-content"
                        h="fit-content"
                        px="16px"
                        py="7px"
                        fontSize="14px"
                        fontWeight={700}
                        borderRadius="8px"
                        color="white"
                        bg="transparent"
                        border="1px solid white"
                        position="absolute"
                        top="20px"
                        left={{ base: "auto", sm: "20px" }}
                        right={{ base: "20px", sm: "auto" }}
                        leftIcon={<Icon as={BiArrowBack} boxSize="20px" />}
                        onClick={(e: React.MouseEvent) => handleCancel(e)}
                    >
                        Salir
                    </Button>

                    <Flex
                        w="full"
                        minH="100vh"
                        direction={{ base: "column", md: "row" }}
                    >
                        <Flex
                            direction="column"
                            w="full"
                            bg="#1E272C"
                            flex="1"
                            justifyContent="center"
                            alignItems="center"
                            py={{ base: "40px", md: "60px" }}
                        >
                            <Flex
                                direction="column"
                                w={{ base: "90%", sm: "400px" }}
                            >
                                <Image
                                    src={"/LogoTipoAzul.png"}
                                    width={{ base: "180px", sm: "230px" }}
                                    height={{ base: "31px", sm: "40px" }}
                                    alt="logo"
                                />

                                <Text
                                    mt="50px"
                                    color="white"
                                    fontSize="18px"
                                    fontWeight={700}
                                >
                                    Información del pago
                                </Text>

                                <Box
                                    w="100%"
                                    h="1px"
                                    bg="white"
                                    my="20px"
                                />

                                <Flex
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Text
                                        color="white"
                                        fontSize="13px"
                                        fontWeight={500}
                                    >
                                        Detalle
                                    </Text>

                                    <Text
                                        color="white"
                                        fontSize="13px"
                                        fontWeight={500}
                                    >
                                        {descripcionPagos[paymentType!]}
                                    </Text>
                                </Flex>

                                <Flex
                                    alignItems="center"
                                    justifyContent="space-between"
                                    my="20px"
                                >
                                    <Text
                                        color="white"
                                        fontSize="13px"
                                        fontWeight={500}
                                    >
                                        Precio total
                                    </Text>

                                    <Text
                                        color="white"
                                        fontSize="13px"
                                        fontWeight={700}
                                    >
                                        {MontoPagos[paymentType!]} €
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex
                            bg="#202222"
                            flex="1"
                            boxShadow="-4px 4px 20px 0px rgba(167, 167, 167, 0.10)"
                            w="full"
                            justifyContent="center"
                            alignItems="center"
                            py={{ base: "40px", md: "60px" }}
                        >
                            <Flex
                                direction="column"
                                w={{ base: "90%", sm: "400px" }}
                                rounded="10"
                                gap="26px"
                                border="2.128px solid #115C8A"
                                p={{ base: "20px", sm: "26px" }}
                            >
                                {clientSecret ?
                                    <Elements stripe={stripePromise} options={options}>
                                        <CheckoutForm
                                            paymentType={paymentType}
                                            onClose={onClose}
                                        />
                                    </Elements>
                                    :
                                    <Skeleton
                                        w="100%"
                                        h="570px"
                                        rounded="10px"
                                    />
                                }
                            </Flex>
                        </Flex>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
