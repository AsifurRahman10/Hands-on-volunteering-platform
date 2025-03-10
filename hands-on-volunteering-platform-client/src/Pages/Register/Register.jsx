import { Link } from "react-router";
import loginImg from "../../assets/login.jpg";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { IndividualUser } from "../../Component/UserWiseForm/IndividualUser";
import { OrganizationUser } from "../../Component/UserWiseForm/OrganizationUser";

export const Register = () => {
  const [selectedUserType, setSelectedUserType] = useState("");
  const handleUserSelect = (e) => {
    setSelectedUserType(e.target.value);
  };

  const handleUserWiseForm = () => {
    console.log("hello");
  };
  return (
    <div className="h-screen flex md:gap-12">
      {/* image */}
      <div className="w-3/4 h-full hidden md:block">
        <img src={loginImg} className="h-full object-cover" alt="" />
      </div>
      {/* form */}
      <div className="w-11/12 mx-auto md:w-1/4 lg:mt-12 lg:pr-12">
        <h2 className="hidden md:block">hands On</h2>
        <p className="mt-12 text-2xl font-semibold">
          Sign up and make an impact!
        </p>

        <div className="card-body p-0 mt-6">
          <form>
            <fieldset
              className={`fieldset space-y-3 md:space-y-0 ${
                selectedUserType !== "" && "hidden"
              }`}
            >
              {/* name */}
              <label className="fieldset-label ml-4 text-[#333333] hidden md:block">
                Name
              </label>
              <input
                type="text"
                className="input bg-[#f2f2f2] border-none h-[48px] w-full lg-placeholder lg:mb-4"
                placeholder="Enter name"
                required
              />
              {/* email */}
              <label className="fieldset-label ml-4 text-[#333333] hidden md:block">
                Email
              </label>
              <input
                type="email"
                className="input bg-[#f2f2f2] border-none h-[48px] w-full lg-placeholder lg:mb-4"
                placeholder="Enter email"
                required
              />
              {/* password */}
              <label className="fieldset-label ml-4 text-[#333333] hidden md:block">
                Password
              </label>
              <input
                type="password"
                className="input bg-[#f2f2f2] border-none h-[48px] w-full lg-placeholder lg:mb-4"
                placeholder="Enter password"
                required
              />
              {/* image */}
              <label className="fieldset-label ml-4 text-[#333333] hidden md:block">
                Upload image
              </label>
              <input
                required
                type="file"
                className="file-input bg-[#f2f2f2] border-none h-[48px] w-full lg:mb-4"
              />
              {/* select user type */}
              <select
                value={selectedUserType}
                className="select w-full bg-[#f2f2f2] border-none h-[48px]"
                onChange={handleUserSelect}
                required
              >
                <option value="" disabled={true}>
                  Continue as{" "}
                </option>
                <option value="individual">Individual Volunteer</option>
                <option value="organization">Organization</option>
              </select>

              {/* button */}
              <button
                onClick={handleUserWiseForm}
                className="btn rounded-[6px] py-5 bg-main border-none text-white md:mt-8"
              >
                Next
              </button>

              <div className="divider h-[0.5px] my-6"></div>
              <button className="btn btn-outline border-main rounded-[6px] py-5">
                <FaGoogle /> sign in with Google
              </button>
            </fieldset>
            {selectedUserType == "individual" && <IndividualUser />}
            {selectedUserType == "organization" && <OrganizationUser />}
          </form>
        </div>
        <p className="text-center mt-6 pb-10">
          Dont have an account?{" "}
          <Link to="/register">
            <span className="text-blue-600 font-medium">Sign up now</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
