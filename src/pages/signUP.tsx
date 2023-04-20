import { FcGoogle } from "react-icons/fc";
import { useRef, useState } from "react";
// import { useAuth } from "firebase";
import Link from "next/link";
// import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useAuth } from "@/components/context/AuthContext";
function SignUpPage() {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const rePasswordRef: any = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const { currentUser, login, googleLogin } = useAuth();

  const { signup, currentUser, singInWithGoogle } = useAuth();

  const { push } = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // toast.loading("Creating account...");
    setLoading(true);
    if (passwordRef.current.value !== rePasswordRef.current.value) {
      setError("passwords do not match");
      alert("passwords do not match");
      setLoading(false);
      return;
    }
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
      console.log(e);
    }
    // toast.success("Account created successfully!");
    alert("Account created successfully!");
    push("/login");
    setLoading(false);
  };
  if (currentUser) push("/");
  return (
    <>
      <div className="hero min-h-[90vh]  px-12 bg-base-200">
        {/* error != "" && alert(error) */}
        <div className="hero-content flex-col lg:flex-row-reverse px-24 lg:gap-[2rem]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign UP!</h1>
            <p className="py-6">
              Enter Find Easy and start your journey with us in finding the best
              property for you and your family.
              {currentUser && currentUser.email}
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  type="text"
                  required
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
                  type="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <input
                  ref={rePasswordRef}
                  required
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered mt-2"
                />
                <label className="label">
                  <Link href="/login">
                    <p className="label-text-alt link link-hover">
                      Already have an account? Login
                    </p>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                {/*                disabled={loading} */}
                <button
                  type="submit"
                  disabled={loading}
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-primary  mb-0 mt-0"
                >
                  Sign Up
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
              <span className="px-2">SignUp with google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
