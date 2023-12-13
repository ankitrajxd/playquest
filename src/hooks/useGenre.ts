// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
// import { FetchResponse } from "./useData";
import genres from "../data/genres";
import ms from 'ms';

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

// const useGenre = () => useData<Genre>("/genres");
const useGenre = () => {
  return useQuery({
    queryKey: ["Genres"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hours
    initialData: genres,
  });
};
export default useGenre;
