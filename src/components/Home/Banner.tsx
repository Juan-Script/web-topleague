"use client"

import React from 'react'
import { motion } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";

const MotionText = motion(Text as any);

export default function Banner() {
    return (
        <Flex
            px={{
                base: "20px",
                xs: "30px",
                sm: "60px",
                md: "100px",
                lg: "135px"
            }}
            py={{
                base: "60px",
                sm: "80px",
                md: "100px"
            }}
            bg="#202222"
            justifyContent="center"
            alignItems="center"
            w="100%"
        >
            <MotionText
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                fontSize={{
                    base: "24px",
                    xs: "28px",
                    sm: "32px",
                    md: "36px",
                    lg: "40px"
                }}
                fontWeight={700}
                color="white"
                lineHeight="50px"
                textAlign={{ base: "center", lg: "left" }}
            >
                Una nueva forma de ver tu juego fantasy
            </MotionText>
        </Flex>
    )
}
