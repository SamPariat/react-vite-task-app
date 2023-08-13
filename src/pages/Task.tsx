import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { updateTask } from "../api";

const TaskPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSave = async () => {
    setLoading(true);

    await updateTask(state.id, {
      description: descriptionRef.current?.value,
    });

    setLoading(false);
    navigate(-1);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: 4,
      }}
    >
      <Typography textAlign="center" variant="h3" gutterBottom>
        Edit Task
      </Typography>
      <Paper
        elevation={1}
        sx={{
          padding: 4,
        }}
      >
        <TextField
          defaultValue={state.description}
          value={descriptionRef.current?.value}
          label="Description"
          inputRef={descriptionRef}
          fullWidth
          sx={{
            marginBottom: 2,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EditIcon />
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={handleSave}
          startIcon={<SaveIcon />}
        >
          Save Changes
        </LoadingButton>
      </Paper>
    </Container>
  );
};

export default TaskPage;
