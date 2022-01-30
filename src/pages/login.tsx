import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import Link from "next/link";
//import styles from "../styles/Login.module.css"
const login = () => {
    return (
        <div>
            <Text className="text-center test-class font-raleway">Quickid</Text>
            <Text className="text-center" fontWeight="semibold">Iniciar sesión</Text>
            <Input className="" placeholder="Usuario" />
            <Input className="" placeholder="Contraseña" type="password" />
            <Link href="https://youtube.com">
                <Text color="blue.500" fontWeight="bold" className="">¿Olvidó su contraseña?</Text>
            </Link>

            <div className="">
            <Link href="https://youtube.com">
                <Text color="blue.500" fontWeight="bold" className="">Registrarse</Text>
            </Link>
            <Button>Iniciar sesión</Button>
            </div>
            
        </div>
    );
};

export default login;
