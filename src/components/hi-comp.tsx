import car from "../assets/img/bgimg.png";
import Herosection from "./hero-section";
import Navbarcomp from "./navbar-comp";

const Hicomp = () => {

  return (
    <div className="h-screen">
      <img src={car} alt="" className="h-full w-full object-cover" />
      <div className="absolute top-0 h-full w-full">
        <Navbarcomp />
        <Herosection />
      </div>
    </div>
  );
};

export default Hicomp;
