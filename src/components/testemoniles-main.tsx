import car from "../assets/img/bgimg.png";
import Testemoniles from "./testemoniles";


const Testemonilesmain = () => {
  return (
    <div className="h-screen relative">
      <img src={car} alt="" className="h-full w-full object-cover" />
      <div className="absolute top-0 h-full w-full ">
       <Testemoniles/>
      </div>
    </div>
  );
};

export default Testemonilesmain;