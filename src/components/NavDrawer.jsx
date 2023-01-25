import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const NavDrawer = () => {
  const [drawer, setDrawer] = useState(false);

  const handleDrawerClose = () => {
    setDrawer(false);
  };
  return (
    <>
      <Drawer open={drawer} onClose={handleDrawerClose}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <WhatshotIcon />
                Trendings
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <MovieIcon />
                Movies
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <TvIcon />
                Tv Series
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setDrawer(!drawer)}
        sx={{
          color: "#fff",
          fontSize: "40px",
          marginLeft: "auto",
        }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default NavDrawer;
