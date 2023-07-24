import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } `;
  return (
    <Heading margin={5} fontSize="5xl" as="h1">
      {heading}Games
    </Heading>
  );
};

export default GameHeading;
