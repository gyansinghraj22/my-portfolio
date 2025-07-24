import React from 'react';
import { contactImg } from "../../Assets";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full h-full  p-8 md:p-10 rounded-lg shadow-ShadowOne flex flex-col md:justify-center">
      <img
        className="w-full h-64 md:h-auto object-cover rounded-lg"
        src={contactImg}
        alt="contactImg"
      />

      <div className="flex flex-col gap-4 mt-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Gyan Singh Rajbanshi</h3>
        <p className="text-lg md:text-base font-normal text-gray-400">
          Flutter  Developer
        </p>
        <p className="text-base md:text-sm text-gray-400 leading-relaxed">
          I am a dedicated app developer who loves creating user-friendly applications that make a difference. I work with various technologies to build strong and scalable solutions that meet the needs of my clients across different industries.        </p>
        <p className="text-base md:text-sm text-gray-400 flex items-center">
          Phone: <span className="text-lightText ml-1">+9779804978***</span>
        </p>
        <p className="text-base md:text-sm text-gray-400 flex items-center">
          Email: <span className="text-lightText ml-1">gyansinghrajbanshi4@gmail.com</span>
        </p>
        <div className="text-base md:text-sm uppercase font-titleFont mb-2">
          Find me in
        </div>
        <div className="flex gap-3">
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
    </div>
  );
};

export default ContactLeft;
