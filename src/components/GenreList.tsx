import {
  Button,
  HStack,
  Heading,
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
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGeneres();
  if (isLoading) return <Spinner />;
  if (error) return;

  return (
    <>
      <Heading paddingY={5} fontSize="3xl">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <Button
              onClick={() => {
                onSelectGenre(genre);
              }}
              fontSize="lg"
              variant={genre.id === selectedGenre?.id ? "solid" : "ghost"}
            >
              <HStack>
                <Image
                  borderRadius={8}
                  boxSize="32px"
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text whiteSpace="normal">{genre.name}</Text>
              </HStack>
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
