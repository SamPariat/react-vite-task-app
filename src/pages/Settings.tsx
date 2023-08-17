import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const [selectedSetting, setSelectedSetting] = useState<number>(1);

  const navigate = useNavigate();

  const handleChangeSetting = (
    _event: MouseEvent<HTMLDivElement>,
    index: number,
    navRoute: string
  ) => {
    setSelectedSetting(index);
    navigate(navRoute, {
      relative: "route",
    });
  };

  return (
    <Grid container>
      <Grid item sm={2}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedSetting === 1}
              onClick={(event) => handleChangeSetting(event, 1, "edit-details")}
            >
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary="Edit Details" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedSetting === 2}
              onClick={(event) =>
                handleChangeSetting(event, 2, "delete-account")
              }
            >
              <ListItemText inset primary="Delete Account" />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
      <Grid item sm={10}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default SettingsPage;
