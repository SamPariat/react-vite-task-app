import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
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
import { deleteProfileImage } from "../../api";

type RemoveImageDialogProps = {
  openRemoveImageDialog: boolean;
  setOpenRemoveImageDialog: Dispatch<SetStateAction<boolean>>;
};

const RemoveImageDialog = ({
  openRemoveImageDialog,
  setOpenRemoveImageDialog,
}: RemoveImageDialogProps) => {
  const [removeImagePending, setRemoveImagePending] = useState<boolean>(false);

  const handleLogout = async () => {
    setRemoveImagePending(true);

    await deleteProfileImage();

    setRemoveImagePending(false);
    setOpenRemoveImageDialog(false);
  };

  const handleCancel = () => {
    setOpenRemoveImageDialog(false);
  };

  return (
    <Dialog open={openRemoveImageDialog}>
      <DialogTitle>Image Removal Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to remove your profile image?
        </DialogContentText>
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
          color="error"
          startIcon={<DeleteIcon />}
          loading={removeImagePending}
          onClick={handleLogout}
        >
          Remove image
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default RemoveImageDialog;
