import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platform/lists/parents");

export interface Platform {
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
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatfroms;
