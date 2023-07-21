import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGeneres();
  if (isLoading) return <Spinner />;
  if (error) return;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <Button
            onClick={() => {
              onSelectGenre(genre);
            }}
            fontSize="lg"
            variant="ghost"
          >
            <HStack>
              <Image
                borderRadius={8}
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
