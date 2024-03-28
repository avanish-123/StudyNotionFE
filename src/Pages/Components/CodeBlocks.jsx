import React from "react";
import CustomButton from "../../Components/CustomButton";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

export default function CodeBlocks(props) {
  const {
    position,
    heading,
    subheading,
    buttonOneData,
    buttonTwoData,
    codeBlock,
    codeColor,
  } = props;
  return (
    <div className={`flex ${position} max-md:flex-col`}>
      <div className="flex flex-col gap-8 w-[50%] max-md:w-fit m-5 ">
        <div className="text-white font-bold text-3xl">{heading}</div>
        <div className="subheading text-richblack-300 font-bold">
          <p>{subheading}</p>
        </div>
        <div className="buttons flex gap-4">
          <CustomButton linkTo={buttonOneData.linkTo}>
            {buttonOneData.label} <FaArrowTrendUp />
          </CustomButton>
          <CustomButton active={false} linkTo={buttonTwoData.linkTo}>
            {buttonTwoData.label}
          </CustomButton>
        </div>
      </div>
      {/* codeblock  */}
      <div className="w-[50%] max-md:w-fit m-5 gap-2 flex">
        {/* HW add bg gradient  */}
        <div>
          {codeBlock.split("\n").map((e, i) => (
            <div className="count w-[10%] font-inter font-semibold text-richblack-400">
              <p>{i + 1}</p>
            </div>
          ))}
        </div>
        <div
          className={`code w-[90%] gap-2 font-semibold font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            omitDeletionAnimation={true}
            repeat={Infinity}
            sequence={[codeBlock, 5000, ""]}
            cursor={true}
            style={{ display: "block", whiteSpace: "pre-line" }}
          />
        </div>
      </div>
    </div>
  );
}
