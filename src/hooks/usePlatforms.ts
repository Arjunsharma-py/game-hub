import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

interface Plateform {
  id: number;
  name: string;
  slug: string;
}

// ___ displaying static data. ___
// const usePlatfroms = () => useData<Plateform>("/platforms/lists/parents");

// ___Displaying data with react query. ___
const usePlatfroms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Plateform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatfroms;
