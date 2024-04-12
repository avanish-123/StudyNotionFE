import React, { useState } from "react";
import TextField from "../Components/TextField";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { getResetPasswordToken } from "../Services/Operations/authApi";
import { useDispatch } from "react-redux";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch()
  const buttonDisabled = !email;

  function onChangeHandler(event) {
    setEmail(event.target.value);
  }
  function submitHandler() {
    dispatch(getResetPasswordToken(email, setEmailSent))
  }
  return (
    <div className="w-11/12 mx-auto h-[80vh] flex justify-center items-center">
      <div className="w-96 text-pure-greys-5">
        <div className="reset-text text-3xl font-bold text-pure-greys-5">
          {!emailSent ? "Reset your password" : "Check Your Email"}
        </div>
        <div className="text-sm text-pure-greys-200 my-2">
          {!emailSent
            ? `Have no fear. We'll email you instructions to reset your password. If
          you dont have access to your email we can try account recovery`
            : `We have sent you an email on ${email}`}
        </div>
        <div className="my-4">
          {!emailSent ? (
            <TextField
              fieldType={"email"}
              placeholder={"Enter your email"}
              label={"Email Address"}
              required
              value={email}
              onChangeHandler={onChangeHandler}
            />
          ) : (
            ""
          )}
          <div className="button my-4">
            {!emailSent ? (
              <div>
                <CustomButton
                  width={"full"}
                  disabled={buttonDisabled}
                  label={"Reset Password"}
                  onclick={submitHandler}
                />
                <div className="back-to-login py-2 ">
                  <Link className="flex items-center hover:text-blue-100" to={"/login"}>
                    <FaAngleLeft />
                    Back to login
                  </Link>
                </div>
              </div>
            ) : (
              <CustomButton width={"full"} label={"Resend Email"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
