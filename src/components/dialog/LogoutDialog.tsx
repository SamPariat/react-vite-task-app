import CancelIcon from "@mui/icons-material/Cancel";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import { logout, logoutAllAccounts } from "../../api";

type LogoutDialogProps = {
  openLogoutDialog: boolean;
  setOpenLogoutDialog: Dispatch<SetStateAction<boolean>>;
};

const LogoutDialog = ({
  openLogoutDialog,
  setOpenLogoutDialog,
}: LogoutDialogProps) => {
  const [logoutPending, setLogoutPending] = useState<boolean>(false);
  const [logoutAllAccountsPending, setLogoutAllAccountsPending] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLogoutPending(true);

    await logout();

    setLogoutPending(false);
    setOpenLogoutDialog(false);
    navigate("/auth");
  };

  const handleLogoutAll = async () => {
    setLogoutAllAccountsPending(true);

    await logoutAllAccounts();

    setLogoutAllAccountsPending(false);
    setOpenLogoutDialog(false);
    navigate("/auth");
  };

  const handleCancel = () => {
    setOpenLogoutDialog(false);
  };

  return (
    <Dialog open={openLogoutDialog}>
      <DialogTitle>Logout Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to log out?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<CancelIcon />}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <LoadingButton
          variant="outlined"
          color="warning"
          startIcon={<WarningAmberIcon />}
          loading={logoutPending}
          onClick={handleLogout}
        >
          Logout
        </LoadingButton>
        <LoadingButton
          variant="outlined"
          color="error"
          startIcon={<PriorityHighIcon />}
          loading={logoutAllAccountsPending}
          onClick={handleLogoutAll}
        >
          Logout from all devices
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
