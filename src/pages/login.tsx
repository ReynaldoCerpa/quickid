import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import Link from "next/link";
import PasswordInput from "../components/PasswordInput";

const login = () => {

    return (
        <section className="flex justify-center pt-[9rem] h-screen font-raleway">
            <Box className="flex justify-center rounded-[9px] pt-[2rem] w-[25rem] drop-shadow-lg h-[30rem] bg-white p-[2rem]">
                <Box className="flex flex-col relative w-[20rem]">
                    {/* <Text className="text-center test-class font-raleway text-[2.5rem]">Quickid</Text> */}
                    <Text className="text-center font-source-sans text-[2rem] mt-[.5rem] mb-[2rem]" fontWeight="semibold">Iniciar sesión</Text>
                    <Input className="Input InputText" placeholder="Usuario" />
                    <PasswordInput/>

                    <Link href="https://youtube.com">
                        <Text color="blue.500" fontWeight="bold" className="mt-1 text-[.9rem]">¿Olvidó su contraseña?</Text>
                    </Link>
                    <Box className="flex justify-between mt-[2rem] absolute bottom-0 w-[100%] items-center">
                        <Link href="/register">
                            <Text color="blue.500" fontWeight="bold" className="cursor-pointer">Registrarse</Text>
                        </Link>
                        <Button
                            bg="#548CFF"
                            color="white"
                            _hover={{ bg: "#353878" }}
                            onClick={()=>{
                                
                            }}
                        >Iniciar sesión</Button>
                    </Box>
                </Box>
            </Box>
        </section>

    );
};

export default login;
