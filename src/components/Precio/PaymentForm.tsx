"use client"

import { Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { z } from "zod";
import { TipoPagos } from "./Hero";

interface Props {
    paymentType: TipoPagos | null;
    onClose: () => void;
}

export const CheckoutForm = ({ paymentType, onClose }: Props) => {
    const toast = useToast();
    const stripe: any = useStripe();
    const elements = useElements();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<{
        username: string;
        email: string;
    }>({
        username: "",
        email: "",
    });

    const [errors, setErrors] = useState<string[]>([]);

    const formSchema = z.object({
        username: z.string().min(1, "El nombre de usuario es obligatorio."),
        email: z.string().email("El email debe ser válido.").min(1, "El email es obligatorio."),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            formSchema.parse(formData);
            setErrors([]);

            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/precios`,
                },
                redirect: "if_required",
            });

            if (error) {
                setErrors([error.message]);
            } else if (paymentIntent && paymentIntent.status === "succeeded") {
                toast({
                    title: 'Pago realizado con éxito.',
                    description: "Recibirás un correo con la confirmación del pago.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                })

                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/confirmPayment`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "token": process.env.NEXT_PUBLIC_API_TOKEN!
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        username: formData.username,
                        type: paymentType
                    }),
                })

                onClose();
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                setErrors(error.errors.map(err => err.message));
            }
        } finally {
            setIsLoading(false);
        }
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
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
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
                    value={formData.username}
                    name="username"
                    onChange={handleChange}
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

                <Flex
                    mt="10px"
                    direction="column"
                    gap="3px"
                >
                    {errors.length > 0 && (
                        errors.map((error, index) => (
                            <Text
                                key={index}
                                fontSize="12px"
                                color="red"
                                fontWeight={700}
                            >
                                *{error}
                            </Text>
                        ))
                    )}
                </Flex>

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
                    disabled={isLoading || (formData.email === "" || !formData.email) || (formData.username === "" || !formData.username)}
                    onClick={handleSubmit}
                    isLoading={isLoading}
                >
                    Pagar ahora
                </Button>
            </form>
        </Flex>
    );
};
