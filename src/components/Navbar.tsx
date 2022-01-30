import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter()
    return (
        <div className="w-[100%] h-20 bg-[#25274d] fixed flex justify-between px-[2rem] items-center">
           <Text 
           fontWeight="bold" 
           fontSize="2.5rem" 
           className="font-raleway text-white">Quickid</Text>             
           <Button
           bgColor="white"
           onClick={()=>router.push("/")}
           >Inicio</Button>
        </div>
    );
};

export default Navbar;
