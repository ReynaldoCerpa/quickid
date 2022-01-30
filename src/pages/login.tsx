import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import Link from "next/link";
//import styles from "../styles/Login.module.css"
const login = () => {
    return (
        <section className="flex justify-center pt-[6rem] h-screen bg-[#2e9cca]">
            <Box className="flex justify-center rounded-[9px] pt-[2rem] w-[25rem] drop-shadow-xl h-[30rem] bg-white p-[2rem]">
                <Box className="flex flex-col relative w-[20rem]">
                    <Text className="text-center test-class font-raleway text-[2.5rem]">Quickid</Text>
                    <Text className="text-center font-source-sans text-[1.5rem] mt-[.5rem]" fontWeight="semibold">Iniciar sesión</Text>
                    <Input className="Button" placeholder="Usuario" />
                    <Input className="Button" placeholder="Contraseña" type="password" />
                    <Link href="https://youtube.com">
                        <Text color="blue.500" fontWeight="bold" className="mt-1 text-[.9rem]">¿Olvidó su contraseña?</Text>
                    </Link>
                    <Box className="flex justify-between mt-[2rem] absolute bottom-0 w-[100%] items-center">
                        <Link href="https://youtube.com">
                            <Text color="blue.500" fontWeight="bold" className="">Registrarse</Text>
                        </Link>
                        <Button>Iniciar sesión</Button>
                    </Box>
                </Box>
            </Box>
        </section>

    );
};

export default login;
