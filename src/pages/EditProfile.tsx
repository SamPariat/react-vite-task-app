import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import SaveIcon from "@mui/icons-material/Save";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LoadingButton } from "@mui/lab";
import {
  Container,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { updateAccount } from "../api";

type Details = {
  name?: string;
  email?: string;
  password?: string;
  age?: number;
};

const EditProfilePage = () => {
  const [details, setDetails] = useState<Details>({} as Details);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedValue: string | number = event.target.value;

    if (event.target.name === "age") {
      updatedValue = Number.parseInt(updatedValue);
    }

    setDetails((prevDetails) => {
      return { ...prevDetails, [event.target.name]: updatedValue };
    });
  };

  const handleUpdateProfile = async () => {
    setLoading(true);

    await updateAccount(details);

    setLoading(false);
    navigate("/profile");
  };

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
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              onChange={handleChange}
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Age"
              name="age"
              onChange={handleChange}
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Reddit Link"
              name="reddit_link"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RedditIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Instagram Link"
              name="instagram_link"
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
              name="twitter_link"
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
            <LoadingButton
              startIcon={<SaveIcon />}
              variant="contained"
              loading={loading}
              onClick={handleUpdateProfile}
            >
              Save Details
            </LoadingButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default EditProfilePage;
