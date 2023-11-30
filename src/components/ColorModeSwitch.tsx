import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MdNightsStay } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode}></Switch>
      {/* <Text whiteSpace='nowrap'>Dark Mode</Text> */}
      {colorMode === "dark" ? (
        <MdNightsStay onClick={toggleColorMode} />
      ) : (
        <WiDaySunny onClick={toggleColorMode} />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
