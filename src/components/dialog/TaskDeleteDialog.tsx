import CancelIcon from "@mui/icons-material/Cancel";
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

import { deleteTask } from "../../api";

type TaskDeleteDialogProps = {
  openTaskDeleteDialog: boolean;
  setOpenTaskDeleteDialog: Dispatch<SetStateAction<boolean>>;
  taskId: string;
};

const TaskDeleteDialog = ({
  openTaskDeleteDialog,
  setOpenTaskDeleteDialog,
  taskId,
}: TaskDeleteDialogProps) => {
  const [deleteTaskPending, setDeleteTaskPending] = useState<boolean>(false);

  const handleDelete = async () => {
    setDeleteTaskPending(true);

    await deleteTask(taskId);

    setDeleteTaskPending(false);
    setOpenTaskDeleteDialog(false);
    window.location.reload();
  };

  const handleCancel = () => {
    setOpenTaskDeleteDialog(false);
  };

  return (
    <Dialog open={openTaskDeleteDialog}>
      <DialogTitle>Task Deletion Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this task? You will need to create the
          task once deleted
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
          color="warning"
          startIcon={<WarningAmberIcon />}
          loading={deleteTaskPending}
          onClick={handleDelete}
        >
          Delete Task
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default TaskDeleteDialog;
