import { Avatar, HStack, Image, Wrap, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {


  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack padding="10px" paddingTop={{ lg: "24px", xl: "24px" }}>
      <Image src={logo} boxSize="60px" />

      <Wrap marginInline={{ lg: 6 }} width="100%">
        <SearchInput colorMode={colorMode} onSearch={onSearch} />
      </Wrap>
      <ColorModeSwitch colorMode={colorMode} toggleColorMode={toggleColorMode}/>
      <Avatar
        marginLeft={{ lg: 4, xl: 4 }}
        size='sm'
        name="Kola Tioluwani"
        src="https://bit.ly/ryan-florence"
      />
    </HStack>
  );
};

export default NavBar;
