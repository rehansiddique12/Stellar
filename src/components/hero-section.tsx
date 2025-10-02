import one from "../assets/img/01.png";
import two from "../assets/img/02.png";
import three from "../assets/img/03.png";
import four from "../assets/img/04.png";
import mobile from "../assets/img/mobile.png";
import MaxWidthWrapper from "./max-width-wrapper";

const Herosection = () => {
  return (
<div className="text-center pt-40 md:pt-42 h-full px-4 md:px-0">
      <MaxWidthWrapper>
      <p className="text-parpal text-base md:text-lg">Our Framer Template</p>
        <p className="text-3xl md:text-6xl font-semibold mt-3 md:mt-5">Save time and build </p>
        <p className="text-3xl md:text-6xl font-semibold mt-3 md:mt-5">better with <span className="bg-parpal/80 border-parpal text-white font-bold rounded-full px-3 py-1 md:px-4 md:py-2">Stellar</span></p>
      <div className="grid grid-cols-1 md:grid-cols-3 pt-6 md:pt-10 gap-6 md:gap-10">
        <div className="hidden md:flex flex-col justify-end items-end md:pr-10 gap-4 md:gap-8 w-full">
          <img src={one} alt=""  className="duration-300 border-l-4 border-parpal border-b-4 hover:border border rounded-2xl"/>
          <img src={four} alt="" className="duration-300 border-l-4 border-parpal border-b-4 hover:border border rounded-2xl" />
        </div>
        <div className="flex flex-col gap-6 md:gap-10 md:px-5">
          <p className="text-sm md:text-base">Gain unparalleled insights into your data with our robust analytics suite and Stellar. </p>
          <img src={mobile} alt="" className="h-full w-full object-contain"/>
        </div>
        <div className="hidden md:flex flex-col md:justify-start md:items-start md:pr-10 gap-4 md:gap-18 w-full">
          <img src={three} alt=""  className="duration-300 border-l-4 border-parpal border-b-4 hover:border border rounded-2xl"/>
          <img src={two} alt=""  className="duration-300 border-l-4 border-parpal border-b-4 hover:border border rounded-2xl"/>
        </div>
      </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Herosection;
