import { Game } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  game: Game;
}

const PlatformIconList = ({ game }: Props) => {
  // mapping of icon name using object mappping trick
  const iconmap: { [key: string]: IconType } = {
    pc: FaWindows, // slug : icons
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <>
      <HStack marginY={1}>
        {game.parent_platforms.map(({ platform }) => (
          <Icon
            key={platform.id}
            as={iconmap[platform.slug]}
            color="gray.500"
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
