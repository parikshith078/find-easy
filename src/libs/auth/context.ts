import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import React from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

interface AuthContextType {
  currentUser: any | null;
  signUp: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
  googleLogin: () => void;
}
// TODO: Create full interface for context by reading user object
const AuthContext = createContext<AuthContextType>(null!);

// Firestore

export function useAuth() {
  return useContext(AuthContext);
}

// authentication

export function AuthProvider({ children: any }) {
  const porvider = new GoogleAuthProvider();
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const router = useRouter();

  // main courses state
  // const [courses, setCourses] = useState([]);

  const login = (email: any, password: any) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email: any, password: any) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth);
    router.push("/");
    toast.success("Logout successful");
  };

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any | undefined) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // google login
  const googleLogin = () => {
    signInWithPopup(auth, porvider)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);
        console.log(user);
        toast.success(`Logged in as ${user.email}`);
        router.push("/sections");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const value = {
    currentUser,
    signUp,
    login,
    logout,
    resetPassword,
    googleLogin,
    // courses state
    // courses,
    // setCourses,
    // firestore db provider
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
