import six from "../assets/img/06.svg";
import MaxWidthWrapper from "./max-width-wrapper";

const Getstarted = () => {
  return (
   <div className="pt-42 py-20">
      <MaxWidthWrapper>
        <div className="flex flex-col ">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="hidden md:flex items-center justify-center">
                <img src={six} alt="" />
            </div>
            <div className="flex flex-col gap-5">
                <p className=" text-parpal text-base">Get Started</p>
                <p className="text-5xl font-bold">Start your</p>
                <span className="text-5xl font-bold">Stellar journey here.</span>
                <p className="text-lg">Unlock the power of data analytics and gain actionable insights to make informed business decisions.</p>
              <div className="w-full space-y-5 flex flex-col mt-5">
                  <input type="text" placeholder="Enter your email" className="border border-border rounded-full px-4 py-4 focus:outline-parpal" />
                  <button className="bg-parpal text-white px-5 py-3 rounded-3xl duration-500 cursor-pointer hover:bg-white border border-parpal hover:text-parpal"> Subscribe </button>
              </div>
                
            </div>
            <div className="flex md:hidden items-center justify-center">
                <img src={six} alt="" />
            </div>
            
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Getstarted;