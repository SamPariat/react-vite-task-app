import DeleteIcon from "@mui/icons-material/Delete";
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Link as MuiLink,
  Tooltip,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { updateTask } from "../../api";
import TaskDeleteDialog from "../dialog/TaskDeleteDialog";

type TaskCardProps = {
  description: string;
  completed: boolean;
  createdAt: string;
  id: string;
};

const TaskCard = ({ description, completed, createdAt, id }: TaskCardProps) => {
  const [completedTask, setCompletedTask] = useState<boolean>(completed);
  const [openTaskDeleteDialog, setOpenTaskDeleteDialog] =
    useState<boolean>(false);
  const formattedDate = new Date(createdAt).toLocaleDateString();

  const setCompleted = async (
    _event: ChangeEvent<HTMLInputElement>,
    completed_: boolean
  ) => {
    await updateTask(id, {
      completed: completed_,
    });

    setCompletedTask(completed_);
  };

  return (
    <>
      <Card>
        <CardContent>
          <MuiLink
            component={RouterLink}
            variant="h4"
            gutterBottom
            underline="hover"
            to={id}
            state={{
              id,
              description,
            }}
          >
            {description}
          </MuiLink>
          <Typography variant="h6">Created on {formattedDate}</Typography>
        </CardContent>
        <CardActions>
          <FormGroup>
            <FormControlLabel
              label="Completed"
              control={
                <Checkbox onChange={setCompleted} checked={completedTask} />
              }
            />
          </FormGroup>
          <Tooltip title="Delete Task" placement="right-end">
            <IconButton
              color="error"
              onClick={() => setOpenTaskDeleteDialog(true)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
      <TaskDeleteDialog
        openTaskDeleteDialog={openTaskDeleteDialog}
        setOpenTaskDeleteDialog={setOpenTaskDeleteDialog}
        taskId={id}
      />
    </>
  );
};

export default TaskCard;
