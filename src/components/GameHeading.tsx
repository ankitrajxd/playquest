import { Heading, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platformHeading = <Text  as='span' color="#0BC5EA">{gameQuery.platform?.name || ""}</Text>;
  const heading = `${gameQuery.genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {platformHeading} {heading}
    </Heading>
  );
};

export default GameHeading;
