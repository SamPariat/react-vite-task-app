import CancelIcon from "@mui/icons-material/Cancel";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

import { deleteAccount } from "../../api";

type DeleteAccountDialogProps = {
  openDeleteAccountDialog: boolean;
  setOpenDeleteAccountDialog: Dispatch<SetStateAction<boolean>>;
};

const DeleteAccountDialog = ({
  openDeleteAccountDialog,
  setOpenDeleteAccountDialog,
}: DeleteAccountDialogProps) => {
  const [deleteAccountPending, setDeleteAccountPending] =
    useState<boolean>(false);

  const handleDeleteAccount = async () => {
    setDeleteAccountPending(true);

    await deleteAccount();

    setDeleteAccountPending(false);
    setOpenDeleteAccountDialog(false);
  };

  const handleCancel = () => {
    setOpenDeleteAccountDialog(false);
  };

  return (
    <Dialog open={openDeleteAccountDialog}>
      <DialogTitle>Account Deletion Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you still sure you want to delete this account?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<CancelIcon />}
          onClick={handleCancel}
        >
          No
        </Button>
        <LoadingButton
          variant="outlined"
          color="error"
          startIcon={<DangerousOutlinedIcon />}
          loading={deleteAccountPending}
          onClick={handleDeleteAccount}
        >
          Yes
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAccountDialog;
