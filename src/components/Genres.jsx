import axios from "axios";
import React, { useEffect, useState } from "react";

const Genres = ({
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setCurrentPage,
  type,
}) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://imdb-api.com/API/InTheaters/${process.env.REACT_APP_API_KEY}`
    );
    setGenres(data.genreList);
    console.log(data.genreList);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return <div>Genres</div>;
};

export default Genres;
