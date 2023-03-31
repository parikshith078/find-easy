import Header from "@/components/Header";
import styles from "@/styles/Login.module.css";
import { signInWithGoogle, signInWithEmailAndPassword } from "@/libs/auth/firebase";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const user = await signInWithEmailAndPassword(email, password);
    if (user) {
      router.push("/");
    } else {
      // Handle error - this should not happen
      setError("An unknown error occurred");
    }
  } catch (error) {
    console.error(error);
    setError("Invalid email or password");
    setPassword("");
  }
};

  
  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to sign in with Google");
    }
  };

  return (
    <div className="wrapper">
      <div className={styles.centerDiv}>
        <div className={styles.main}>
          <h1>Login</h1>
          <div className={styles.loginForm}>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email/Username:</label>
              <input
                className={styles.inputField}
                type="text"
                placeholder="Enter email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className={styles.inputField}
                placeholder="Enter password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="remember-me">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
          <div className={styles.googleSignIn}>
            <p>Or sign in with Google:</p>
            <button onClick={handleGoogleSignIn}>
              <picture>
                <img
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  alt="Google Icon"
                />
              </picture>
              Sign in with Google
            </button>
            </div>
          {error && <div className={styles.errorMessage}>{error}</div>}
        </div>
          </div>
        </div>
      
    
  );
};

export default LoginPage;




