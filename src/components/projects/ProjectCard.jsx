import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-scroll";
import { bannerImg } from '../../Assets/index'

const ProjectCard = ({ title, des, src }) => {
  return (
    // <div className=" w-80 mb-10 justify-center items-center  xl:px-2 p2-8 md:py-2 rounded-lg
    //  shadow-ShadowOne flex-row flex  bg-gradient-to-r
    //   from-bodyColor to-[#202327] group hover:bg-gradient-to-b
    //    hover:from-gray-900 hover:gray-900 transition-colors duration-100">
    //   <div className=" child w-36 flex-col  h-fit overflow-auto rounded-lg bg-white pl-20">
    //     <img
    //       className="w-auto ml-16 items-center mx-0 h-40 md:h-40  lg:h-40 object-cover group-hover:scale-110 duration-300 cursor-pointer rounded-lg"
    //       src={bannerImg}
    //       alt="Project "
    //     />
    //     <div className="w-full mt-6 md:mt-8 flex flex-col gap-4">
    //       <div className="flex items-center justify-between">
    //         <h3 className="text-designColor font-medium text-lg md:text-xl lg:text-2xl">
    //           {title}
    //         </h3>
    //         <div className="flex gap-4">
    //           <Link to="google.com" className="text-2xl md:text-3xl lg:text-4xl w-10 h-10 rounded-full bg-black flex justify-center items-center text-gray-400 hover:text-designColor duration-300">
    //             <FaGlobe />
    //           </Link>
    //           <Link to="google.com" className="text-2xl md:text-3xl lg:text-4xl w-10 h-10 rounded-full bg-black flex justify-center items-center text-gray-400 hover:text-designColor duration-300">
    //             <BsGithub />
    //           </Link>
    //         </div>
    //       </div>
    //       <p className="text-lg  md:text-base lg:text-lg text-gray-950 tracking-wide leading-relaxed hover:text-gray-100 duration-300">
    //         {des}
    //       </p>
    //     </div>
    //   </div>
    // </div>
        // <div className="w-72 max-w-80  max-h-72   mb-10 xl:px-2 py-2 md:py-2 rounded-lg shadow-ShadowOne flex flex-row justify-center items-center bg-gradient-to-r from-bodyColor to-[#202327] group   hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-100">

<div className="w-72 h-auto mb-10 xl:px-2 py-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-md hover:shadow-gray-100 bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900">

  <div className="  group child w-60 sm:mx-auto md:min-h-[300px] lg:min-h-[340px]  flex flex-col  sm:min-h-280  rounded-lg ">
    <img
      className="w-auto items-center mx-auto h-40 object-cover group-hover:scale-110 duration-300 cursor-pointer rounded-lg"
      src={bannerImg}
      alt="Project "
    />
    <div className="w-full mt-6 md:mt-8 flex flex-col gap-4">
      <div className="flex sm:flex-col lg:flex-row md:flex-row items-center justify-between">
        <h3 className="text-designColor font-medium text-lg md:text-xl lg:text-2xl">
          {title}
        </h3>
      

<div className="flex gap-4">
  <Link
    href=""
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl md:text-3xl  hover:scale-150 lg:text-4xl w-10 h-10 rounded-full bg-black flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
  >
    <FaGlobe />
  </Link>
  <a
    href="https://github.com/ohmprakashganesh/HRMS"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl md:text-3xl hover:scale-150 lg:text-4xl w-10 h-10 rounded-full bg-black flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
  >
    <BsGithub />
  </a>
</div>

      </div>
      < details className="group-hover:block w-11/12 mx-auto">
      <p className="text-lg   md:text-white lg:text-lg  tracking-wide leading-relaxed  duration-300">
        {des}
      </p>
      </ details>

      
    </div>
  </div>
</div>

  );
};

export default ProjectCard;
