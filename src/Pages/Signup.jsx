import React from "react";
import SignupForm from "./Components/SignupForm";
import SignupImage from "../assets/Images/signup.webp"
import frame from '../assets/Images/frame.png'

export default function Signup() {
  return (
    <div className="text-white w-10/12 mx-auto">
      <div className="flex p-2 gap-2 max-md:flex-col-reverse">
        <div className="w-[50%] p-6 max-md:w-[100%] flex justify-center items-center">
          <div className="image relative">
            <img className="" src={frame} alt="" />
            <img src={SignupImage} alt="signupImage" className="absolute bottom-5 right-5" />
          </div>
        </div>
        <div className="w-[50%] max-md:w-[100%]">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
