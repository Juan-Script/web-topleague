"use client"

import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Creamos componentes con motion
const MotionFlex = motion(Flex as any);
const MotionImage = motion(Image as any);
const MotionText = motion(Text as any);
const MotionButton = motion(Button as any);

export default function HeroCompeticiones() {
    // Definimos las variantes de animación
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <MotionFlex
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            px={{ base: "20px", sm: "40px", md: "80px", lg: "135px" }}
            pt={{ base: "100px", md: "200px" }}
            pb={{ base: "50px", md: "100px" }}
            bg="#212E33"
            justifyContent="center"
            alignItems="center"
            w="100%"
            gap={{ base: "40px", md: "80px" }}
            direction="column"
        >
            <MotionFlex
                variants={itemVariants}
                justifyContent="center"
                alignItems="center"
                direction="column"
                gap="15px"
                px={{ base: "15px", md: "0" }}
            >
                <MotionText variants={itemVariants} fontSize={{ base: "28px", sm: "32px", md: "40px" }} fontWeight={700} color="white" lineHeight={{ base: "36px", md: "50px" }} textAlign="center">
                    Descubre nuestras competiciones
                </MotionText>

                <MotionText variants={itemVariants} fontSize={{ base: "16px", md: "20px" }} fontWeight={400} color="white" lineHeight={{ base: "24px", md: "32px" }} textAlign="center">
                    Una app única que llevará tu experiencia de juego más allá
                </MotionText>
            </MotionFlex>

            <MotionFlex variants={itemVariants} direction="column" justifyContent="center" alignItems="center" gap={{ base: "40px", md: "100px" }}>
                <MotionFlex variants={itemVariants} gap={{ base: "30px", md: "50px", lg: "100px" }} direction={{ base: "column", md: "row" }}>
                    <MotionFlex variants={itemVariants} direction="column" justifyContent="center" alignItems="center" gap="10px">
                        <MotionImage
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            src="/liga.png"
                            alt="liga"
                            w="65px"
                            h="65px"
                        />

                        <MotionText variants={itemVariants} color="white" fontSize="24px" fontWeight={700} lineHeight="32px" textAlign="center">
                            Top Liga
                        </MotionText>

                        <MotionText variants={itemVariants} color="white" fontSize="13px" fontWeight={500} lineHeight="24px" textAlign="center">
                            Crea y personaliza tu equipo, su escudo, estadio e incluso nombra al presidente que te representará y haz que toda la comunidad conozca tu club.
                        </MotionText>
                    </MotionFlex>

                    <MotionFlex variants={itemVariants} direction="column" justifyContent="center" alignItems="center" gap="10px">
                        <MotionImage
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            src="/copa.png"
                            alt="copa"
                            w="65px"
                            h="65px"
                        />

                        <MotionText variants={itemVariants} color="white" fontSize="24px" fontWeight={700} lineHeight="32px" textAlign="center">
                            Top Copa
                        </MotionText>

                        <MotionText variants={itemVariants} color="white" fontSize="13px" fontWeight={500} lineHeight="24px" textAlign="center">
                            Crea y personaliza tu equipo, su escudo, estadio e incluso nombra al presidente que te representará y haz que toda la comunidad conozca tu club.
                        </MotionText>
                    </MotionFlex>
                </MotionFlex>

                <MotionFlex variants={itemVariants} gap={{ base: "30px", md: "50px", lg: "100px" }} direction={{ base: "column", md: "row" }}>
                    <MotionFlex variants={itemVariants} direction="column" justifyContent="center" alignItems="center" gap="10px">
                        <MotionImage
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            src="/champions.png"
                            alt="champions"
                            w="65px"
                            h="65px"
                        />

                        <MotionText variants={itemVariants} color="white" fontSize="24px" fontWeight={700} lineHeight="32px" textAlign="center">
                            Top Champions
                        </MotionText>

                        <MotionText variants={itemVariants} color="white" fontSize="13px" fontWeight={500} lineHeight="24px" textAlign="center">
                            Crea y personaliza tu equipo, su escudo, estadio e incluso nombra al presidente que te representará y haz que toda la comunidad conozca tu club.
                        </MotionText>
                    </MotionFlex>

                    <MotionFlex variants={itemVariants} direction="column" justifyContent="center" alignItems="center" gap="10px">
                        <MotionImage
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            src="/super.png"
                            alt="super"
                            w="65px"
                            h="65px"
                        />

                        <MotionText variants={itemVariants} color="white" fontSize="24px" fontWeight={700} lineHeight="32px" textAlign="center">
                            Top Super
                        </MotionText>

                        <MotionText variants={itemVariants} color="white" fontSize="13px" fontWeight={500} lineHeight="24px" textAlign="center">
                            Crea y personaliza tu equipo, su escudo, estadio e incluso nombra al presidente que te representará y haz que toda la comunidad conozca tu club.
                        </MotionText>
                    </MotionFlex>
                </MotionFlex>

                <MotionFlex variants={itemVariants} direction="column" justifyContent="center" alignItems="center" gap="10px">
                    <MotionImage
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        src="/zeus.png"
                        alt="zeus"
                        w="65px"
                        h="65px"
                    />

                    <MotionText variants={itemVariants} color="white" fontSize="24px" fontWeight={700} lineHeight="32px" textAlign="center">
                        Top Zeus
                    </MotionText>

                    <MotionText variants={itemVariants} color="white" fontSize="13px" fontWeight={500} lineHeight="24px" textAlign="center" w={{ base: "100%", md: "60%" }}>
                        Crea y personaliza tu equipo, su escudo, estadio e incluso nombra al presidente que te representará y haz que toda la comunidad conozca tu club.
                    </MotionText>
                </MotionFlex>

                <MotionButton
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                </MotionButton>
            </MotionFlex>
        </MotionFlex>
    );
}
