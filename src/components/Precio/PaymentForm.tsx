"use client"

import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

export const CheckoutForm = () => {
    const stripe: any = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setIsLoading(true);


        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "",
            },
            redirect: "if_required",
        });

        if (error) {
            setMessage(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            setIsLoading(false);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions: any = {
        layout: "tabs"
    }

    return (
        <Flex
            direction="column"
            w="full"
        >
            <form>
                <Input
                    placeholder="Email TopLeague"
                    value={""}
                    w="100%"
                    h="48px"
                    bg="white"
                    border="1px solid #E6E6E6"
                    borderRadius="4px"
                    fontSize="16px"
                    color="#1A1A1A"
                    _hover={{ borderColor: '#0495D3' }}
                    _focus={{
                        borderColor: '#0495D3',
                        boxShadow: '0 0 0 1px #0495D3'
                    }}
                    _placeholder={{
                        color: '#1A1A1A'
                    }}
                />

                <Input
                    placeholder="Username TopLeague"
                    value={""}
                    my="10px"
                    w="100%"
                    h="48px"
                    bg="white"
                    border="1px solid #E6E6E6"
                    borderRadius="4px"
                    fontSize="16px"
                    color="#1A1A1A"
                    _hover={{ borderColor: '#0495D3' }}
                    _focus={{
                        borderColor: '#0495D3',
                        boxShadow: '0 0 0 1px #0495D3'
                    }}
                    _placeholder={{
                        color: '#1A1A1A'
                    }}
                />

                <PaymentElement
                    options={paymentElementOptions}
                />

                {message && (
                    <Text
                        mt="10px"
                        fontSize="12px"
                        color="red"
                        fontWeight={700}
                    >
                        *{message}
                    </Text>
                )}

                <Button
                    mt="25px"
                    w="100%"
                    h="fit-content"
                    py={{ base: "12px", sm: "16px" }}
                    px={{ base: "20px", sm: "40px" }}
                    color="white"
                    fontSize={{ base: "16px", sm: "20px" }}
                    fontWeight={700}
                    borderRadius="8px"
                    bg="linear-gradient(91deg, #00499E 13.97%, #0495D3 85.67%)"
                    type="submit"
                    disabled={isLoading}
                    onClick={handleSubmit}
                >
                    Pagar ahora
                </Button>
            </form>
        </Flex>
    );
};
