import one from "@/assets/img/about01.png";
import two from "@/assets/img/about02.png";
import MaxWidthWrapper from "../max-width-wrapper";

const Producthero = () => {
  return (
    <div className="text-center pt-40 md:pt-52 h-full px-4 md:px-0">
      <MaxWidthWrapper>
      <p className="text-parpal text-base md:text-lg">Our Framer Template</p>
        <p className="text-3xl md:text-6xl font-semibold mt-3 md:mt-5">This product will continue </p>
        <p className="text-3xl md:text-6xl font-semibold mt-3 md:mt-5">to evolve <span className="bg-parpal/80 border-parpal text-white font-bold rounded-full px-3 py-1 md:px-4 md:py-2">with you</span></p>
        <p className=" mt-3 md:mt-10">Embrace the future of technology with Stellar. Our  </p>
        <p >innovative SaaS template empowers businesses.  </p>
      <div className="flex pt-6 md:pt-10 gap-6 md:gap-10">
        <div className="flex justify-center items-center md:pr-10 gap-4 md:gap-8 w-full">
          <img src={two} alt="" className="duration-300 border-l-4 border-parpal border-b-4 hover:border border rounded-2xl" />
          <img src={one} alt=""  className="duration-300 border-l-4 border-parpal border-b-4 hover:border border rounded-2xl"/>
        </div>
      </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Producthero;