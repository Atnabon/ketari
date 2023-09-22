import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../features/userAuth/userAuthSlice";
import { Button } from "antd";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // navbar sticky to when scroll start
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 250
        ? setStickyClass("fixed top-0 left-0 z-50 bg-white shadow-lg")
        : setStickyClass("relative");
    }
  };
  // navbar sticky to when scroll end
  const [checkbox, setCheckbox] = useState(false);
  //const [adminCheckbox, setAdminCheckbox] = useState(false);
  const { user, accessToken } = useSelector((state) => state.auth || {});

  // console.log(user?.role)
  // logged in checking
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    dispatch(login({ user: auth?.user, token: auth?.token }));
  }, [dispatch, navigate]);

  //active link
  let activeStyle = {
    color: "#fdb82c",
  };

  return (
    <header>
      <div
        className={`w-full py-5 shadow-lg bg-white duration-700 ${stickyClass}`}
      >
        <div className="flex justify-between items-center container mx-auto px-5">
          {/*.......Website Logo........*/}
          <div>
            <NavLink
              className="cursor-pointer hover:bg-[#fdb82c] hover:text-[#fdb82c] bg-opacity-90"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <figure>
                <img src="/ketari.png" alt="logo" className="shrink-0 w-44" />
              </figure>
            </NavLink>
          </div>

          {/*.......md and lg navbar start.......*/}
          <div className="hidden md:block">
            <div className="flex items-center justify-between sm:gap-10">
              <div>
                <ul className="flex md:gap-3 lg:gap-6">
                  <li className="font-bold">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink
                      to="/jobs"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Find a Job
                    </NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink
                      to="/about"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink
                      to="/contact"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Contact
                    </NavLink>
                  </li>

                  <li className="font-bold">
                    <NavLink
                      to="/login"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Get Hired
                    </NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink
                      to="/login"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Post Job
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="flex gap-2">
                {accessToken && user?.email ? (
                  <NavLink
                    to={`/${user?.role}`}
                    className="btn rounded-none border-0 bg-[#fdb82c] hover:bg-transparent hover:border-primary hover:text-primary border-[#fdb82  text-white font-bold px-4"
                  >
                    Dashboard
                  </NavLink>
                ) : (
                  <>
                    <div className="hidden md:static md:flex gap-2 md:items-center md:justify-end md:inset-y-0 md:right-4">
                      <NavLink to="/register">
                        <Button
                          type="bulgary"
                          htmlType="submit"
                          className="mr-3 border-[#FDB82C] hover:border-[rgb(253,184,44)] hover:bg-transparent"
                        >
                          Sign Up
                        </Button>
                      </NavLink>

                      <NavLink to="/login">
                        <Button
                          type="bulgary"
                          htmlType="submit"
                          className="bg-[#FDB82C]  border-[#FDB82C] hover:border-[rgb(253,184,44)] hover:bg-transparent"
                        >
                          Log In
                        </Button>
                      </NavLink>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {/*........md and lg navbar start.........*/}

          {/*.........Mobile navbar start..........*/}
          <label className="btn bg-white hover:bg-white px-3 swap swap-rotate border-2 md:hidden">
            <input type="checkbox" onClick={() => setCheckbox(!checkbox)} />
            <svg
              className="swap-off"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          {checkbox && (
            <div className="absolute top-20 inset-x-4 z-10 md:hidden">
              <ul className="menu bg-base-100 p-5 shadow-lg rounded-box border-2 w-full gap-y-3">
                <li className="font-bold">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    to="/jobs"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Find a Job
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    to="/about"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li className="font-bold">
                  <NavLink
                    to="/contact"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Contact
                  </NavLink>
                </li>

                <div className="flex gap-2">
                  {accessToken && user?.email ? (
                    <NavLink
                      to={`/${user?.role}`}
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      className="btn btn-primary text-white  bg-[#fdb82c] hover:bg-transparent border-[#fdb82c] hover:border-primary hover:text-primary"
                    >
                      Dashboard
                    </NavLink>
                  ) : (
                    <>
                      <NavLink
                        to="/login"
                        className="btn btn-primary text-white  bg-[#fdb82c] hover:bg-transparent  border-[#fdb82c] hover:border-primary hover:text-primary"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/register"
                        className="btn btn-primary text-white  bg-[#fdb82c] hover:bg-transparent border-[#fdb82c] hover:border-primary hover:text-primary"
                      >
                        Signup
                      </NavLink>
                    </>
                  )}
                </div>
              </ul>
            </div>
          )}
          {/*.........Mobile navbar end............*/}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
