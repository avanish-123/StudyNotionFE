import React from "react";
import { Link } from "react-router-dom";

export default function CustomButton(props) {
  const { linkTo, active = true, children } = props;
  return (
    <div className=" hover:scale-95 transition-all duration-200">
      <Link
        className={`${
            active
            ? "bg-yellow-5 text-black "
            : "bg-richblack-800 text-white"
        } rounded-lg text-center text-[13px] px-6 py-3 font-semibold`}
        to={linkTo}
      >
        {children}
      </Link>
    </div>
  );
}
