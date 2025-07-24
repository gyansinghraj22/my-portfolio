import React from "react";

const Title = ({title,des}) => {
  return (
    <div className="flex pt-5 flex-col mb-8 gap-3 font-titleFont">
      <h3 className="text-2xl upppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-5xl text-gray-300 font-bold capitalize">{des}</h1>
    </div>
  );
};
export default Title;
