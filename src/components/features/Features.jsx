import React from "react";
import Title from "../layouts/Title";
import Card from "../layouts/Card";
import { FaBars, FaMobile, FaGlobe } from "react-icons/fa";

const Features = () => {
  return (
    <section id="features" className="py-12 px-4 md:px-8 lg:px-12">

      <Title title="Features" des="What I Do" />
      <div className="grid sm:grid-cols-1 my-0  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div>
        <Card
          icon={<FaBars className="text-4xl animate-pulse text-designColor" />}
          title="Web Development"
          des="Crafting responsive and dynamic web applications that deliver seamless user experiences, leveraging modern frameworks and technologies for optimal performance."
          />
          </div>

          <div> 
  <Card
    icon={<FaMobile className="text-4xl animate-ping-slow  text-designColor" />}
   title="Mobile App Development"
    des="Building intuitive mobile applications that engage users on the go, with a focus on performance, usability, and native functionality across iOS and Android platforms"
  />
</div>

     
          <div className="group ">
        <Card 
          icon={<FaGlobe className="text-4xl text-designColor  animate-bounce" />}
          title="UI/UX Design"
          des="Designing group-hover:scale-105 user-centric interfaces that combine aesthetics and functionality, ensuring an engaging and intuitive experience through comprehensive research and prototyping"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
