import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";

const MainPage = () => {
  return (
    <Box flexGrow={1} flexDirection="column">
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default MainPage;
