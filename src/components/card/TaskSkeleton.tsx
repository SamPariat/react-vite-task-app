import { Card, CardActions, CardContent, Skeleton } from "@mui/material";

const TaskSkeleton = () => {
  return (
    <Card
      sx={{
        flexGrow: 1,
        marginX: 4,
      }}
    >
      <CardContent>
        <Skeleton variant="text" component="h4" />
        <Skeleton variant="text" component="h6" />
      </CardContent>
      <CardActions>
        <Skeleton variant="rounded" />
      </CardActions>
    </Card>
  );
};

export default TaskSkeleton;
