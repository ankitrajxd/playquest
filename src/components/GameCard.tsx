import { Button, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { IoIosArrowRoundForward } from "react-icons/io";


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>

        <HStack justifyContent="space-between">
          <PlatformIconList game={game} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Button rightIcon={<IoIosArrowRoundForward />} marginTop={4} colorScheme="gray" size="xs">
          Read More
        </Button>
      </CardBody>
    </Card>
  );
};

export default GameCard;
