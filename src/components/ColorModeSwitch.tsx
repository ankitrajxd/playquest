import { HStack, Show, Switch } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdNightsStay } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

interface Props {
  colorMode: string;
  toggleColorMode: () => void;
}

const ColorModeSwitch = ({ colorMode, toggleColorMode }: Props) => {
  // for animating
  const iconVariants = {
    open: { rotate: 360 },
    closed: { rotate: 0 },
  };

  // for smooth dark mode switching
  const handleClick = () => {
    toggleColorMode();
    const styleEl = document.createElement('style');
    const cssText = document.createTextNode(
      'html * { transition: color, background-color 0.3s ease-out!important }',
    );
    styleEl.appendChild(cssText);
    document.head.appendChild(styleEl);
    setTimeout(() => {
      document.head.removeChild(styleEl);
    }, 300);
  };

  return (
    <HStack>
      <Show above="md">
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={handleClick}
        ></Switch>
      </Show>
      {/* <Text whiteSpace='nowrap'>Dark Mode</Text> */}
      {colorMode === "dark" ? (
        <motion.div
          variants={iconVariants}
          initial="closed"
          animate={colorMode === "dark" ? "open" : "closed"}
          onClick={handleClick}
        >
          <MdNightsStay size={25} />
        </motion.div>
      ) : (
        <motion.div
          variants={iconVariants}
          initial="closed"
          animate={colorMode === "dark" ? "open" : "closed"}
          onClick={handleClick}
        >
          <WiDaySunny size={25} />
        </motion.div>
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
