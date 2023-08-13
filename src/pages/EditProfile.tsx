import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const EditProfilePage = () => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          marginY: 5,
        }}
      >
        Edit Profile
      </Typography>
      <Paper
        elevation={1}
        sx={{
          marginTop: 2,
          paddingX: 4,
        }}
      >
        <Grid container spacing={2} padding={4}>
          <Grid item xs={12} md={6}>
            <TextField label="First Name" required fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Last Name" required fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" required fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type="password" required fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Age" type="number" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Linkedin Link"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkedInIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Instagram Link"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InstagramIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Twitter Link"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TwitterIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button startIcon={<SaveIcon />} variant="contained">
              Save Details
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default EditProfilePage;
