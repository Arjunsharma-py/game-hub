import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
// import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

// ___ Fetching data from the server. ___
// const useGeneres = () => useData<Genre>("/genres");

// ___Fetching data from static data. ___
// const useGeneres = () => ({ data: genres, isLoading: false, error: null });

//____Fetching data with react-query. ___
const useGeneres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGeneres;
