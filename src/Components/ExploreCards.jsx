import React from "react";
import { HiMiniUsers } from "react-icons/hi2";
import { BiSolidNetworkChart } from "react-icons/bi";

export default function ExploreCards(props) {
  const { data } = props;
  return (
    <div className="group border border-richblack-300 rounded-lg shadow-[10px_10px] shadow-white">
      <div className="w-[300px] rounded-lg h-[250px] group-hover:bg-yellow-5 bg-richblack-800 text-richblack-5">
        <div className=" px-5 h-[83%]">
          <div className="font-bold text-lg pt-5 pb-2 group-hover:text-richblack-800">
            {data?.heading}
          </div>
          <div className="text-sm font-light group-hover:text-richblack-800">
            {data?.description}
          </div>
          <br />
        </div>
        <div>
          <hr className="border-t-[1px] border-dashed border-richblack-400" />
          <div className="px-5 py-2 flex justify-between group-hover:text-richblack-800">
            <div className="flex gap-1 items-center">
              <HiMiniUsers />
              {data.level}
            </div>
            <div className="flex gap-1 items-center group-hover:text-richblack-800">
              <BiSolidNetworkChart />
              {data.lessonNumber} Lessons
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
