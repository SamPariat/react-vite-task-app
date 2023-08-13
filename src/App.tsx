import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { blue, teal } from "@mui/material/colors";
import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateTaskPage from "./pages/CreateTask";
import EditProfilePage from "./pages/EditProfile";
import LoginPage from "./pages/Login";
import MainPage from "./pages/Main";
import ProfilePage, { loader as profileLoader } from "./pages/Profile";
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
            {
              path: "profile",
              children: [
                {
                  index: true,
                  element: <ProfilePage />,
                  loader: profileLoader,
                },
                {
                  path: "edit",
                  element: <EditProfilePage />,
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
