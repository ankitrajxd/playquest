import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

const useGenre = () => useData<Genre>("/genres");
export default useGenre;
