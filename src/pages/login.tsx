import { FcGoogle } from "react-icons/fc";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
// import { useAuth } from "firebase";
import { useAuth } from "@/components/context/AuthContext";
import Link from "next/link";
function LoginPage() {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  // const { currentUser, login, googleLogin } = useAuth();
  const { login, currentUser, singInWithGoogle } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // await li;
      console.log("success");
      alert("success");
      push("/");
    } catch {
      alert("Failed to login");
      setLoading(false);
      console.log("error");
    }
  };
  return (
    <div className="hero min-h-[90vh]  px-12 bg-base-200">
      {/* error != "" && notify() */}
      <div className="hero-content flex-col lg:flex-row-reverse px-24 lg:gap-[2rem]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Enter Find Easy and start your journey with us in finding the best
            property for you and your family.
          </p>
          <Link href="/" className="btn btn-outline btn-primary">
            Continue as Guest
          </Link>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                required
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                ref={passwordRef}
                required
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="/forgot">
                  <p className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                </Link>
                <Link href="/signUP">
                  <p className="label-text-alt link link-hover">SignUp</p>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              {/*                disabled={loading} */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary  mb-0 mt-0"
              >
                Login
              </button>
            </div>
          </form>
          <div className="divider mt-0">OR</div>
          {/*            onClick={() => googleLogin()} */}
          <button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              singInWithGoogle();
              setLoading(false);
            }}
            className="btn btn-primary mb-4 mx-8"
          >
            <FcGoogle size="28" />
            <span className="px-2">Login with google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
