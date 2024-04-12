import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function TextField(props) {
  var {
    placeholder,
    value,
    classname = "",
    fieldType='text',
    required,
    label,
    disabled=false,
    onChangeHandler,
    onBlurHandler
  } = props;
  const [visible, setVisible] = useState(false);

  function onVisibleClick() {
    setVisible(!visible);
  }


  return (
    <div className="w-[100%] text-pure-greys-5">
      <div className="label text-sm">
        {label}
        {required && <span className="text-red-400 text-xs">*</span>}
      </div>
      <div className="relative w-[100%]">
        <input
          disabled={disabled}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          value={value}
          placeholder={placeholder}
          type={
            fieldType === "password"
              ? visible === true
                ? "text"
                : fieldType
              : fieldType
          }
          className={`bg-richblack-700 w-[100%] rounded-md pt-2 pb-2 pl-2 pr-7 border-b-2 outline-none ${classname}`}
        />
        {fieldType === "password" && (
          <div
            onClick={onVisibleClick}
            className="p-1 cursor-pointer rounded-full bg-richblack-400 w-min h-min absolute top-2 right-1"
          >
            {visible ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
      </div>
    </div>
  );
}
