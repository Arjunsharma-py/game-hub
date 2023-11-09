import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGeneres from "../hooks/useGenres";
import usePlatfroms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGeneres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const { data: platforms } = usePlatfroms();
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} `;
  return (
    <Heading margin={5} fontSize="5xl" as="h1">
      {heading}Games
    </Heading>
  );
};

export default GameHeading;
