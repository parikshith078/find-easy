import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
function login() {
  const handleSubmit = (e) => {
    console.log("submit");
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
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {/*  ref={emailRef} */}
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {/* ref={passwordRef{}} */}
              <input
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
                <Link href="/signUp">
                  <p className="label-text-alt link link-hover">SignUp</p>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              {/*                disabled={loading} */}
              <button type="submit" className="btn btn-primary  mb-0 mt-0">
                Login
              </button>
            </div>
          </form>
          <div className="divider mt-0">OR</div>
          {/*            disabled={loading} */}
          {/*            onClick={() => googleLogin()} */}
          <button className="btn btn-primary mb-4 mx-8">
            <FcGoogle size="28" />
            <span className="px-2">Login with google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default login;
