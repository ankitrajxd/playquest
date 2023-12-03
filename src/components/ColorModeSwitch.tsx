import { HStack, Show, Switch, useColorMode } from "@chakra-ui/react";
import { MdNightsStay } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

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
