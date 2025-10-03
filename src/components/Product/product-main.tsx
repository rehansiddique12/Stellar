import Navbarcomp from "../navbar-comp";
import car from "@/assets/img/bgimg.png";
import Producthero from "./product-hero";

const Productmain = () => {
  return (
   <div className="h-screen">
      <img src={car} alt="" className="h-full w-full object-cover" />
      <div className="absolute top-0 h-full w-full">
        <Navbarcomp />
        <Producthero/>
      </div>
    </div>
  );
};

export default Productmain;