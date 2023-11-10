import useGeneres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGeneres();
  return genres?.results.find((genre) => genre.id === id);
};

export default useGenre;
