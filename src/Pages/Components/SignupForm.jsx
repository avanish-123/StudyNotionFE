import React, { useState } from "react";
import HighlightText from "../../Components/HighlightText";
import Tab from "../../Components/Tab";
import userType from "../../data/user-type";
import TextField from "../../Components/TextField";
import CustomButton from "../../Components/CustomButton";

export default function SignupForm() {
  const [userSignupType, setUserSignupinType] = useState(userType[0]);
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
            <Tab data={userType} selectedValue={setUserSignupinType} />
          </div>
          <div className="first-last-name gap-3 flex max-md:flex-col py-6">
            <div className="w-[50%] max-md:w-full">
              <TextField
                className="w-full"
                label={"First Name"}
                required
                placeholder={"First Name"}
              />
            </div>
            <div className="w-[50%] max-md:w-full">
              <TextField
                label={"Last Name"}
                required
                placeholder={"Last Name"}
              />
            </div>
          </div>
          <div className="email w-[100%]">
            <TextField
              label={"email"}
              fieldType={"email"}
              placeholder={"Last Name"}
              required
            />
          </div>
          <div className="flex max-md:flex-col gap-3 py-6">
            <div className="create-password">
              <TextField
                placeholder={"Create password"}
                required
                label={"Create Password"}
                fieldType={'password'}
              />
            </div>
            <div className="confirm-password">
              <TextField
                required
                placeholder={"Confirm Password"}
                label={"Confirm Password"}
                fieldType={'password'}
              />
            </div>
          </div>
          <div className="py-4">
            <CustomButton onclick={''} width={'full'} label={'Signup'}/>
          </div>
        </div>
      </div>
    </div>
  );
}
