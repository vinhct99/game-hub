import { HStack, Image, border } from "@chakra-ui/react";

import logo from "../assets/images.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack padding="20px">
      <Image src={logo} boxSize="50px" borderRadius="10px" paddingX="3px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
