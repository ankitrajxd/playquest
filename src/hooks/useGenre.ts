// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
// import { FetchResponse } from "./useData";
import genres from "../data/genres";

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
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres }, // adjusting type that we are getting  from backend
  });
};
export default useGenre;
