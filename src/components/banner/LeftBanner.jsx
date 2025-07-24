// import React from "react";
// import { useTypewriter } from "react-simple-typewriter";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
// import { SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";
// import resume from "./../../Assets/images/resume.png";

// const LeftBanner = () => {
//   const [proText] = useTypewriter({
//     words: [
//       "Profession Coder.",
//       "MERN Developer",
//       "Flutter Developer",
//       "Django Developer",
//     ],
//     loop: true,
//     typeSpeed: 20,
//     deleteSpeed: 10,
//     delaySpeed: 2000,
//   });
//   return (
//     <div className="w-1/2 flex flex-col gap-5">
//       <div className="flex flex-col gap-5">
//         <h4 className="text-4xl md:text-2xl font-normal">WELCOME TO MY WORLD</h4>
//         <h1 className="text-6xl font-bold text-white">
//           Hi, I'm{" "}
//           <span className="text-designColor capitalise">Gyan Singh</span>
//         </h1>
//         <h2 className="text-5xl font-bold text-white"> a {proText} </h2>{" "}
//         <p className=" text-base font-bodyFont leading-6 tracking-wide">
//           I use animation a three dimension by which to simplify experiences and
//           kuiding thro each and every interaction. I'm not adding motion just to
//           spruce things up. but doing it in ways that.
//         </p>
//       </div>
//       <div className="flex flex-col pb-10 gap-5">
//         <div className="flex flex-col gap-5">
//           <h2 className="text-base uppercase font-titleFont mb-4 mt-6">
//             Find me in
//           </h2>

//           <div className="flex gap-3">
//             <span className="bannerIcon">
//               <FaFacebookF />
//             </span>
//             <span className="bannerIcon">
//               <FaTwitter />
//             </span>
//             <span className="bannerIcon">
//               <FaLinkedinIn />
//             </span>
//           </div>
//         </div>
//         <div className="flex  flex-col gap-5">
//           <h2 className="text-base uppercase font-titleFont mt-4 mb-4">
//             Best Skills on
//           </h2>
//           <div className="flex gap-3">
//             <span className="bannerIcon">
//               <FaReact />
//             </span>
//             <span className="bannerIcon">
//               <SiNextdotjs />
//             </span>
//             <span className="bannerIcon">
//               <SiTailwindcss />
//             </span>
//             <span className="bannerIcon">
//               <SiMongodb />
//             </span>
//             <span className="bannerIcon">
//               <SiMysql />
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col gap-1">
//         <p>Download CV</p>
//         <button className="flex  flex-row  rounded-lg border-b-gray bg-[#191b1e] hover:text-lightText hover:border-[1px]  hover:border-designColor border-transparent duration-300 space-between gap-2 h-auto w-[200px] mt-2 mb-2 p-2 text-[28px] bg-gray">
//           <p>Download</p> <img className="h-9 w-30" src={resume} alt="" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LeftBanner;
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiMongodb, SiMysql, SiFlutter, SiTailwindcss } from "react-icons/si";
import { DiPhp, DiAndroid } from "react-icons/di";
import resume from "../../Assets/images/cv.pdf";

const LeftBanner = () => {
  const [proText] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Nodejs Developer",
      "PHP developer",
      "Flutter Developer",
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 50,
    delaySpeed: 3000,
  });

  return (
    <div className="w-full md:w-11/12 flex flex-col gap-5 px-4 md:px-0">
      <div className="flex flex-col gap-5">
        <h6 className="text-4xl sm:text-xl md:text-2xl dark:text-white text-black font-normal">WELCOME TO MY WORLD</h6>
        <h1 className="text-6xl md:text-5xl sm:text-2xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Gyan Singh Rajbanshi</span>
        </h1>
        <h2 className="text-5xl sm:text-xl md:text-4xl font-bold text-white"> a {proText} </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-white md:text-base">
          I use animation and three-dimensional design to simplify experiences and guide
          through each interaction. I'm not just adding motion to spruce things up, but
          doing it in meaningful ways.
        </p>
      </div>
      <div className="flex flex-col pb-10 gap-5">
        <div className="flex flex-col gap-5">
          <h2 className="text-base uppercase font-titleFont mb-4 mt-6 text-white">
            Find me in
          </h2>
          <div className="flex  gap-1">
          <a href="https://www.facebook.com/GyanSingh4/" >
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          </a>

          <a href="https://www.linkedin.com/in/gyan-singh-rajbanshi-3b318322b/">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          </a>
          </div>
        </div>
        <div className="flex  flex-col gap-5">
          <h2 className="text-base uppercase font-titleFont mt-4 mb-4 text-white">
            Best Skills on
          </h2>
          <div className=" flex-wrap gap-5 lg:justify-center md:justify-center w-full h-fit">
            <span className="bannerIcon ml-3 mb-3 outline">
              <FaReact />
            </span>
            <span className="bannerIcon ml-3 outline">
              <SiFlutter />
            </span>
            <span className="bannerIcon ml-3 outline">
              <DiPhp />
            </span>
            <span className="bannerIcon ml-3 outline">
              <DiAndroid />
            </span>
            <span className="bannerIcon ml-3 outline">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon ml-3 mb-3 outline">
              <SiMongodb />
            </span>
            <span className="bannerIcon ml-3 outline">
              <SiMysql />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
      <p className="text-white">Download CV</p>
      <a href={resume} download>
        <button className="flex items-center outline rounded-lg border-b-gray bg-white hover:text-lightText hover:border-[1px] hover:border-designColor border-transparent duration-300 space-between gap-2 h-auto w-[200px] mt-2 mb-2 p-2 text-[18px] md:text-[28px] bg-gray">
          <p className="text-center w-full">Download</p>
        </button>
      </a>
    </div>
    </div>
  );
};

export default LeftBanner;
