import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { getTasks } from "../../api";
import type { Task } from "../../api/tasks/types";
import TaskCard from "./TaskCard";

type AllTasksProps = {
  url: string;
};

const AllTasks = ({ url }: AllTasksProps) => {
  const [tasks, setTasks] = useState<Array<Task> | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks(url);
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, [url]);

  return (
    <Grid container spacing={2} paddingX={2}>
      {tasks?.map((task) => (
        <Grid item xs={6} key={task._id}>
          <TaskCard
            completed={task.completed}
            description={task.description}
            createdAt={task.createdAt}
            id={task._id}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default AllTasks;
