import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient from "../services/api-client";
import { FetchResponse } from "./useData";
// import { Genre } from "./useGenre";

const apiClient = new ApiClient<Game>("/games");

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
  suggestions_count: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};

export default useGames;
