import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { teal, blue } from "@mui/material/colors";
import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditProfilePage from "./pages/EditProfile";
import LoginPage from "./pages/Login";
import MainPage from "./pages/Main";
import ProfilePage, { loader as profileLoader } from "./pages/Profile";
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
              children: [{ index: true, element: <TasksPage /> }],
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
