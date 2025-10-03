import Footer from "@/components/footer-comp";
import Getstarted from "@/components/get-started";
import Markicomp from "@/components/marki-comp";
import Startbuilding from "@/components/start-building";
import Productmain from "@/components/Product/product-main";
import Ourproductmain from "@/components/Product/our-product-main";

const Productpage = () => {
  return (
    
    <div className="h-full">
       <Productmain/>
       <Markicomp/>
       <Ourproductmain/>
       <Getstarted/>
       <Startbuilding/>
       <Footer/>
    </div>
  );
};


export default Productpage;