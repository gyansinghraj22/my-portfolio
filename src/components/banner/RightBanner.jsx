
import React from 'react';
import { bannerImg } from '../../Assets/index'

const RightBanner = () => {
  return (
    <div className="w-full h-full md:w-full pb-5 flex  overflow-auto justify-center items-center relative flex-wrap ">
    
      <div className="bottom-0 sm:h-[365px] sm:w-[200px] left-0 md:w-[500px] md:h-[500px] flex justify-center items-center  ">
      <img
        className="w-fit  h-fit"
        src={bannerImg}
      
        alt="bannerImg"
      />
      </div>
    </div>
  );
};

export default RightBanner;
