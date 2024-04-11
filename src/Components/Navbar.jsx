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
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { ProfileDropDown, hamburgerDropDown } from "../Constants/Constants";
import { BsCart4 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [courseCategories, setCourseCategories] = useState([]);
  const [hamburgerOpened, setHamburgerOpened] = useState(false);
  const { token } = useSelector((state) => state.auth);
  // const token = true;
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
      }else{
        toast.error(result?.data?.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  useEffect(() => {
    getCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  <div className="absolute hidden group-hover:block top-9 -left-[60px]">
                    <SubMenu data={courseCategories} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-sm:hidden flex">
          {!token && (
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
          )}
        </div>
        {/* hamburder */}
        {token ? (
          <div className="flex justify-center items-center">
            <div className="flex gap-3 relative">
              <div className="flex justify-center items-center">
                <IoSearch className="text-xl" color="white" />
              </div>
              <div className="relative flex justify-center items-center">
                <BsCart4 color="white" className="text-xl" />
                <div className="count text-[8px] absolute text-white top-0 right-1">
                  3
                </div>
              </div>
              <div
                onClick={() => setHamburgerOpened(!hamburgerOpened)}
                className={`avatar w-8 h-8 rounded-full bg-red-900 ${hamburgerOpened?"border-[1px] border-pure-greys-5":""} `}
              ></div>
              {hamburgerOpened && (
                <div className="absolute top-12 -right-3">
                  <SubMenu data={ProfileDropDown} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="sm:hidden text-white flex justify-center items-center text-2xl">
            <div
              className="relative"
              onClick={() => setHamburgerOpened(!hamburgerOpened)}
            >
              <TfiAngleDoubleLeft
                className={`${
                  hamburgerOpened
                    ? "-rotate-90 transition-all duration-200"
                    : "rotate-0 transition-all duration-200"
                }`}
              />
              {hamburgerOpened && (
                <div className="absolute top-9 -right-3">
                  <SubMenu data={hamburgerDropDown} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
