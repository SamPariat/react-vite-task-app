import EditIcon from "@mui/icons-material/Edit";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Avatar,
  Container,
  Fab,
  Grid,
  Link as MuiLink,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          marginY: 5,
        }}
      >
        Your Profile
      </Typography>
      <Paper
        elevation={1}
        sx={{
          marginTop: 2,
        }}
      >
        <Grid container spacing={2} padding={4}>
          <Grid item lg={6}>
            <Avatar
              variant="circular"
              src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
              sx={{
                height: 250,
                width: 250,
              }}
            />
            <Stack>
              <Typography variant="h4" gutterBottom>
                Firstname Lastname
              </Typography>
              <Typography variant="body1">He/Him</Typography>
              <Typography variant="body1">
                FirstnameLastname@email.com
              </Typography>
              <Typography variant="body2">39 yrs old</Typography>
            </Stack>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" gutterBottom>
              Socials
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1}>
                <LinkedInIcon />
                <MuiLink underline="hover" href="#" color="inherit">
                  LinkedIn Link
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1}>
                <InstagramIcon />
                <MuiLink underline="hover" href="#" color="inherit">
                  Instagram Link
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1}>
                <TwitterIcon />
                <MuiLink underline="hover" href="#" color="inherit">
                  Twitter Link
                </MuiLink>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Fab
              variant="extended"
              size="medium"
              color="secondary"
              onClick={() => navigate("edit")}
            >
              <EditIcon sx={{ marginRight: 1 }} />
              Edit
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
