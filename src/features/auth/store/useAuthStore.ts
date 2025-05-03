import { create } from "zustand";
import { storageService } from "../../../Services";
export interface IAuthState {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  isLoggedIn: boolean;
  logout: () => void;
}

export const useAuthStore = create<IAuthState>((set) => ({
  accessToken: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
  setAccessToken: (token: string) => {
    storageService.setItem("token", token);
    set({ accessToken: token, isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ accessToken: null, isLoggedIn: false });
  },
}));
