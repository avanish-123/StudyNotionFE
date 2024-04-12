import React, { useState } from "react";
import TextField from "../Components/TextField";
import CustomButton from "../Components/CustomButton";
import { useDispatch } from "react-redux";
import { resetPassword } from "../Services/Operations/authApi";
import { useParams } from "react-router-dom";

export default function UpdatePassword() {
  const [state, setState] = useState({ newPassword: "", confirmNewPassword: "" });
  const dispatch = useDispatch()
  const param = useParams()
  let token = param.token
  console.log(token)
  const disabled =
    !state.newPassword ||
    !state.confirmNewPassword ||
    state.newPassword !== state.confirmNewPassword;

  function onChangeHandler(field = "", value = "") {
    setState({
      ...state,
      [field]: value.target.value,
    });
  }

  function clickHandler(){
    dispatch(resetPassword(token, state))
  }
  return (
    <div className="w-11/12 mx-auto text-pure-greys-5 h-[80vh] flex justify-center items-center">
      <div className="w-96">
        <div className="text-3xl font-bold">Choose new password</div>
        <div className="text-sm text-pure-greys-200">
          Almost done. Enter your new password and youre all set.
        </div>
        <div>
          <div className="py-4">
            <TextField
              onChangeHandler={(value) => onChangeHandler("newPassword", value)}
              fieldType={"password"}
              value={state.password}
              placeholder={"Enter new password"}
            />
          </div>
          <div>
            <TextField
              fieldType={"password"}
              onChangeHandler={(value) =>
                onChangeHandler("confirmNewPassword", value)
              }
              value={state.confirmPassword}
              placeholder={"Confirm new password"}
            />
          </div>
        </div>
        <div className="submit-button my-4">
          <CustomButton onclick={clickHandler} label={"Submit"} width={"full"} disabled={disabled} />
        </div>
      </div>
    </div>
  );
}
