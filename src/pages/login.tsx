import Header from "@/components/Header";
import styles from "@/styles/Login.module.css";

const LoginPage: React.FC = () => {
  const signInWithGoogle = () => {
    // implement sign in with Google logic here
  };

  return (
    <div className="wrapper">
      {/* <Header /> */}
      <div className={styles.centerDiv}>
        <div className={styles.main}>
          <h1>Login </h1>
          <div className={styles.loginForm}>
            <label htmlFor="email">Email/Username:</label>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Enter email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className={styles.inputField}
              placeholder="Enter password"
              id="password"
              name="password"
              required
            />
            <label htmlFor="remember-me">
              <input type="checkbox" id="remember-me" name="remember-me" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
            <div className={styles.loginBtn}>Login</div>
          </div>
          <div className={styles.googleBtn} onClick={signInWithGoogle}>
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google Icon"
            />
            <span>Continue with Google</span>
          </div>
          {/* <p>New to FIND-EASY? <a href="#">Sign up</a> now!</p> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
