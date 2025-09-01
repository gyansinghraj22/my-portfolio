// import React from 'react'
// import Title from '../layouts/Title'
// import ProjectCard from './ProjectCard'
// import {projectOne} from '../../Assets/index'

// const Projects = () => {
//   return (
//    <section className='p-5' id='projects'>
//       <div className='flex  justify-center text-center'>
//       <Title title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK' des="My Projects"/>
//       </div>
//       <div className='grid px-20 grid-cols-3 gap-10'>
//         <ProjectCard title="SOCIAL MEDIA CLONE" des="Leremo sodsdakjf akdfkaj a uick brown fox jump over the lazy ddog"  src={projectOne} />
//         <ProjectCard/>
//         <ProjectCard/>
//         <ProjectCard/>
//         <ProjectCard/>
//         <ProjectCard/>
//       </div>
//    </section>
//   )
// }
// export default Projects;
import React from 'react';
import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
// import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from '../../Assets/index'; // Import your project images

const Projects = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-12" id="projects">
      <div className="flex justify-center mb-10 text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="flex items-center justify-center w-11/12  mx-auto">
  <div className="flex  flex-wrap gap-5 items-center justify-center w-full my-auto">
   
      {/* <div className="grid grid-cols-4 mx-auto w-11/12  xl:grid-cols-5 lg:grid-cols-4 gap-x-2 md:grid-cols-3 sm:grid-cols-2 "> */}
        <ProjectCard title="Smart Life Tracker" des="It is a project in flutter featuring the record of expenses, notes and todo."  />
        <ProjectCard title="MICROSERVICES & JUNIT" des="created the microservice and testing using JUnit "  />
        <ProjectCard title="BLOG" des="this project contains the backend logic and REST API built using spring boot "  />
        <ProjectCard title="PROJECT FOUR" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida condimentum purus, vel ullamcorper lectus lacinia in."  />
        <ProjectCard title="PROJECT FIVE" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida condimentum purus, vel ullamcorper lectus lacinia in."  />
        <ProjectCard title="PROJECT SIX" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida condimentum purus, vel ullamcorper lectus lacinia in."  />
      </div>
      </div>
    </section>
  );
};

export default Projects;
