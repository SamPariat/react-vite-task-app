import LockPersonIcon from "@mui/icons-material/LockPerson";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={6} padding={2}>
          <Stack>
            <Typography variant="h1" gutterBottom>
              Start managing your tasks
            </Typography>
            <Typography variant="h4" color="teal">
              Efficiency Amplified: Your Ultimate Task Manager
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={6} paddingX={4} paddingY={2}>
          <img src="images/Hero.png" style={{ maxWidth: "100%" }} />
          <Typography variant="h5" textAlign="end">
            Supports both Dark and Light modes
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4} paddingX={2} justifyContent="center">
            <Grid item xs={12} lg={6}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar>
                      <LockPersonIcon />
                    </Avatar>
                  }
                  title="Authentication"
                  subheader="Authentication using jwt and bcrypt for password hashing"
                />
                <CardContent>
                  <Typography variant="body1">
                    Fully based on authentication. Read and change only your own
                    tasks without the risk of others!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar>
                      <FormatListNumberedIcon />
                    </Avatar>
                  }
                  title="Task Management"
                  subheader="Manage your tasks without any hassle"
                />
                <CardContent>
                  <Typography variant="body1">
                    Easily mark tasks as completed and alter description
                    whenever needed!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
