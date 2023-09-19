import { HStack, Image, border } from "@chakra-ui/react";

import logo from "../assets/images.png";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="30px" borderRadius="5px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
