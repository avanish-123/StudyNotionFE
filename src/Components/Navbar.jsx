import React, { useState } from "react";
import logo from "../assets/Logo/Logo-Full-Light.png";
import smallLogo from "../assets/Logo/Logo-Small-Light.png";
import AuthButton from "./AuthButton";
import { Link, useNavigate } from "react-router-dom";
import { NavbarLinks } from "../data/navbar-links";
import { FaAngleDown } from "react-icons/fa";
import SubMenu from "./SubMenu";

export const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  function navbarClickHandler (element) {
    if(!Object.keys(element).includes('hasDropDown')){
      navigate(`${element.path}`)
    }
  }
  function navSubManuMouseEnter(element){
    if(Object.keys(element).includes('hasDropDown')){
      setVisible(true)
    }
  }
  function navSubManuMouseLeave(element){
    if(Object.keys(element).includes('hasDropDown')){
      setVisible(false)
    }
  }

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
                onClick={()=>navbarClickHandler(ele)}
                onMouseEnter={()=>navSubManuMouseEnter(ele)}
                onMouseLeave={()=>navSubManuMouseLeave(ele)}
                key={index}
                className="flex gap-[2px] py-2 cursor-pointer relative"
              >
                {ele.title}
                {ele.hasDropDown ? (
                  <div className="flex items-center">
                    <FaAngleDown />
                  </div>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
          <div className="absolute top-14 left-[35rem]">
            <SubMenu data={""} visible={visible} setVisible={setVisible} />
          </div>
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
