import { FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/login.jpg";
import "./Login.css";

export const Login = () => {
  return (
    <div className="h-screen flex md:gap-12">
      {/* image */}
      <div className="w-3/4 h-full hidden md:block">
        <img src={loginImg} className="h-full object-cover" alt="" />
      </div>
      {/* form */}
      <div className="w-11/12 mx-auto md:w-1/4 lg:mt-12 lg:pr-12">
        <h2 className="hidden md:block">hands On</h2>
        <p className="mt-12 text-2xl font-semibold">Nice to see you again</p>

        <div className="card-body p-0 mt-6">
          <form>
            <fieldset className="fieldset space-y-3 md:space-y-0">
              <label className="fieldset-label ml-4 text-[#333333] hidden md:block">
                Email
              </label>
              <input
                type="email"
                className="input bg-[#f2f2f2] border-none h-[48px] w-full lg-placeholder lg:mb-4"
                placeholder="Enter email"
              />
              <label className="fieldset-label ml-4 text-[#333333] hidden md:block">
                Password
              </label>
              <input
                type="password"
                className="input bg-[#f2f2f2] border-none h-[48px] w-full lg-placeholder"
                placeholder="Enter password"
              />
              <div className="md:mt-5">
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn rounded-[6px] py-5 bg-main border-none text-white md:mt-8">
                Sign in
              </button>

              <div className="divider h-[0.5px] my-6"></div>
              <button className="btn btn-outline border-main rounded-[6px] py-5">
                <FaGoogle /> sign in with Google
              </button>
            </fieldset>
          </form>
        </div>
        <p className="text-center mt-6 pb-10">
          Dont have an account?{" "}
          <span className="text-blue-600 font-medium">Sign up now</span>
        </p>
      </div>
    </div>
  );
};
