import {
  Avatar,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Wrap,
  useColorMode,
} from "@chakra-ui/react";
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
      <ColorModeSwitch
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />

      <Menu>
        <MenuButton>
          <Avatar
            size="sm"
            name="John Doe"
            src="https://bit.ly/ryan-florence"
          />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Account">
            <MenuItem>Login</MenuItem>
            <MenuItem>Signup</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default NavBar;
