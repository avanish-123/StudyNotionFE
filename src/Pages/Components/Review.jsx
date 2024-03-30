import React from "react";
import ReviewBox from "../../Components/ReviewBox";
import HighlightText from "../../Components/HighlightText";

export default function Review(props) {
  const { reviews } = props;

  return (
    <div className="py-5">
      <div className="text-white font-semiboldW text-4xl text-center">
        <HighlightText text={"Reveiw"} /> from other learners
      </div>
      <div className="flex flex-wrap gap-2 justify-left max-md:justify-center pt-6">
        {reviews.map((e, i) => (
          <div key={i} className="review min-w-[30%]">
            <ReviewBox review={e}></ReviewBox>
          </div>
        ))}
      </div>
    </div>
  );
}
