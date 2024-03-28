import React from "react";
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import HighlightText from "../Components/HighlightText";
import CustomButton from "../Components/CustomButton";
import Banner from '../assets/Images/banner.mp4'

export default function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className="mx-auto flex flex-col w-11/12 items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className="mx-auto mt-16 p-1 rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 group">
            <div className="flex gap-4 items-center rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an instructor</p>
              <FaArrowTrendUp />
            </div>
          </div>
        </Link>
        {/* heading  */}
        <div className="heading font-semibold text-4xl mt-8 text-center justify-center">
          Empower Your Future With <HighlightText text={"Coding Skill"} />
        </div>
        {/* sub-heading  */}
        <div className="w-[60%] justify-center text-center mt-4 max-md:w-[80%] text-richblack-300">
            <p>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
        </div>
        {/* buttons  */}
        <div className="flex gap-7 mt-8">
            <CustomButton linkTo={'/signup'}>Learn More</CustomButton>
            <CustomButton active={false}>Book a demo</CustomButton>
        </div>
        <div className="video shadow-blue-200 my-12 mx-3">
            <video muted loop autoPlay width="800">
                <source src={Banner} type="video/mp4" height={40}/>
            </video>
        </div>
      </div>

      {/* section 2 */}
      {/* section 3 */}
      {/* footer */}
    </div>
  );
}
