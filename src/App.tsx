import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { blue, teal } from "@mui/material/colors";
import { useMemo } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import CreateTaskPage from "./pages/CreateTask";
import DeleteAccountPage from "./pages/DeleteAccount";
import EditProfilePage from "./pages/EditProfile";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MainPage from "./pages/Main";
import ProfilePage, { loader as profileLoader } from "./pages/Profile";
import SettingsPage from "./pages/Settings";
import TaskPage from "./pages/Task";
import TasksPage from "./pages/Tasks";

const App = () => {
  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: teal,
          secondary: blue,
        },
        typography: {
          fontFamily: "PT Sans",
          button: {
            fontWeight: "bold",
          },
        },
      }),
    []
  );

  const router = createBrowserRouter([
    {
      path: "",
      children: [
        {
          element: <MainPage />,
          children: [
            { index: true, element: <Navigate to="home" /> },
            { path: "home", element: <HomePage /> },
            {
              path: "profile",
              children: [
                {
                  index: true,
                  element: <ProfilePage />,
                  loader: profileLoader,
                },
                {
                  path: "settings",
                  element: <SettingsPage />,
                  children: [
                    { path: "edit-details", element: <EditProfilePage /> },
                    { path: "delete-account", element: <DeleteAccountPage /> },
                  ],
                },
              ],
            },
            {
              path: "tasks",
              children: [
                { index: true, element: <TasksPage /> },
                {
                  path: "create-task",
                  element: <CreateTaskPage />,
                },
                {
                  path: ":taskId",
                  element: <TaskPage />,
                },
              ],
            },
          ],
        },
        {
          path: "auth",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
