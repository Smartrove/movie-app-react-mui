import {
  Button,
  createTheme,
  CssBaseline,
  Pagination,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import PopularMovies from "../components/PopularMovies";
import { Stack } from "@mui/system";

const Search = () => {
  const [type, setType] = useState(0);
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  // console.log(content);
  const [currentPage, setCurrentPage] = useState(1);
  const contentMoviesPerPage = 20;

  //pagination logic
  const indexOfLastMovie = currentPage * contentMoviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - contentMoviesPerPage;

  //logic to replace the popular state at the mapping point
  const currentMovies = content.slice(indexOfFirstMovie, indexOfLastMovie);
  //onchange function for pagination
  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  //media queries
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const handleClick = (event, value) => {
    setValue(value);
  };

  const fetchSearch = async () => {
    const response = await axios.get(
      `https://imdb-api.com/API/Search/${process.env.REACT_APP_API_KEY}/`
    );
    console.log(response);
    setContent(response.data.items);
  };

  useEffect(() => {
    fetchSearch();
  }, [type, page]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <div style={{ marginTop: "65px" }}>
      {/* <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div style={{ display: "flex", margin: "15px 0" }}>
          <TextField
            style={{ flex: 1, marginTop: "50px" }}
            className="searchBox"
            label="search"
            variant="filled"
            // onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained" style={{ marginLeft: 10 }}>
            <SearchIcon />
          </Button>
        </div>
      </ThemeProvider> */}
      <SearchBar onChange={(e) => setSearchText(e.target.value)} />
      {/* {!isMatch && value === 3 && (
        <SearchBar onChange={(e) => setSearchText(e.target.value)} />
      )} */}

      <Tabs
        value={type}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, newValue) => {
          setType(newValue);
          setPage(1);
        }}
        style={{ paddingBottom: 5 }}
      >
        <Tab style={{ width: "50%" }} label="Search Movies" />
        <Tab style={{ width: "50%" }} label="Search TV Series" />
      </Tabs>
      <div className="popular">
        {content &&
          content.map((item) => (
            <PopularMovies
              media_type={type ? "tv" : "movie"}
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              year={item.year}
            />
          ))}

        {searchText &&
          !content &&
          (type ? <h2>No series found</h2> : <h2>No movies found</h2>)}
      </div>
      {/* //pagination implementation here */}
      <Stack mt="50px" alignItems="center">
        {content.length > 16 && (
          <Pagination
            color="success"
            shape="rounded"
            count={Math.ceil(content.length / contentMoviesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </div>
  );
};

export default Search;
