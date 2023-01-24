import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [anchorElement, setAnchorElement] = useState();
  const open = anchorElement;

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#393736 " }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          MoviesHub
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ margin: "10px", textTransform: "lowercase" }}
        >
          <Button color="inherit">
            <WhatshotIcon />
            Trendings
          </Button>
          <Button color="inherit">
            <MovieIcon />
            Movies
          </Button>
          <Button color="inherit">
            <TvIcon />
            Tv Series
          </Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-control={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // endIcon={<KeyboardArrowDownIcon />}
          >
            <SearchIcon />
            Search
          </Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorElement}
          open={open}
          MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
