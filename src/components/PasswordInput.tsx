import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useState } from "react";

const PasswordInput = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <InputGroup size="md" className="Input">
            <Input className="font-bold" placeholder="Contraseña" type={show ? "text" : "password"} />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' className="mr-1" onClick={handleClick}
                    bg="#25274d"
                    color="white"
                    _hover={{ bg: "#353878" }}
                >
                    {show ? 'Ocultar' : 'Mostrar'}
                </Button>
            </InputRightElement>
        </InputGroup>
    );
};

export default PasswordInput;
