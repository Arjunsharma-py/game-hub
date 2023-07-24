import genres from "../data/genres";

// import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// ___ Fetching data from the server. ___
// const useGeneres = () => useData<Genre>("/genres");

// ___Fetching data from static data. ___
const useGeneres = () => ({ data: genres, isLoading: false, error: null });

export default useGeneres;
