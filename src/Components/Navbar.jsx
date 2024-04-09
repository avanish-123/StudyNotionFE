import React, { useCallback, useEffect, useState } from "react";
import logo from "../assets/Logo/Logo-Full-Light.png";
import smallLogo from "../assets/Logo/Logo-Small-Light.png";
import AuthButton from "./AuthButton";
import { Link, useNavigate, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../data/navbar-links";
import { FaAngleDown } from "react-icons/fa";
import SubMenu from "./SubMenu";
import { useSelector } from "react-redux";
import { apiConnector } from "../Services/apiconnector";
import { category } from "../Services/apilist";
import toast from "react-hot-toast";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [courseCategories, setCourseCategories] = useState([]);
  const { token } = useSelector((state) => state.auth);
  function navbarClickHandler(element) {
    if (!Object.keys(element).includes("hasDropDown")) {
      navigate(`${element.path}`);
    }
  }

  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }

  const getCategories = useCallback(async () => {
    try {
      const result = await apiConnector("GET", category.CATEGORY_API);
      console.log(result.data);
      if (result?.data?.success === true) {
        setCourseCategories(result.data.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="border-b-[1px] border-b-richblack-400 h-12 w-full fixed bg-richblack-900 z-[100]">
      <div className="w-11/12 mx-auto h-full flex justify-between">
        <div className="image flex items-center h-full">
          <Link to={"/"}>
            <img className="max-md:hidden" src={logo} alt="" width={"60%"} />
            <img className="md:hidden" src={smallLogo} alt="" width={"60%"} />
          </Link>
        </div>
        <div className="text-white flex items-center justify-center max-sm:hidden">
          <ul className="flex items-center justify-center gap-4 text-sm">
            {NavbarLinks.map((ele, index) => (
              <li
                onClick={() => navbarClickHandler(ele)}
                key={index}
                className={`${
                  !ele.hasDropDown
                    ? matchRoute(ele?.path)
                      ? "text-yellow-25"
                      : "text-pure-greys-5"
                    : "group relative"
                } flex gap-[2px] py-2 cursor-pointer`}
              >
                {ele.title}
                {ele?.hasDropDown ? (
                  <div className="flex items-center">
                    <FaAngleDown />
                  </div>
                ) : (
                  ""
                )}
                {ele.hasDropDown && (
                  <div className="absolute hidden group-hover:block top-11 -left-14">
                    <SubMenu data={courseCategories} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {!token ? (
          <div className="flex items-center gap-2">
            <AuthButton
              label={"Login"}
              onclick={() => navigate("/login")}
            ></AuthButton>
            <AuthButton
              label={"Signup"}
              onclick={() => navigate("/signup")}
            ></AuthButton>
          </div>
        ) : (
          <div>
            <AuthButton label={"DashBoard"} />
            <AuthButton label={"Logout"} />
          </div>
        )}
      </div>
    </div>
  );
};
