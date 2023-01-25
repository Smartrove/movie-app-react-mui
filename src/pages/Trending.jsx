import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../components/MoviePagination";
import PopularMovies from "../components/PopularMovies";
import "../styles/trending.css";

const Trending = () => {
  const [popular, setPopular] = useState([]);
  const [pagination, setPagination] = useState(1);

  const FetchPopularMovies = async () => {
    const { data } = await axios.get(
      `https://imdb-api.com/API/MostPopularMovies/${process.env.REACT_APP_API_KEY}`
    );
    console.log(data);
    return data;
  };
  useEffect(() => {
    FetchPopularMovies().then((data) => {
      setPopular(data.items);
    });
  }, [pagination]);

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
      <Pagination setPagination={setPagination} />
    </div>
  );
};

export default Trending;
