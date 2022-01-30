import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import Link from "next/link";
import PasswordInput from "../components/PasswordInput";

const register = () => {
  return (
        <section className="flex justify-center pt-[9rem] h-screen font-raleway">
            <Box className="flex justify-center rounded-[9px] pt-[2rem] w-[25rem] drop-shadow-lg h-[30rem] bg-white p-[2rem]">
                <Box className="flex flex-col relative w-[20rem]">
                    {/* <Text className="text-center test-class font-raleway text-[2.5rem]">Quickid</Text> */}
                    <Text className="text-center font-source-sans text-[2rem] mt-[.5rem] mb-[2rem]" fontWeight="semibold">Registrarse</Text>
                    <Input className="Input" placeholder="Usuario" />
                    <PasswordInput/>
                    <PasswordInput/>

                    <Box className="flex justify-between mt-[2rem] absolute bottom-0 w-[100%] items-center">
                        <Link href="/login">
                            <Text color="blue.500" fontWeight="bold" className="cursor-pointer">Iniciar sesión</Text>
                        </Link>
                        <Button 
                        bg="#25274d"
                        color="white"
                        _hover={{bg: "#353878"}}
                        >Continuar</Button>
                    </Box>
                </Box>
            </Box>
        </section>

    );
};

export default register;
