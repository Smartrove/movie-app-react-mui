import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import PopularMovies from "../components/PopularMovies";
import "../styles/trending.css";

const Trending = () => {
  const [popular, setPopular] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const popularMoviesPerPage = 16;
  const indexOfLastMovie = currentPage * popularMoviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - popularMoviesPerPage;
  const currentPopularMovies = popular.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

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
      //pagination implementation here
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
