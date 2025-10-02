import tick from "../assets/img/tick.svg";
import five from "../assets/img/05.svg";
import { BsArrowReturnRight } from "react-icons/bs";
import MaxWidthWrapper from "./max-width-wrapper";

const Meetstellar = () => {
  return (
    <div className="pt-42 py-20">
      <MaxWidthWrapper>
        <div className="flex flex-col ">
          <p className=" text-parpal text-base pb-2">Meet Stellar</p>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
                <p className="text-5xl font-bold">Provide powerful </p>
                <span className="text-5xl font-bold">solutions at all times</span>
                <p className="text-lg">Stellar is more than just a SaaS and technology template—it's a complete digital transformation solution.</p>
                <div className="flex flex-col gap-y-5 mt-5">
                    <div className="flex gap-5">
                    <div className="bg-parpal flex items-center justify-center rounded-full">
                    <img src={tick} alt="" />
                </div>
                <p>Share the extra text you want to add as a feature.</p>
                </div>
                <div className="flex gap-5">
                    <div className="bg-parpal flex items-center justify-center rounded-full">
                    <img src={tick} alt="" />
                </div>
                <p>Share the extra text you want to add as a feature.</p>
                </div>
                <div className="flex gap-5">
                    <div className="bg-parpal flex items-center justify-center rounded-full">
                    <img src={tick} alt="" />
                </div>
                <p>Share the extra text you want to add as a feature.</p>
                </div>
                </div>
              <div className="pt-10">
                  <button className="bg-white px-5 py-2 rounded-3xl flex items-center gap-2 hover:gap-3  hover:bg-hover duration-500 hover:text-white border border-parpal">Get Free Trial <span><BsArrowReturnRight className="size-5"/></span> </button>
              </div>
                
            </div>
            <div className="flex items-center justify-center">
                <img src={five} alt="" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Meetstellar;
