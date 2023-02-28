import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { genreLists } from "../utils/genres";
import { useGenres } from "../hooks/useGenre";

const Genres = ({ setCurrentPage, type }) => {
  const [genres, setGenres] = useState(null);

  const [selectedGenres, setSelectedGenres] = useState([]);

  const genreURL = useGenres(selectedGenres);

  //function to add from the genres
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((item) => item.id !== genre.id));
  };
  //function to remove from the genres
  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((item) => item.id !== genre.id));
    setGenres([...genres, genre]);
  };

  const fetchGenres = async () => {
    // console.log(genres);
    const response = await axios.get(
      `https://imdb-api.com/API/InTheaters/${process.env.REACT_APP_API_KEY}${genreURL}`
    );

    setGenres(response.data.items);
    // console.log(response.data.items);
    return response;
  };

  useEffect(() => {
    fetchGenres();
    // eslint-disable-next-line
  }, [genreURL]);
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.genres}
            style={{ margin: 2 }}
            clickable
            size="small"
            color="primary"
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.genres}
            style={{ margin: 2 }}
            clickable
            size="small"
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
