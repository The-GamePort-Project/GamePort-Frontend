import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storageService } from "../../../Services";
export interface IAuthState {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}
export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: (token: string) => {
        set({ isLoggedIn: true });
        storageService.setItem("token", token);
      },
      logout: () => {
        set({ isLoggedIn: false });
        storageService.removeItem("token");
        storageService.deleteCookie("refreshToken");
      },
    }),
    {
      name: "auth-store",
    }
  )
);
