import { HStack, Show, Switch } from "@chakra-ui/react";
import { MdNightsStay } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

interface Props{
  colorMode: string;
  toggleColorMode: () => void;
}


const ColorModeSwitch = ({colorMode, toggleColorMode}: Props) => {
  

  return (
    <HStack>
      <Show above="md">
        <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode}></Switch>
      </Show>
      {/* <Text whiteSpace='nowrap'>Dark Mode</Text> */}
      {colorMode === "dark" ? (
        <MdNightsStay size={25} onClick={toggleColorMode} />
      ) : (
        <WiDaySunny size={25} onClick={toggleColorMode} />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
