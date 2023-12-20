import { Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import GenreDrawer from "./components/GenreDrawer";
import AiDrawer from "./components/AiDrawer";


// undefined: the absence of a value
// null: the intentional absence of a value

export interface GameQuery {
  genreID?: number;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); // as Gamequery will allow us to pass empty object in this

  // query object pattern -  it contains all the info related querying the game

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      paddingInline={{ lg: 6 }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      width="100%"
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={4}>
          <GenreList
            seletedGenreID={gameQuery.genreID}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreID: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem
        area="main"
        padding={{
          base: 4,
          md: 4,
        }}
      >
        <GameHeading gameQuery={gameQuery} />
        <Text display={{ base: "none", md: "block" }}>
          PC games, or personal computer games, started with the video game
          crash of 1983. PC games became popular after the development of the
          microprocessor and microcomputer.
        </Text>
        <HStack
          flexWrap="wrap"
          spacing={{ lg: 3, sm: 3, base: 2 }}
          marginBottom={5}
          marginTop={4}
        >
          <GenreDrawer>
            <GenreList
              seletedGenreID={gameQuery.genreID}
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genreID: genre.id });
              }}
            />
          </GenreDrawer>

          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
          <AiDrawer/>
        </HStack>
        <GameGrid
          gameQuery={gameQuery}
          // selectedPlatform={gameQuery.platform}
          // selectedGenre={gameQuery.genre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
