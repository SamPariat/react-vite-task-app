import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CreateIcon from "@mui/icons-material/Create";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoutDialog from "../dialog/LogoutDialog";

type SideDrawerProps = {
  openDrawer: boolean;
  setDrawerState: Dispatch<SetStateAction<boolean>>;
};

const SideDrawer = ({ openDrawer, setDrawerState }: SideDrawerProps) => {
  const navigate = useNavigate();
  const [openLogoutDialog, setOpenLogoutDialog] = useState<boolean>(false);

  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => setDrawerState(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/home")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/tasks/create-task")}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create New Task" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/tasks")}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Your Tasks" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/profile")}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/profile/edit")}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => setOpenLogoutDialog(true)}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
      <LogoutDialog
        openLogoutDialog={openLogoutDialog}
        setOpenLogoutDialog={setOpenLogoutDialog}
      />
    </Drawer>
  );
};

export default SideDrawer;
