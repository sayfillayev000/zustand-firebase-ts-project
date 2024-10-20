import { User } from "firebase/auth";
import { create } from "zustand";

interface AuthState {
  isLoading: boolean;
  error: string;
  user: User;
  setLoading: (bool: boolean) => void;
  setUser: (user: User) => void;
  setError: (err: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoading: false,
  error: "",
  user: {} as User,
  setLoading: (bool: boolean) =>
    set((state) => ({ ...state, isLoading: bool })),
  setUser: (user: User) => set((state) => ({ ...state, user })),
  setError: (err: string) => set((state) => ({ ...state, error: err })),
}));
