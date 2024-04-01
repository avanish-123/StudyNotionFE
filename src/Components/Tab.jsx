import React, { useState } from "react";

export default function Tab(props) {
  const { HomePageExplore, onclickOnTab } = props;
  const [currentTab, setCurrentTab] = useState(HomePageExplore[0].name);
  const setTab = (element) => {
    setCurrentTab(element.name);
    onclickOnTab(element);
  };
  return (
  <div className="">
      <div className="flex gap-2 px-2 py-1 rounded-full bg-richblack-800 border border-richblack-100">
        {HomePageExplore.map((element, index) => (
          <div
            key={index}
            onClick={() => setTab(element)}
            className={`text-sm flex justify-center items-center ${
              currentTab === element.name
                ? "bg-richblack-900 text-richblack-5"
                : "text-richblack-100"
            } rounded-full px-3 py-1
            hover:bg-richblack-600 hover:text-richblack-50`}
          >
            {element.name}
          </div>
        ))}
      </div>
    </div>
  );
}
