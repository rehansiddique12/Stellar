import car from "../assets/img/bgimg.png";
import Powerfullfeatures from "./powerfull-features";

const Powerfulfeatures = () => {
  return (
     <div className="h-screen relative">
      <img src={car} alt="" className="h-full w-full object-cover" />
      <div className="absolute top-0 h-full w-full ">
       <Powerfullfeatures/>
      </div>
    </div>
  );
};

export default Powerfulfeatures;