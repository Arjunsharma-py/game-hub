import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

// __ Displaying using react query. __
const useGames = (gameQuery: GameQuery) =>
  // _____ Normal React Query _____
  // useQuery<FetchResponse<Game>, Error>({
  //   queryKey: ["games", gameQuery],
  //   queryFn: () =>
  //     apiClient.getAll({
  //       params: {
  //         genres: gameQuery.genre?.id,
  //         parent_platforms: gameQuery.platform?.id,
  //         ordering: gameQuery.sortOrder,
  //         search: gameQuery.searchText,
  //       },
  //     }),
  //   staleTime: 60 * 1000,
  // });

  // _____ InfiniteQuery ______
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });

export default useGames;
