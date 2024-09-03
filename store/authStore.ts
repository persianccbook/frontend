import { create } from "zustand";
import { OpenAPI, TokenService } from "../openapi";
import type {
  TokenObtainPairInputSchema,
  TokenObtainPairOutputSchema,
  TokenRefreshOutputSchema,
} from "../openapi";
import { persist, createJSONStorage } from "zustand/middleware";

OpenAPI.BASE = 'http://127.0.0.1:8000'

interface AuthState {
  token: TokenObtainPairOutputSchema | TokenRefreshOutputSchema | null;
  isAuthenticated: boolean;
  error: string | null;
  obtainToken: (credentials: TokenObtainPairInputSchema) => Promise<void>;
  refreshToken: () => Promise<void>;
  verifyToken: () => Promise<void>;
  logout: () => void;
}

const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      token: null,
      isAuthenticated: false,
      error: null,

      // Method to obtain a token
      obtainToken: async (credentials) => {
        try {
          const response = await TokenService.tokenObtainPair(credentials);
          set({ token: response, isAuthenticated: true, error: null });
        } catch (error: any) {
          set({ error: error.message });
        }
      },

      // Method to refresh the token
      refreshToken: async () => {
        const refreshToken = get().token?.refresh; // Assuming your token has a refresh property
        if (!refreshToken) {
          set({ error: "No refresh token available" });
          return;
        }

        try {
          const response = await TokenService.tokenRefresh({
            refresh: refreshToken,
          });
          set({ token: response, error: null });
        } catch (error: any) {
          set({ error: error.message });
        }
      },

      // Method to verify the token
      verifyToken: async () => {
        const token = get().token?.access; // Assuming your token has an access property
        if (!token) {
          set({ error: "No access token available" });
          return;
        }

        try {
          await TokenService.tokenVerify({ token });
          set({ error: null }); // Token is valid
        } catch (error: any) {
          set({ error: error.message });
        }
      },
      // Method to log out
      logout: () => {
        set({ token: null, isAuthenticated: false, error: null });
      },
    }),
    {
      name: "auth-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useAuthStore;
