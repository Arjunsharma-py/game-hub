import useGeneres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGeneres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
