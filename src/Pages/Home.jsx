import React from "react";
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import HighlightText from "../Components/HighlightText";
import CustomButton from "../Components/CustomButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "./Components/CodeBlocks";

export default function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className="mx-auto flex flex-col w-10/12 items-center text-white justify-between">
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
          <p>
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </p>
        </div>
        {/* buttons  */}
        <div className="flex gap-7 mt-8">
          <CustomButton linkTo={"/signup"} label={"Learn More"} />
          <CustomButton active={false} label={"Book a demo"} />
        </div>
        <div className="video shadow-lg my-12 mx-3 ">
          <video
            muted
            loop
            autoPlay
            width="800"
            className="shadow-[20px_20px] max-sm:shadow-none"
          >
            <source src={Banner} type="video/mp4" height={40} />
          </video>
        </div>

        {/* section 2 */}
        <div className="codeAndText mt-14">
          <div className="upper max-md:outline outline-1 rounded-lg outline-richblue-200 ">
            <CodeBlocks
              heading={
                <div className="text-4xl font-semibold">
                  Unlock your <HighlightText text={" coding potential "} /> with
                  our online courses.
                </div>
              }
              subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              buttonOneData={{ label: "Try it Yourself", linkTo: "/signup" }}
              buttonTwoData={{
                label: "Learn More",
                linkTo: "/login",
                active: false,
              }}
              codeBlock={`<!DOCTYPE html>\n<html>\nhead><>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</\na><ahref="two/">Two</a><ahref="three/">Three\n</a>nav>`}
              codeColor={"text-yellow-25"}
            />
          </div>

          
          <div className="lower mt-16">
            <CodeBlocks
              heading={
                <div className="text-4xl font-semibold">
                  Start
                  <HighlightText text={" coding in seconds "} />
                </div>
              }
              subheading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              buttonOneData={{ label: "Continue Lesson", linkTo: "/signup" }}
              buttonTwoData={{
                label: "Learn More",
                linkTo: "/login",
                active: false,
              }}
              codeBlock={`<!DOCTYPE html>\n<html>\nhead><>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</\na><ahref="two/">Two</a><ahref="three/">Three\n</a>nav>`}
              codeColor={"text-yellow-25"}
              position={"flex-row-reverse"}
            />
          </div>
        </div>

        {/* section 3 */}
        {/* footer */}
      </div>
    </div>
  );
}
