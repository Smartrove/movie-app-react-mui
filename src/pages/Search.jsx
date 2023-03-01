import {
  Button,
  createTheme,
  CssBaseline,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <div style={{ marginTop: "130px" }}>
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
    </div>
  );
};

export default Search;
