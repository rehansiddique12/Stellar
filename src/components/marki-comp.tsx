import { Data } from "@/lib/constants";
import Marquee from "react-fast-marquee";
import MaxWidthWrapper from "./max-width-wrapper";


const Markicomp = () => {
  return (
    <div className="pt-42 text-center">
        <MaxWidthWrapper>
            <div className="flex flex-col gap-10 pb-10">
                <p className=" text-parpal text-base md:text-lg">The world's best companies trust Stellar.</p>
               <div>
                 <Marquee autoFill gradient gradientWidth={40} className="">
                    {Data.map((item) => (
                        <div className='bg-white border-l-4 border-parpal border-b-4 hover:border border duration-300 mr-5 rounded-xl h-18 flex justify-center items-center'>
                            <img className="w-full px-10 py-5" src={item.icon} alt="Slider_Icon" />      
                        </div>
                    ))}
                </Marquee>
               </div>
               <p>Stellar is used by over 55,000+ companies across the globe</p>
            </div>
               <button className=" bg-white px-5 py-2 rounded-3xl  hover:bg-hover duration-500 hover:text-white border border-parpal">Start your Stellar Journey </button>
        </MaxWidthWrapper>
    </div>
  );
};

export default Markicomp;
