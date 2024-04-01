import React from "react";
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import HighlightText from "../Components/HighlightText";
import CustomButton from "../Components/CustomButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "./Components/CodeBlocks";
import Timeline from "./Components/Timeline";
import instructorImage from "../assets/Images/Instructor.png";
import LearningLanguage from "./Components/LearningLanguage";
import Review from "./Components/Review";
import ToogleCards from "./Components/ToogleCards";

export default function Home() {
  const codeBlockText = `<!DOCTYPE html>\n<html>\nhead><>Example</\ntitle><linkrel="stylesheet"\nhref="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</\na><ahref="two/">Two</a>\n<ahref="three">\nThree</a>nav>`;
  const reviews = [
    {
      name: "Himanshu Dubey",
      email: "avanishpandey022@gmail.com",
      review: "Coordingly of activities  ",
      stars: 4,
    },
    {
      name: "Shivam Dubey",
      email: "avanishpandey022@gmail.com",
      review: "Coordingly of activities  ",
      stars: 5,
    },
    {
      name: "Shivam Dubey",
      email: "avanishpandey022@gmail.com",
      review: "Nice ",
      stars: 5,
    },
    {
      name: "Shivam Singh",
      email: "avanishpandey022@gmail.com",
      review: "Coordingly of activities  ",
      stars: 3,
    },
  ];
  return (
    <div className="max-w-[1326px] mx-auto">
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
        <div className="video my-12 mx-3 ">
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
              codeBlock={codeBlockText}
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
              codeBlock={codeBlockText}
              codeColor={"text-yellow-25"}
              position={"flex-row-reverse"}
            />
          </div>
        </div>
      </div>
      {/* toogle cards */}
      <div className="w-10/12 mx-auto">
        <ToogleCards />
      </div>

      {/* section 3 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="w-10/12 mx-auto">
          <div className="bg-image-button h-[300px]">
            <div className=" h-[inherit] flex justify-center max-sm:flex-col max-sm:gap-6 items-center gap-3">
              <CustomButton linkTo={""}>
                Explore Full Catalog <FaArrowTrendUp />
              </CustomButton>
              <CustomButton active={false} linkTo={""} label={"Learn More"} />
            </div>
          </div>
          <div className="flex max-sm:flex-col mt-10 gap-6 h-max">
            <div className="w-[50%] text-4xl font-semibold max-sm:w-[100%] max-sm:text-center">
              Get the skills you need for a{" "}
              <HighlightText text={"Job that is in demand"} />
            </div>
            <div className="w-[50%] max-sm:w-[100%] max-sm:text-center">
              <p>
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>
              <br />
              <br className="max-sm:hidden" />
              <CustomButton label={"Learn More"} linkTo={""} />
              <div>&nbsp;</div>
            </div>
          </div>
          {/* //section 3 timeline and learningLanguage */}
          <Timeline />
          <LearningLanguage />
        </div>
      </div>
      {/* instructor  */}
      <div className="become-instructor w-10/12 mx-auto pt-6">
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
      {/* review  */}
      <div className="review w-10/12 mx-auto">
        <Review reviews={reviews} />
      </div>
      {/* footer */}
    </div>
  );
}
