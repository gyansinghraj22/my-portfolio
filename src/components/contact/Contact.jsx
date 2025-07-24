import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <>
        <section  id="contact" className=" flex flex-col border-b border-black">
      <div className="text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>

      <div className="grid w-full lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-rows-2 sm:grid-flow-col" >
        <div className="from-[#1e2024] to-[#23272b] rounded-lg shadow-2xl ">
          <ContactLeft />
        </div>
        <div className="bg-orange-700 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-2xl ">
          <ContactRight />
        </div>
      </div>

    </section>
    </>
  );
};

export default Contact;
