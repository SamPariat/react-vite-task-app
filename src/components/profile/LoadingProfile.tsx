import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, Skeleton, Stack, Typography } from "@mui/material";

const LoadingProfile = () => {
  return (
    <Grid container spacing={2} padding={4}>
      <Grid item lg={6}>
        <Skeleton variant="circular" width={250} height={250} />
        <Stack>
          <Skeleton variant="text" component="h4" width="100%" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Stack>
      </Grid>
      <Grid item lg={6}>
        <Typography variant="h5" gutterBottom>
          Socials
        </Typography>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1}>
            <LinkedInIcon />
            <Skeleton variant="text" width="100%" />
          </Stack>
          <Stack direction="row" spacing={1}>
            <InstagramIcon />
            <Skeleton variant="text" width="100%" />
          </Stack>
          <Stack direction="row" spacing={1}>
            <TwitterIcon />
            <Skeleton variant="text" width="100%" />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LoadingProfile;
