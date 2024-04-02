import React from "react";

export default function CustomButton(props) {
  const { active = true, children, label, className, onclick, width='' } = props;
  return (
    <div className=" hover:scale-95 transition-all duration-200">
      <div
        className={`${
            active
            ? "bg-yellow-5 text-black "
            : "bg-richblack-800 text-white"
        } rounded-lg text-center text-[13px] ${width==='full'?"":"w-max"} px-6 py-4 font-semibold ${className} ${children?"flex items-center gap-3":""}`}
        onClick={onclick}
      >
        {label?label:children}
      </div>
    </div>
  );
}
