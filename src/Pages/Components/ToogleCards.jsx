import React, { useState } from "react";
import HighlightText from "../../Components/HighlightText";
import { HomePageExplore } from "../../data/homepage-explore";
import Tab from "../../Components/Tab";
import ExploreCards from "../../Components/ExploreCards";

export default function ToogleCards() {
  const [cards, setCard] = useState(HomePageExplore[0].courses);
  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <div className="heading text-white text-4xl font-semibold">
          Unlock the <HighlightText text={"Power of Code"} />
        </div>
        <div className="text-richblack-300 text-sm">
          Learn to Build Anything You Can Imagine
        </div>
        <div className="">
            <Tab
            selectedValue={(element) => setCard(element.courses)}
            data={HomePageExplore}
            />
        </div>
        <div className="flex gap-6 flex-wrap max-md:justify-center pt-4 pb-10">
          {cards.map((element, index) => (
            <ExploreCards data={element} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
