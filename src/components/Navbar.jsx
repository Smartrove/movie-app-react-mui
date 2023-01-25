import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import "./header.css";
import NavDrawer from "./NavDrawer";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event, value) => {
    setValue(value);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#393736 " }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          <Link to="/" className="app_logo">
            MoviesHub
          </Link>
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
    </AppBar>
  );
};

export default Navbar;
