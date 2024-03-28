import React from "react";
import { Link } from "react-router-dom";

export default function CustomButton(props) {
  const { linkTo, active = true, children, label, className } = props;
  return (
    <div className=" hover:scale-95 transition-all duration-200">
      <Link
        className={`${
            active
            ? "bg-yellow-5 text-black "
            : "bg-richblack-800 text-white"
        } rounded-lg text-center text-[13px] px-6 py-4 font-semibold ${className} ${children?"flex items-center gap-3":""}`}
        to={linkTo}
      >
        {label?label:children}
      </Link>
    </div>
  );
}
