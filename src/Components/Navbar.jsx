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
import toast from 'react-hot-toast'

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [courseCategories, setCoursecategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const { token } = useSelector((state) => state.auth);
  function navbarClickHandler(element) {
    if (!Object.keys(element).includes("hasDropDown")) {
      navigate(`${element.path}`);
    }
  }
  function navSubManuMouseEnter(element) {
    if (Object.keys(element).includes("hasDropDown")) {
      setVisible(true);
    }
  }
  function navSubManuMouseLeave(element) {
    setVisible(false);
  }

  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }

  const getCategories = useCallback(async () => {
    try {
      const result = await apiConnector("GET", category.CATEGORY_API);
      setCoursecategories(result.data.data);
    } catch (error) {
      toast.error(error.message)
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
          <ul
            onMouseLeave={() => navSubManuMouseLeave()}
            className="flex items-center justify-center gap-4 text-sm"
          >
            {NavbarLinks.map((ele, index) => (
              <li
                onClick={() => navbarClickHandler(ele)}
                onMouseEnter={() => navSubManuMouseEnter(ele)}
                key={index}
                className={`${
                  !ele.hasDropDown
                    ? matchRoute(ele?.path)
                      ? "text-yellow-25"
                      : "text-pure-greys-5"
                    : ""
                } flex gap-[2px] py-2 cursor-pointer relative`}
              >
                {ele.title}
                {ele?.hasDropDown ? (
                  <div className="flex items-center">
                    <FaAngleDown />
                  </div>
                ) : (
                  ""
                )}
              </li>
            ))}
            <div className="absolute top-14 left-[35rem]">
              <SubMenu
                data={courseCategories}
                visible={visible}
                setVisible={setVisible}
              />
            </div>
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
