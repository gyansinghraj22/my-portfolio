// import LeftBanner from "./LeftBanner";
// import RightBanner from "./RightBanner";

// const Banner = () => {
//   return (
//     <section
//       id="home"
//       className="w-full h-[850px] gap-20 flex  items-center border-b-[1px] font-titleFont"
//     >
//       <LeftBanner />
//       <RightBanner />
//     </section>
//   ); 
// };

// export default Banner;
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section id="home" className="md:min-h-screen sm:gap-2 md:gap-20 flex sm:flex-col sm:min-h-screen md:flex-row items-center border-b border-gray-300 font-titleFont">
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
