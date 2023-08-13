import { Container, Paper, Typography } from "@mui/material";
import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

import { getProfile } from "../api";
import LoadedProfile from "../components/profile/LoadedProfile";
import LoadingProfile from "../components/profile/LoadingProfile";

const ProfilePage = () => {
  const { userProfile } = useLoaderData() as any;

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
        <Suspense fallback={<LoadingProfile />}>
          <Await resolve={userProfile}>
            {(userData) => (
              <LoadedProfile
                name={userData.name}
                age={userData.age}
                email={userData.email}
                id={userData._id}
                since={userData.createdAt}
              />
            )}
          </Await>
        </Suspense>
      </Paper>
    </Container>
  );
};

export const loader = () => {
  return defer({
    userProfile: getProfile(),
  });
};

export default ProfilePage;
