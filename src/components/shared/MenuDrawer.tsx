import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack, Button, Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link"

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const MenuDrawer = ({ isOpen, onClose }: Props) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent bg="#202222">
                <DrawerCloseButton color="white" />
                <DrawerHeader color="white">MENÚ</DrawerHeader>
                <DrawerBody>
                    <VStack
                        spacing={6}
                        align="stretch"
                    >
                        <ChakraLink
                            as={Link}
                            href="/competiciones"
                            color="white"
                            fontSize="18px"
                            fontWeight="400"
                            onClick={onClose}
                        >
                            Competiciones
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            href="/precios"
                            color="white"
                            fontSize="18px"
                            fontWeight="400"
                            onClick={onClose}
                        >
                            Precios
                        </ChakraLink>
                        <ChakraLink
                            as={Link}
                            href="/contacto"
                            color="white"
                            fontSize="18px"
                            fontWeight="400"
                            onClick={onClose}
                        >
                            Contacto
                        </ChakraLink>
                        <Button
                            bg="#0094F1"
                            color="white"
                            rounded="8px"
                            px="14px"
                            py="10px"
                            fontSize="14px"
                            fontWeight="400"
                            textTransform="uppercase"
                            onClick={onClose}
                        >
                            Comienza
                        </Button>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

