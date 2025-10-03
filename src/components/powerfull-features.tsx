import one from "../assets/img/p01.png";
import two from "../assets/img/p02.png";
import three from "../assets/img/p03.png";
import icon1 from "../assets/img/icon01.png";
import icon2 from "../assets/img/icon02.png";
import icon3 from "../assets/img/icon03.png";
import MaxWidthWrapper from "./max-width-wrapper";

const Powerfullfeatures = () => {
  return (
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center h-full w-full">
          <p className="text-parpal">Powerful Features</p>
          <p className="text-3xl md:text-6xl font-semibold mt-3 md:mt-5">Our product has </p>
          <p className="text-3xl md:text-6xl font-semibold mt-3 md:mt-5">these big <span className="bg-parpal/80 border-parpal text-white font-bold rounded-full px-3 py-1 md:px-4 md:py-2">features</span></p>
          <div className="grid  grid-cols-1 md:grid-cols-3 pt-6 md:pt-18 gap-6 md:gap-10">
          <div>
            <img src={one} alt="" className="w-full hover:scale-105 duration-300" />
            <div className="flex gap-3 items-center py-5">
              <img src={icon1} alt="" />
              <p className="text-xl font-bold">Beautiful Design</p>
            </div>
            <p>Gain a competitive edge with our SEO optimization tools, ensuring your website ranks</p>
          </div>
            <div>
            <img src={two} alt=""  className="w-full hover:scale-105 duration-300"/>
            <div className="flex gap-3 items-center py-5">
              <img src={icon2} alt="" />
              <p className="text-xl font-bold">Beautiful Design</p>
            </div>
            <p>Gain a competitive edge with our SEO optimization tools, ensuring your website ranks</p>
          </div>
            <div>
            <img src={three} alt=""  className="w-full hover:scale-105 duration-300"/>
            <div className="flex gap-3 items-center py-5">
              <img src={icon3} alt="" />
              <p className="text-xl font-bold">Beautiful Design</p>
            </div>
            <p>Gain a competitive edge with our SEO optimization tools, ensuring your website ranks</p>
          </div>
          </div>
        </div>
      </MaxWidthWrapper>
  );
};

export default Powerfullfeatures;