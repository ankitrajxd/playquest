import { Heading, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreID);

  const platformHeading = (
    <Text as="span">{gameQuery.platform?.name || ""}</Text>
  );
  const heading = `${genre?.name || ""} Games`;

  return (
    <Heading
      as="h1"
      textAlign={{ base: "center", md: "initial" }}
      marginBottom={5}
      fontSize={{ base: "36px", md: "5xl", lg: "7xl", xl: "7xl" }}
    >
      {platformHeading} {heading}
    </Heading>
  );
};

export default GameHeading;
