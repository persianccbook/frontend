import { useState } from "react";
import useAuthStore from "./store/authStore"; // Adjust the import path accordingly
import type { TokenObtainPairInputSchema } from "./openapi"; // Adjust the import path accordingly
import { Box, Button, TextField, Typography } from "@mui/material";
import ColorModeSwitch from "./components/ColorModeSwitch";

function App() {
  const {
    obtainToken,
    refreshToken,
    verifyToken,
    token,
    isAuthenticated,
    error,
    logout,
  } = useAuthStore();
  const [credentials, setCredentials] = useState<TokenObtainPairInputSchema>({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    await obtainToken(credentials);
  };

  const handleRefresh = async () => {
    await refreshToken();
  };

  const handleVerify = async () => {
    await verifyToken();
  };

  return (
    <Box>
      <ColorModeSwitch />
      <Typography variant="h1">احراز هویت</Typography>
      <Box>
        <Typography variant="h2">ورود</Typography>
        <TextField
          sx={{ mx: 2 }}
          variant="outlined"
          type="text"
          placeholder="ایمیل"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <TextField
          sx={{ mx: 2 }}
          variant="outlined"
          type="password"
          placeholder="رمز ورود"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Button
          variant="contained"
          sx={{ mx: 2 }}
          onClick={handleLogin}
          color="primary"
        >
          ورود
        </Button>
      </Box>

      {isAuthenticated && (
        <Box>
          <Typography variant="h2">احراز هویت شده</Typography>
          <Typography variant="body1">توکن: {token?.access}</Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mx: 2 }}
            onClick={handleRefresh}
          >
            بروزرسانی توکن
          </Button>
          <Button variant="contained" sx={{ mx: 2 }} onClick={handleVerify}>
            تایید توکن
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mx: 2 }}
            onClick={logout}
          >
            خروج
          </Button>
        </Box>
      )}

      {error && (
        <Typography variant="body2" style={{ color: "red" }}>
          خطا: {error}
        </Typography>
      )}
    </Box>
  );
}

export default App;
