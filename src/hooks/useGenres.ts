import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
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
// const useGeneres = () => ({ data: genres, isLoading: false, error: null });

//____Fetching data with react-query. ___
const useGeneres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGeneres;
