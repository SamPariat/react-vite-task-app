import {
  Box,
  FormControlLabel,
  FormGroup,
  Grid,
  Pagination,
  Switch,
  Typography,
} from "@mui/material";
import { ChangeEvent, Suspense, useEffect, useState } from "react";
import AllTasks from "../components/card/AllTasks";

type Options = {
  ascending: boolean;
  completed: boolean;
};

const TasksPage = () => {
  const [options, setOptions] = useState<Options>({
    ascending: true,
    completed: false,
  });
  const [page, setPage] = useState<number>(1);

  const handleSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions((prevOptions: Options) => {
      return { ...prevOptions, [event.target.name]: event.target.checked };
    });
  };

  const handlePagination = (_event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const url = `http://localhost:4040/tasks?${
    options.ascending ? "sortBy=createdAt_asc" : "sortBy=createdAt_desc"
  }&${options.completed ? "completed=true" : "completed=false"}&limit=6&skip=${
    (page - 1) * 6
  }`;

  return (
    <Box marginTop={4}>
      <Grid container>
        <Grid item md={3}>
          <Box padding={2}>
            <Typography variant="h5">Filter By</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Switch onChange={handleSwitch} name="completed" />}
                label="Completed"
              />
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked
                    onChange={handleSwitch}
                    name="ascending"
                  />
                }
                label="Ascending"
              />
            </FormGroup>
            <Pagination
              count={10}
              defaultPage={1}
              boundaryCount={1}
              onChange={handlePagination}
              color="primary"
              variant="text"
            />
          </Box>
        </Grid>
        <Grid item md={9}>
          <AllTasks url={url} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TasksPage;
