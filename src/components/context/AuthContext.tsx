import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  UserInfo,
} from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { auth, db, storage } from "@/libs/auth/firebase";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

interface AuthContextProps {
  currentUser: UserInfo | null;
  signup: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  resetPassword: (email: string) => Promise<any>;
  logout: any;
  singInWithGoogle: any;
  db: any;
  storage: any;
}

const AuthContext = React.createContext<AuthContextProps>(null!);

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = React.useState<any | null>(null);

  const provider = new GoogleAuthProvider();

  const { push } = useRouter();

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth);
    push("/login");
  };

  const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email);
    alert("Check your email for further instructions");
    return push("/login");
  };

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);
        console.log(user);
        console.log(`Logged in as ${user.email}`);
        push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return unsubscriber;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    resetPassword,
    logout,
    singInWithGoogle,
    db,
    storage,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
