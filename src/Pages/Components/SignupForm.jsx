import React, { useState } from "react";
import HighlightText from "../../Components/HighlightText";
import Tab from "../../Components/Tab";
import userType from "../../data/user-type";
import TextField from "../../Components/TextField";
import CustomButton from "../../Components/CustomButton";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const [userSignupType, setUserSignupType] = useState(userType[0]);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
    userType: userType[0].value,
  });
  function onChangeHandler(field = "", value = null) {
    setState({
      ...state,
      [field]: value.target.value,
    });
  }

  function submitHandler() {
    state.userType = userSignupType;
    console.log(state);
  }
  const disabled =
    !state.firstName ||
    !state.lastName ||
    !state.email ||
    !state.createPassword ||
    !state.confirmPassword ||
    state.createPassword !== state.confirmPassword;
  return (
    <div>
      <div className="p-2">
        <div className="text-2xl font-semibold">
          Join the millions learning to code with{" "}
          <HighlightText text={"StudyNotion"} /> for free
        </div>
        <div className="text-xs py-2">
          Build skills for today, tomorrow, and beyond.{" "}
          <HighlightText text={" Education to future-proof your career."} />
        </div>
        <div className="form py-4">
          <div className="tab">
            <Tab
              data={userType}
              selectedValue={(element) => setUserSignupType(element)}
            />
          </div>
          <div className="first-last-name gap-3 flex max-md:flex-col py-6">
            <div className="w-[50%] max-md:w-full">
              <TextField
                value={state.firstName}
                onChangeHandler={(value) => onChangeHandler("firstName", value)}
                className="w-full"
                label={"First Name"}
                required
                placeholder={"First Name"}
              />
            </div>
            <div className="w-[50%] max-md:w-full">
              <TextField
                value={state.lastName}
                onChangeHandler={(value) => onChangeHandler("lastName", value)}
                label={"Last Name"}
                required
                placeholder={"Last Name"}
              />
            </div>
          </div>
          <div className="email w-[100%]">
            <TextField
              value={state.email}
              onChangeHandler={(value) => onChangeHandler("email", value)}
              label={"email"}
              fieldType={"email"}
              placeholder={"Last Name"}
              required
            />
          </div>
          <div className="flex max-md:flex-col gap-3 py-6">
            <div className="create-password">
              <TextField
                value={state.createPassword}
                onChangeHandler={(value) =>
                  onChangeHandler("createPassword", value)
                }
                placeholder={"Create password"}
                required
                label={"Create Password"}
                fieldType={"password"}
              />
            </div>
            <div className="confirm-password">
              <TextField
                value={state.confirmPassword}
                onChangeHandler={(value) =>
                  onChangeHandler("confirmPassword", value)
                }
                required
                placeholder={"Confirm Password"}
                label={"Confirm Password"}
                fieldType={"password"}
              />
            </div>
          </div>
          <div className="py-4">
            <CustomButton
              disabled={disabled}
              onclick={submitHandler}
              width={"full"}
              label={"Signup"}
            />
          </div>
        </div>
        <div className="text-center text-sm">
          Already Have Account?{" "}
          <span className="text-blue-100">
            <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
