import React from "react";
import Logo1 from "../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../assets/TimeLineLogo/Logo4.svg";
import timlineImage from "../../assets/Images/TimelineImage.png";

export default function Timeline() {
  const timelineItems = [
    {
      logo: Logo1,
      heading: "LeaderShip",
      subHeading: "Fully committed to the success company",
    },
    {
      logo: Logo2,
      heading: "Responsibility",
      subHeading: "Students will always be our top priority",
    },
    {
      logo: Logo3,
      heading: "Flexibility",
      subHeading: "The ability to switch is an important skills",
    },
    {
      logo: Logo4,
      heading: "Solve the problem",
      subHeading: "Code your way to a solution",
    },
  ];
  return (
    <div className="my-10 flex">
      <div className="left w-[40%] max-md:w-[100%] flex flex-col my-auto gap-y-12 max-md:gap-y-5">
        {timelineItems.map((element, index) => (
          <>
            <div key={index} className="flex gap-2 ">
              <div className="bg-white shadow-md rounded-full flex justify-center items-center h-[50px] w-[50px]">
                <img src={element.logo} height={15} width={15} alt="" />
              </div>
              <div className="heading-SubHeading flex flex-col justify-center">
                <div className="Heading font-semibold">{element.heading}</div>
                <div className="subHeading text-xs">{element.subHeading}</div>
              </div>
            </div>
            {index !== timelineItems.length - 1 ? (
              <div className="w-[50px] max-md:w-[30px] max-md:ml-3 rotate-90 border-dashed border-t-[2px]"></div>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
      <div className="right w-[60%] max-md:hidden">
        <div className="relative">
          <img src={timlineImage} alt="TimelineImage" />
          <div className="rectangle flex translate-x-[14%] translate-y-[-50%] w-[70%] h-[100px] bg-caribbeangreen-700 absolute">
            <div className="left w-[50%] flex gap-3 justify-center items-center border-r-2 border-pure-greys-300 ">
              <div className="font-bold text-5xl text-white">10</div>
              <div className="text-caribbeangreen-100 text-sm">
                <div>Years</div>
                <div>Experience</div>
              </div>
            </div>
            <div className="right w-[50%] gap-3 flex bg-caribbeangreen-700 justify-center items-center">
              <div className="font-bold text-5xl text-white">250</div>
              <div className="text-caribbeangreen-100 text-sm ">
                <div>Types of</div>
                <div>courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
