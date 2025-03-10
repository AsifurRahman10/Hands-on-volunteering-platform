import { Link, NavLink } from "react-router";

export const Navbar = () => {
  // nav list
  const navList = (
    <>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Event Listing</li>
      </NavLink>
      <NavLink>
        <li>Community Help Requests</li>
      </NavLink>
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 lg:w-9/12 mx-auto">
        <div className="navbar-start">
          {/* mobile version */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navList}
            </ul>
          </div>
          {/* title */}
          <a className="btn btn-ghost text-xl">HandsOn</a>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 hidden md:flex gap-8 mr-8">
            {navList}
          </ul>
          <Link className="btn bg-main text-white text-[15px] rounded-3xl font-bold w-[120px] md:w-[164px] py-6">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
