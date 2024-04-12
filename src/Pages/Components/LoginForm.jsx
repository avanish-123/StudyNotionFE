import React, { useState } from "react";
import HighlightText from "../../Components/HighlightText";
import Tab from "../../Components/Tab";
import userType from "../../data/user-type";
import TextField from "../../Components/TextField";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";

export default function LoginForm() {
  const [userLoginType, setUserLoginType] = useState(userType[0]);
  const [state, setState] = useState({ email: "", password: "", userType: "" });
  const Navigate = useNavigate();
  function onChangeHandler(field = "", value = "") {
    setState({
      ...state,
      [field]: value.target.value,
    });
  }
  function onSubmitHandler() {
    state.userType = userLoginType.value;
    console.log(state);
  }
  const disabled = !state.email || !state.password;
  return (
    <div>
      <div className="p-2">
        <div className="text-2xl font-semibold">Welcome Back</div>
        <div className="text-xs py-2">
          Build skills for today, tomorrow, and beyond.{" "}
          <HighlightText text={" Education to future-proof your career."} />
        </div>
        <div className="form py-4">
          <div className="tab">
            <Tab
              data={userType}
              selectedValue={(element) => setUserLoginType(element)}
            />
          </div>
          <div className="py-6">
            <TextField
              fieldType={"email"}
              value={state.email}
              onChangeHandler={(value) => onChangeHandler("email", value)}
              required
              placeholder={"Enter your email address"}
              label={"Email Address"}
            />
          </div>
          <div>
            <TextField
              onChangeHandler={(value) => onChangeHandler("password", value)}
              value={state.password}
              label={"Password"}
              placeholder={"Enter your password"}
              required
              fieldType={"password"}
            />
            <p
              onClick={() => Navigate("/forgot-password")}
              className="cursor-pointer text-sm text-end text-blue-200"
            >
              Forgot Password
            </p>
          </div>
          <div className="py-6">
            <CustomButton
              disabled={disabled}
              onclick={onSubmitHandler}
              width={"full"}
              label={"Signin"}
            />
          </div>
        </div>
        <div className="text-center text-sm">
          Don't have account?{" "}
          <span className="text-blue-100">
            <Link to={"/signup"}>Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
