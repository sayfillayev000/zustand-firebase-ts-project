import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
const useAuth = () => {
  const { setLoading, setUser, setError } = useAuthStore();
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string>("");
  // const [user, setUser] = useState<User>({} as User);
  const Register = async (email: string, password: string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        const result = error as Error;
        setError(result.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const Login = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        const result = error as Error;
        setError(result.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const Logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({} as User);
        navigate("/login");
      })
      .catch((error) => {
        const result = error as Error;
        setError(result.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { Register, Logout, Login };
};

export default useAuth;

//xoryk@mailinator.com   Pa$$w0rd!
