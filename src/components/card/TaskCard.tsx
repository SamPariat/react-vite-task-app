import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { updateTask } from "../../api";

type TaskCardProps = {
  description: string;
  completed: boolean;
  createdAt: string;
  id: string;
};

const TaskCard = ({ description, completed, createdAt, id }: TaskCardProps) => {
  const [completedTask, setCompletedTask] = useState<boolean>(completed);
  const formattedDate = new Date(createdAt).toLocaleDateString();

  const setCompleted = async (
    _event: React.ChangeEvent<HTMLInputElement>,
    completed_: boolean
  ) => {
    await updateTask(id, {
      completed: completed_,
    });

    setCompletedTask(completed_);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {description}
        </Typography>
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
      </CardActions>
    </Card>
  );
};

export default TaskCard;
