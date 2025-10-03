import Footer from "@/components/footer-comp";
import Navbarcomp from "@/components/navbar-comp";

const Productpage = () => {
  return (
    <div className="h-full">
        <Navbarcomp/>    
       <div className="h-[500px] text-center flex justify-center items-center">
        <span className="bg-parpal/80 border-parpal text-white font-bold rounded-full text-2xl px-3 py-1 md:px-4 md:py-2">Product Page is comming Soon</span> 
       </div>
       <Footer/>
    </div>
  );
};

export default Productpage;