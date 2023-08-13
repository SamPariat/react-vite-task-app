import EditIcon from "@mui/icons-material/Edit";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Avatar,
  Badge,
  Chip,
  Fab,
  Grid,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import ImageMenu from "../menu/ImageMenu";

type LoadedProfileProps = {
  name: string;
  email: string;
  age: number;
  id: string;
  since: string;
};

const LoadedProfile = ({ name, email, age, id, since }: LoadedProfileProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const openImageMenu = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const initials = name.split(" ");
  const noNameString = initials.join();
  const formattedDate = new Date(since).toLocaleDateString();

  return (
    <Grid container spacing={2} padding={4}>
      <Grid item lg={6}>
        <Badge
          overlap="circular"
          badgeContent={
            <Chip label="Edit" variant="filled" onClick={handleOpen} />
          }
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Avatar
            variant="circular"
            src={`http://localhost:4040/users/${id}/profile-img`}
            sx={{
              height: 200,
              width: 200,
              fontSize: 100,
              backgroundColor: "secondary.main",
            }}
            alt={noNameString}
          />
        </Badge>
        <ImageMenu
          openImageMenu={openImageMenu}
          handleClose={handleClose}
          anchorElement={anchorEl}
        />
        <Stack>
          <Typography variant="h4" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1">He/Him</Typography>
          <Typography variant="body1">Since {formattedDate}</Typography>
          <Typography variant="body1">{email}</Typography>
          <Typography variant="body2">{age}</Typography>
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
  );
};

export default LoadedProfile;
