import { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Button,
} from "@mui/material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import DeleteAccountDialog from "../components/dialog/DeleteAccountDialog";

const DeleteAccountPage = () => {
  const [openDeleteAccountDialog, setOpenDeleteAccountDialog] =
    useState<boolean>(false);

  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            marginY: 5,
          }}
        >
          Account Deletion
        </Typography>
        <Paper
          elevation={1}
          sx={{
            marginTop: 2,
            paddingX: 4,
            paddingY: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Once this account is deleted
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <LooksOneIcon />
              </ListItemIcon>
              <ListItemText>
                All data associated with this account will be deleted
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LooksTwoIcon />
              </ListItemIcon>
              <ListItemText>
                All tasks linked with this account will be deleted
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Looks3Icon />
              </ListItemIcon>
              <ListItemText>
                This is an irreversible operation and you will be responsible
                for your own action
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Looks4Icon />
              </ListItemIcon>
              <ListItemText>
                You will receive a confirmation email once this account has been
                deleted
              </ListItemText>
            </ListItem>
          </List>
          <Button
            color="error"
            onClick={() => setOpenDeleteAccountDialog(true)}
          >
            Delete Account
          </Button>
        </Paper>
      </Container>
      <DeleteAccountDialog
        openDeleteAccountDialog={openDeleteAccountDialog}
        setOpenDeleteAccountDialog={setOpenDeleteAccountDialog}
      />
    </>
  );
};

export default DeleteAccountPage;
