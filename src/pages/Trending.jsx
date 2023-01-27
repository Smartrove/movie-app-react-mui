import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../components/MoviePagination";
import PopularMovies from "../components/PopularMovies";
import "../styles/trending.css";

const Trending = () => {
  const [popular, setPopular] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  // console.log(pageSize);

  const FetchPopularMovies = async () => {
    const { data } = await axios.get(
      `https://imdb-api.com/API/MostPopularMovies/${process.env.REACT_APP_API_KEY}`
    );
    // const { data } = await axios.get(
    //   `https://imdb-api.com/API/Top250TVs/${process.env.REACT_APP_API_KEY}`
    // );
    console.log(data);
    return data;
  };
  useEffect(() => {
    FetchPopularMovies().then((data) => {
      setPopular(data.items);
    });
  }, [pageNumber, pageSize]);

  const handleChange = () => {
    setPageNumber(pageNumber + 10);
    setPageSize(pageSize + 10);
  };

  return (
    <div style={{ marginTop: "90px" }}>
      <div className="popular">
        {popular &&
          popular.map((item) => (
            <PopularMovies
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              year={item.year}
            />
          ))}
      </div>
      <Pagination handleChange={handleChange} setPagination={setPagination} />
    </div>
  );
};

export default Trending;
