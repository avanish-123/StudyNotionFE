import React from "react";
import logo from "../assets/Logo/Logo-Full-Light.png";
import smallLogo from "../assets/Logo/Logo-Small-Light.png";
import AuthButton from "./AuthButton";
import { Link, useNavigate } from "react-router-dom";
import { NavbarLinks } from "../data/navbar-links";
import { FaAngleDown } from "react-icons/fa";

export const Navbar = () => {
  const navigate = useNavigate();
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
            {NavbarLinks.map((element, index) => (
              <li key={index} className="flex gap-[2px]">
                {element.title}
                {element.hasDropDown ? (
                  <div className="flex items-center">
                    <FaAngleDown />
                  </div>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
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
      </div>
    </div>
  );
};
