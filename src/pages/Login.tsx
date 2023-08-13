import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../api";

const LoginPage = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const submitFormHandler = async () => {
    if (isLogin) {
      await login(emailRef.current?.value!, passwordRef.current?.value!);
    } else {
    }

    navigate("/");
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Stack direction="column" spacing={2} paddingX={4}>
          <Typography variant="h4" textAlign="center">
            {isLogin ? "Sign In" : "Sign Up"}
          </Typography>
          {!isLogin && (
            <TextField
              label="Name"
              variant="outlined"
              required
              inputRef={nameRef}
            />
          )}
          <TextField
            label="Email"
            variant="outlined"
            required
            inputRef={emailRef}
          />
          <TextField
            label="Password"
            variant="outlined"
            type={visiblePassword ? "text" : "password"}
            required
            inputRef={passwordRef}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setVisiblePassword(!visiblePassword)}
                  >
                    {visiblePassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" onClick={submitFormHandler}>
            {isLogin ? "Login" : "Sign up"}
          </Button>
          <Typography
            variant="body2"
            sx={{
              textDecoration: "underline",
              color: "primary.main",
              cursor: "pointer",
            }}
            onClick={() => setIsLogin(!isLogin)}
          >
            Don't have an account? Sign up for free
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
