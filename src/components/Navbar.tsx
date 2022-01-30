import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";

const Navbar = () => {
    return (
        <div className="w-[100%] h-20 bg-[#25274d] fixed flex justify-between px-[2rem] items-center">
           <Text 
           fontWeight="bold" 
           fontSize="2.5rem" 
           className="font-raleway text-white">Quickid</Text>             
           <Button
           bgColor="white"
           >Inicio</Button>
        </div>
    );
};

export default Navbar;
