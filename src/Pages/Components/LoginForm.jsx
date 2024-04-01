import React, { useState } from "react";
import HighlightText from "../../Components/HighlightText";
import Tab from "../../Components/Tab";
import userType from "../../data/user-type";
import TextField from "../../Components/TextField";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Components/CustomButton";

export default function LoginForm() {
  const [userLoginType, setUserLoginType] = useState(userType[0]);
  const Navigate = useNavigate();
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
            <Tab data={userType} selectedValue={setUserLoginType} />
          </div>
          <div className="py-6">
            <TextField
              required
              placeholder={"Enter your email address"}
              label={"Email Address"}
            />
          </div>
          <div>
            <TextField
              label={"Password"}
              placeholder={"Enter your password"}
              required
            />
            <p
              onClick={() => Navigate("/forgot-password")}
              className="cursor-pointer text-sm text-end text-blue-200"
            >
              Forgot Password
            </p>
          </div>
          <div className="py-6">
            <CustomButton onclick={''} width={'full'} label={'Signin'} />
          </div>
        </div>
      </div>
    </div>
  );
}
