"use client"

import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Link as ChakraLink, Flex, Box, Text, Image, Skeleton, Button, Icon } from "@chakra-ui/react"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from "./PaymentForm";
import { useState } from "react";
import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC || "");

export const PaymentDrawer = ({ isOpen, onClose }: Props) => {
    const [clientSecret, setClientSecret] = useState<any>("pi_3PguI1G6y2N8ahRk06FLOndb_secret_UiWEmmFUKeKt7O9hBsMwfbXHk");
    const [id, setId] = useState<string>('');

    // useEffect(() => {
    //     fetch("https://octopus-app-srtxk.ondigitalocean.app/v1/web/stripe/checkout", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "token": "934hjbjha78dy23jhbdas7t32j"
    //         },
    //         body: JSON.stringify({
    //             plan: "standard",
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // setClientSecret(data?.clientSecret);
    //             setId(data?.id);

    //             console.log(data)
    //         })
    // }, []);

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
        clientSecret: "pi_3PguI1G6y2N8ahRk06FLOndb_secret_UiWEmmFUKeKt7O9hBsMwfbXHk",
        appearance,
    };

    const handleCancel = async (e: any) => {
        // e.preventDefault();

        // if (!process.env.NEXT_PUBLIC_URL_APICANCEL) return

        // fetch(process.env.NEXT_PUBLIC_URL_APICANCEL, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         id: id,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then(() => {
        //         toastNotify(toast, StatusEnumTypes.SUCCESS, 'Order canceled successfully')
        //     })
        //     .catch((error) => console.error(error));

        // setPaymentVisible(false);
        // setCurrentOrder(null);
        // router.push('/')
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
                        onClick={onClose}
                        position="absolute"
                        top="20px"
                        left={{ base: "auto", sm: "20px" }}
                        right={{ base: "20px", sm: "auto" }}
                        leftIcon={<Icon as={BiArrowBack} boxSize="20px" />}
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
                                        Plan
                                    </Text>

                                    <Text
                                        color="white"
                                        fontSize="13px"
                                        fontWeight={500}
                                    >
                                        Standard
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
                                        69 €
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
                                        <CheckoutForm />
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
