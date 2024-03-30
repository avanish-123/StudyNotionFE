import React from "react";
import { FaStar } from "react-icons/fa6";

export default function ReviewBox(props) {
  const { review } = props;
  let maxStar = [1, 2, 3, 4, 5];
  return (
    <div className="bg-richblue-200 text-white p-4 rounded-lg">
      <div className="image-name flex gap-2">
        <div className="review-img rounded-full w-[50px] h-[50px]"></div>
        <div className="flex justify-center flex-col">
          <div className="name">{review?.name}</div>
          <div className="email text-sm font-light">{review?.email}</div>
        </div>
      </div>
      <div className="reveiwText pt-4">
        <div>{review?.review}</div>
      </div>
      <div className="flex gap-1">
        {maxStar.map((e, i) => (
          <div
            className={`stars ${
              review.stars >= e ? "text-yellow-50" : "text-pure-greys-400"
            }`}
          >
            <FaStar></FaStar>
          </div>
        ))}
      </div>
    </div>
  );
}
