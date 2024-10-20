import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { useAuthStore } from "../store/auth.store";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export interface AuthContextState {
    user: User;
    isLoading: boolean;
}
const AuthContext = createContext<AuthContextState>({
    user: {} as User,
    isLoading: false
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { setUser } = useAuthStore()
    const [initiolLoader, setInitiolLoader] = useState<boolean>(true)
    const navigate = useNavigate()
    const { user, isLoading, setLoading } = useAuthStore()
    const value = useMemo(() => ({
        user, isLoading
    }), [user, isLoading])

    useEffect(
        () => onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                navigate("/")
            } else {
                setLoading(true)
                setUser({} as User);
                navigate("/login")
            }
            setLoading(false)
            setInitiolLoader(false)
        }), [])

    return <AuthContext.Provider value={value}>{initiolLoader ? "Loading.." : children}</AuthContext.Provider>
}