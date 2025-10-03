import car from "@/assets/img/bgimg.png";
import Ourproduct from "./ourproduct";
const Ourproductmain = () => {
  return (
     <div className="h-screen relative">
      <img src={car} alt="" className="h-full w-full object-cover" />
      <div className="absolute top-20 h-full w-full ">
       <Ourproduct/>
      </div>
    </div>
  );
};

export default Ourproductmain;