import { Flex, Text } from "@chakra-ui/react";
import Form from "../shared/Form";

export default function HeroContacto() {
    return (
        <Flex
            px={{base: "20px", sm: "40px", md: "80px", lg: "190px"}}
            pt={{base: "100px", md: "160px", lg: "220px"}}
            pb={{base: "60px", md: "90px", lg: "120px"}}
            bg="#202222"
            gap={{base: "60px", md: "30px"}}
            justifyContent="center"
            alignItems="start"
            direction={{base: "column", md: "row"}}
        >
            <Flex
                direction="column"
                gap={{base: "20px", md: "30px"}}
                flex="1"
            >
                <Text
                    fontSize={{base: "28px", sm: "32px", md: "36px", lg: "40px"}}
                    fontWeight={400}
                    color="white"
                >
                    Datos de contacto
                </Text>

                <Flex
                    direction="column"
                >
                    <Text
                        fontSize={{base: "16px", sm: "18px", md: "21px"}}
                        fontWeight={400}
                        color="white"
                    >
                        +34 91 123 45 67
                    </Text>

                    <Text
                        fontSize={{base: "16px", sm: "18px", md: "21px"}}
                        fontWeight={400}
                        color="white"
                    >
                        info@fantasy.com
                    </Text>
                </Flex>
            </Flex>

            <Flex
                direction="column"
                gap={{base: "20px", md: "30px"}}
                flex="1"
            >
                <Text
                    fontSize={{base: "28px", sm: "32px", md: "36px", lg: "40px"}}
                    fontWeight={400}
                    color="white"
                >
                    ¿Que necesitas?
                </Text>

                <Form />
            </Flex>
        </Flex>
    )
}
