export const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";
  const GenreIds = selectedGenres.map((item) => item.id);
  return GenreIds.reduce(
    (accumulator, currentValue) => accumulator + "," + currentValue
  );
};
