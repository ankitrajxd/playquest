import {
  // Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
// import { IoIosArrowRoundForward } from "react-icons/io";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between">
          <PlatformIconList game={game} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
        {/* <Button
          rightIcon={<IoIosArrowRoundForward />}
          marginTop={4}
          colorScheme="gray"
          size="xs"
        >
          {game.suggestions_count}
        </Button> */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
