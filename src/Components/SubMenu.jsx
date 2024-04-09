import React from "react";

export default function SubMenu(props) {
  const { data, visible, setVisible } = props;
  return (
    visible && (
      <>
        <div className="bg-pure-greys-5 w-36 h-max max-h-[70vh] overflow-auto relative rounded-xl">
          <div className="p-3 text-richblack-800 z-[3]">
            {data.map((ele, index) => (
              <div
                key={index}
                onClick={() => setVisible(false)}
                className="rounded-md hover:bg-pure-greys-600 hover:text-pure-greys-5 px-1"
              >
                {ele?.name}
              </div>
            ))}
          </div>
        </div>
        <div className="border-l-[20px] border-l-transparent border-r-transparent border-b-pure-greys-5 border-r-[20px] border-b-[30px] absolute -top-[22px] left-[100px]"></div>
      </>
    )
  );
}
