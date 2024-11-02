"use client"

import { Button, Checkbox, Flex, Icon, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { z } from "zod";

export default function Form() {
    const toast = useToast();

    const [loading, setLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState<{
        nombre: string;
        apellido: string;
        email: string;
        telefono: string;
        consentimientoDatos: boolean;
    }>({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        consentimientoDatos: false,
    });

    const [errors, setErrors] = useState<string[]>([]);

    const formSchema = z.object({
        nombre: z.string().min(1, "El nombre es obligatorio."),
        apellido: z.string().min(1, "El apellido es obligatorio."),
        email: z.string().email("El email debe ser válido.").min(1, "El email es obligatorio."),
        telefono: z.string().min(9, "El teléfono debe ser válido.").min(1, "El teléfono es obligatorio."),
        consentimientoDatos: z.boolean().refine(val => val === true, "Debes aceptar el uso de tus datos."),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true)
            formSchema.parse(formData);
            setErrors([]);

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sendLead`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "token": process.env.NEXT_PUBLIC_API_TOKEN!
                },
                body: JSON.stringify(formData),
            })


            if (response.ok) {
                toast({
                    title: 'Formulario enviado.',
                    description: "Nos pondremos en contacto.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                });

                setFormData({
                    nombre: "",
                    apellido: "",
                    email: "",
                    telefono: "",
                    consentimientoDatos: false,
                });
            } else {
                console.error(`Error: ${response.status}`);
                setErrors([`Error al enviar el formulario. Por favor, inténtalo de nuevo.`]);
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                setErrors(error.errors.map(err => err.message));
            }
        } finally {
            setLoading(false)
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ width: "100%" }}
        >
            <Flex
                direction="column"
                gap={{ base: "8px", sm: "10px", md: "12px" }}
                maxW={{ base: "100%", sm: "90%", md: "80%", lg: "70%" }}
                mx="auto"
            >
                <Input
                    color="white"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    border="none"
                    borderBottom="1px solid"
                    rounded={0}
                    borderColor="#6D7D7D"
                    py={{ base: "12px", md: "15px" }}
                    px={{ base: "15px", md: "20px" }}
                    fontSize={{ base: "14px", md: "16px" }}
                    _placeholder={{
                        color: "white"
                    }}
                    _focus={{
                        boxShadow: "none",
                        outline: "none",
                        borderColor: "#6D7D7D"
                    }}
                />

                <Input
                    color="white"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Apellido"
                    border="none"
                    borderBottom="1px solid"
                    rounded={0}
                    borderColor="#6D7D7D"
                    py={{ base: "12px", md: "15px" }}
                    px={{ base: "15px", md: "20px" }}
                    fontSize={{ base: "14px", md: "16px" }}
                    _placeholder={{
                        color: "white"
                    }}
                    _focus={{
                        boxShadow: "none",
                        outline: "none",
                        borderColor: "#6D7D7D"
                    }}
                />

                <Input
                    color="white"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    type="email"
                    border="none"
                    borderBottom="1px solid"
                    rounded={0}
                    borderColor="#6D7D7D"
                    py={{ base: "12px", md: "15px" }}
                    px={{ base: "15px", md: "20px" }}
                    fontSize={{ base: "14px", md: "16px" }}
                    _placeholder={{
                        color: "white"
                    }}
                    _focus={{
                        boxShadow: "none",
                        outline: "none",
                        borderColor: "#6D7D7D"
                    }}
                />

                <Input
                    color="white"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    type="number"
                    border="none"
                    borderBottom="1px solid"
                    rounded={0}
                    borderColor="#6D7D7D"
                    py={{ base: "12px", md: "15px" }}
                    px={{ base: "15px", md: "20px" }}
                    fontSize={{ base: "14px", md: "16px" }}
                    _placeholder={{
                        color: "white"
                    }}
                    _focus={{
                        boxShadow: "none",
                        outline: "none",
                        borderColor: "#6D7D7D"
                    }}
                />

                <Checkbox
                    mt={{ base: "30px", sm: "40px", md: "50px" }}
                    name="consentimientoDatos"
                    alignItems="start"
                    isChecked={formData.consentimientoDatos}
                    onChange={handleChange}
                >
                    <Text
                        color="white"
                        fontSize={{ base: "10px", sm: "11px", md: "12px" }}
                        fontWeight={400}
                    >
                        Consiento el uso de mis datos para los fines indicados en la política de privacidad &quot;SUS DATOS SEGUROS&quot;.
                    </Text>
                </Checkbox>

                <Flex
                    direction="column"
                    mt="10px"
                >
                    {errors.length > 0 &&
                        errors?.map((e: string, i: number) => (
                            <Text
                                key={i}
                                color="red"
                                fontSize="12px"
                            >
                                * {e}
                            </Text>
                        ))}
                </Flex>

                <Button
                    mt={{ base: "30px", sm: "35px", md: "40px" }}
                    w="fit-content"
                    h="fit-content"
                    py={{ base: "12px", sm: "13px", md: "14px" }}
                    px={{ base: "15px", sm: "18px", md: "20px" }}
                    bg="#0094F1"
                    color="white"
                    fontSize={{ base: "12px", sm: "13px", md: "14px" }}
                    fontWeight={700}
                    lineHeight="18px"
                    rightIcon={<Icon as={BsArrowRight} boxSize="16px" />}
                    rounded="8px"
                    type="submit"
                    isLoading={loading}
                >
                    Contactar
                </Button>
            </Flex>
        </form>
    )
}
