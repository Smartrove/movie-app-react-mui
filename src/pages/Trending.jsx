import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import PopularMovies from "../components/PopularMovies";
import "../styles/trending.css";

const Trending = () => {
  const [popular, setPopular] = useState([]);

  //first pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const popularMoviesPerPage = 20;

  //pagination logic
  const indexOfLastMovie = currentPage * popularMoviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - popularMoviesPerPage;

  //logic to replace the popular state at the mapping point
  const currentPopularMovies = popular.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );
  //onchange function for pagination
  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const FetchPopularMovies = async () => {
    const { data } = await axios.get(
      `https://imdb-api.com/API/MostPopularMovies/${process.env.REACT_APP_API_KEY}`
    );

    // console.log(data);
    return data;
  };
  useEffect(() => {
    FetchPopularMovies().then((data) => {
      setPopular(data.items);
    });
  }, []);

  return (
    <div style={{ marginTop: "90px" }}>
      <div className="popular">
        {currentPopularMovies &&
          currentPopularMovies.map((item) => (
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
        {popular.length > 16 && (
          <Pagination
            color="success"
            shape="rounded"
            count={Math.ceil(popular.length / popularMoviesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </div>
  );
};

export default Trending;
