import React from "react";

export default function CustomButton(props) {
  const {
    active = true,
    disabled,
    children,
    label,
    className,
    onclick,
    width = "",
  } = props;
  return (
    <div className=" hover:scale-95 transition-all duration-200">
      <button
        disabled={disabled}
        className={`${
          active & !disabled ? "bg-yellow-5 text-black " : "bg-richblack-800 text-white"
        } rounded-lg ${
          disabled ? "cursor-not-allowed text-white bg-richblack-500" : ""
        } text-center text-[13px] ${
          width === "full" ? "w-full" : "w-max"
        } px-6 py-4 font-semibold ${className} ${
          children ? "flex items-center gap-3" : ""
        }`}
        onClick={onclick}
      >
        {label ? label : children}
      </button>
    </div>
  );
}
