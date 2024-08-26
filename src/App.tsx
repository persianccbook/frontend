import { useState } from "react";
import "./App.css";
import useAuthStore from "./store/authStore"; // Adjust the import path accordingly
import type { TokenObtainPairInputSchema } from "./openapi"; // Adjust the import path accordingly

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
    <div>
      <h1>JWT Authentication Test!</h1>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      {isAuthenticated && (
        <div>
          <h2>Authenticated</h2>
          <p>Token: {token?.access}</p>
          <button onClick={handleRefresh}>Refresh Token</button>
          <button onClick={handleVerify}>Verify Token</button>
          <button onClick={logout}>Logout</button>
        </div>
      )}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default App;
