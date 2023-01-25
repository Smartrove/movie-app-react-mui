import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import NavDrawer from "./NavDrawer";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  //this is for media queries
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#393736 " }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          <span className="app_logo" onClick={() => window.scroll(0, 0)}>
            MoviesHub
          </span>
        </Typography>
        {isMatch ? (
          <NavDrawer />
        ) : (
          <Tabs
            value={value}
            onChange={handleClick}
            indicatorColor="primary"
            color="#fff"
            fontWeight="bold"
          >
            <Tab
              icon={<WhatshotIcon />}
              label="Trendings"
              iconPosition="start"
              sx={{ color: "#fff", textTransform: "Initial" }}
            />
            <Tab
              icon={<MovieIcon />}
              label="Movies"
              iconPosition="start"
              sx={{ color: "#fff", textTransform: "Initial" }}
            />
            <Tab
              icon={<TvIcon />}
              label="Tv Series"
              iconPosition="start"
              sx={{ color: "#fff", textTransform: "Initial" }}
            />
            <Tab
              icon={<SearchIcon />}
              label="Search"
              iconPosition="start"
              sx={{ color: "#fff", textTransform: "Initial" }}
            />
          </Tabs>
        )}
      </Toolbar>
      {!isMatch && value === 3 && <SearchBar />}
    </AppBar>
  );
};

export default Navbar;
