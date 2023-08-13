import CreateIcon from "@mui/icons-material/Create";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewTask } from "../api";

const CreateTaskPage = () => {
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleCheckboxChange = (
    _event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setCompleted(checked);
  };

  const handleSubmit = async () => {
    setLoading(true);

    await createNewTask(description, completed);

    setLoading(false);
    navigate("/tasks");
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 4,
      }}
    >
      <Typography variant="h3" textAlign="center" gutterBottom>
        Create a new Task
      </Typography>
      <Paper
        elevation={1}
        sx={{
          padding: 4,
        }}
      >
        <TextField
          label="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CreateIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormGroup>
          <FormControlLabel
            label="Completed"
            control={
              <Checkbox checked={completed} onChange={handleCheckboxChange} />
            }
          />
        </FormGroup>
        <LoadingButton
          loading={loading}
          variant="outlined"
          onClick={handleSubmit}
        >
          Create
        </LoadingButton>
      </Paper>
    </Container>
  );
};

export default CreateTaskPage;
