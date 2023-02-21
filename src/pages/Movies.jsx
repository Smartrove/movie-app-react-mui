import React, { useEffect, useState } from "react";
import axios from "axios";
import PopularMovies from "../components/PopularMovies";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Genres from "../components/Genres";

const Movies = ({ item }) => {
  // console.log(item);
  // const { genres } = item;
  const [currentPage, setCurrentPage] = useState(1);
  const [content, setContent] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const moviesPerPage = 20;

  //pagination logic
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  //logic to replace the popular state at the mapping point
  const currentMovies = content.slice(indexOfFirstMovie, indexOfLastMovie);
  //onchange function for pagination
  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://imdb-api.com/API/Top250Movies/${process.env.REACT_APP_API_KEY}`
    );
    setContent(data.items);
    console.log(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div style={{ marginTop: "90px" }}>
      <Genres type="movie" setCurrentPage={setCurrentPage} />
      <div className="popular">
        {currentMovies &&
          currentMovies.map((item) => (
            <PopularMovies
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              year={item.year}
            />
          ))}
      </div>
      {/* //pagination implementation here */}
      <Stack mt="50px" alignItems="center">
        {content.length > 16 && (
          <Pagination
            color="success"
            shape="rounded"
            count={Math.ceil(content.length / moviesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </div>
  );
};

export default Movies;
