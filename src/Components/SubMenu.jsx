import React from "react";

export default function SubMenu(props) {
  const { data } = props;
  console.log(data)
  return (
        <><div className="bg-pure-greys-5 w-36 h-max max-h-[70vh] relative overflow-auto rounded-xl">
      <div className="p-4 text-richblack-800 z-[3]">
        {data.map((ele, index) => (
          <div
            key={index}
            className="rounded-md hover:bg-pure-greys-600 hover:text-pure-greys-5 px-1"
          >
            {ele.name}
          </div>
        ))}
      </div>
    </div><div className="w-6 h-6 bg-pure-greys-5 absolute -top-3 rounded-sm rotate-45 right-4"></div></>
  );
}
