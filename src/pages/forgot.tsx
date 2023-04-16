import React from "react";
import Link from "next/link";
import { useAuth } from "@/components/context/AuthContext";

function FogetPage() {
  const emailRef: any = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const { resetPassword } = useAuth();

  const handelSubmit = (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = emailRef.current.value;
      resetPassword(res);
      console.log("success");
    } catch {
      alert("Failed to send");
    }
  };
  return (
    <div className="hero min-h-[90vh]  px-12 bg-base-200">
      {/* error != "" && notify() */}
      <div className="hero-content flex-col lg:flex-row-reverse px-24 lg:gap-[2rem]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Reset now!</h1>
          <p className="py-6">
            Enter Find Easy and start your journey with us in finding the best
            property for you and your family.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={(e) => handelSubmit(e)} className="card-body">
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
              <label className="label">
                <Link href="/login" className="label-text underline ">
                  Login now
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
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FogetPage;
