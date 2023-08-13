import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  Link as MuiLink,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
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
          <MuiLink variant="h6" underline="hover" color="inherit">
            About Us
          </MuiLink>
        </Toolbar>
      </AppBar>
      <SideDrawer openDrawer={openDrawer} setDrawerState={setOpenDrawer} />
    </>
  );
};

export default Navbar;
