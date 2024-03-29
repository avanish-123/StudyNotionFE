import React from "react";
import HighlightText from "../../Components/HighlightText";
import img1 from '../../assets/Images/Compare_with_others.svg'
import img2 from '../../assets/Images/Know_your_progress.svg'
import img3 from '../../assets/Images/Plan_your_lessons.svg'
import CustomButton from "../../Components/CustomButton";

export default function LearningLanguage() {
  return (
    <div>
      <div className="my-20">
        <div className="text-3xl font-semibold text-center">
          Your swiss knife for <HighlightText text={"learning any language"} />
        </div>
        <div className="text-center w-[60%] pt-3 max-md:w-[90%] mx-auto text-sm">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex justify-center items-center">
            <img src={img2} alt="" width={300} className="-mr-20" />
            <img src={img1} width={300} alt="" />
            <img src={img3} width={300} alt="" className="-ml-20" />
        </div>
        <div className="button flex items-center justify-center mt-6">
            <CustomButton label={"Learn More"} linkTo={'/signup'}/>
        </div>
      </div>
    </div>
  );
}
