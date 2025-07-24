// import React from "react";
// import Title from "../layouts/Title";

// const Resume = () => {
//   return (
//     <section id="resume" className="w-full py-20 border-b-[1px] border-black">
//       <div className="flex justify-center items-center text-center">
//         <Title title="2+ YEARS OF EXPERIENCE" des="MY RESUME" />
//       </div>
//       <div>
//         <ul className="grid grid-cols-4">
//           <li className="resumeLi">Education</li>
//           <li className="resumeLi">Professional Skills</li>
//           <li className="resumeLi">Expperience</li>
//           <li className="resumeLi">Achievements</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Resume;
import React from "react";
import Title from "../layouts/Title";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 lg:px-12 border-b-2 border-black">
      <div className="flex justify-center mb-10">
        <Title title="2+ YEARS OF EXPERIENCE" des="MY RESUME" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="resumeCard">
          <h2 className="text-lg font-bold text-gray-300">Education</h2>
          <p className="text-sm text-gray-400">
            Bachelor's Degree in Computer Science - University of Example
          </p>
        </div>
        <div className="resumeCard">
          <h2 className="text-lg font-bold text-gray-300">Professional Skills</h2>
          <ul className="list-disc list-inside text-sm text-gray-400">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </div>
        <div className="resumeCard">
          <h2 className="text-lg font-bold text-gray-300">Experience</h2>
          <p className="text-sm text-gray-400">
            Frontend Developer at XYZ Company (2020 - Present)
          </p>
          <p className="text-sm text-gray-400">
            Software Engineer Intern at ABC Corporation (2018 - 2019)
          </p>
        </div>
        <div className="resumeCard">
          <h2 className="text-lg font-bold text-gray-300">Achievements</h2>
          <ul className="list-disc list-inside text-sm text-gray-400">
            <li>Developed a responsive web application using React.js</li>
            <li>Received Employee of the Month Award at XYZ Company</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;

