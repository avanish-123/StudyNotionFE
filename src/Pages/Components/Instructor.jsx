import React from 'react'
import HighlightText from '../../Components/HighlightText'
import CustomButton from '../../Components/CustomButton'
import { FaArrowTrendUp } from 'react-icons/fa6'
import instructorImage from "../../assets/Images/Instructor.png";

export default function Instructor() {
  return (
    <div className="become-instructor w-11/12 mx-auto pt-6">
    <div className="flex gap-6 max-md:flex-col py-6 px-4 max-md:outline outline-1 outline-richblue-200 rounded-lg">
      <div className="left-image w-[50%] max-md:w-[100%] flex justify-center items-center">
        <img src={instructorImage} alt="instructor" />
      </div>
      <div className=" w-[50%] max-md:w-[100%]">
        <div className="mx-14 max-md:mx-0 h-[100%] flex flex-col justify-center">
          <div className="right-text text-white flex flex-col text-left justify-center font-semibold text-4xl">
            Become an <HighlightText text={"Instructor"} />
          </div>
          <div className="text-xs font-thin text-white py-3">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you
            love.
          </div>
          <div className="button w-fit py-4">
            <CustomButton>
              Start Teaching Today <FaArrowTrendUp />
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
