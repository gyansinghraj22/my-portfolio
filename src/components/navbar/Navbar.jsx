import { Link } from "react-scroll";
import { navLinksData } from "../../constants";
import { MdDarkMode, MdLightMode } from "react-icons/md";


import { logo } from '../../Assets/index'
import { useState } from "react";

const Navbar = () => {

  const[isDark, setIsDark]=useState(true);
   const toggleDarkMode=()=>{
    setIsDark(isDark)
    const mainDiv=document.getElementById("main");
    if(mainDiv){
      mainDiv.style.backgroundColor=isDark?"rgb(148 163 184)" : "rgb(15 23 42)";

    }

   };


  return (
    <nav className="flex justify-center align-center flex-row">
      <div className="w-full z-100 h-24 flex sticky mx-auto top-0 items-center justify-between font-titleFont">
        {" "}
        {/* <div>
          <img src={logo} alt="logo" className="" />
        </div> */}
        <div className="md:flex flex-grow justify-center">
          <ul className="flex items-center justify-around gap-10">
            {navLinksData.map(({ _id,icon: Icon, name, link }) => (
              <li
                className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
               <Icon />
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="transition-colors duration-300"
                  activeClass="text-designColor"
                > {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div>
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
        {isDark ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
      </button>        </div> */}
       
      </div>
    </nav>
  );
};

export default Navbar;
