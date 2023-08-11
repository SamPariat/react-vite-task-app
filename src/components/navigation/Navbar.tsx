import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import SideDrawer from "./SideDrawer";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            sx={{ mr: 2, color: "inherit" }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography flexGrow={1} variant="h6">
            Task App
          </Typography>
          <MuiLink variant="h6" underline="hover">About Us</MuiLink>
          <Avatar>TA</Avatar>
        </Toolbar>
      </AppBar>
      <SideDrawer openDrawer={openDrawer} setDrawerState={setOpenDrawer} />
    </>
  );
};

export default Navbar;
