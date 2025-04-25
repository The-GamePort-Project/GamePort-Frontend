import { create } from "zustand";
export interface IAdminAuthState {
  admin: string | null;
  setAdmin: (token: string) => void;
  logout: () => void;
}

export const useAdminStore = create<IAdminAuthState>((set) => ({
  admin: null,
  setAdmin: (token) => set({ admin: token }),
  logout: () => set({ admin: null }),
}));
