// import Animationcomp from "@/components/animation-comp";
import Blog from "@/components/blog";
import Hicomp from "@/components/hi-comp";
import Footer from "@/components/footer-comp";
import Markicomp from "@/components/marki-comp";
import Getstarted from "@/components/get-started";
import Meetstellar from "@/components/meet-stellar";
import Startbuilding from "@/components/start-building";
import Testemonilesmain from "@/components/testemoniles-main";
import Powerfulfeatures from "@/components/powerful-features-main";

const Mainpage = () => {
  return (
    <div>
      <Hicomp />
      <Markicomp/>
      <Meetstellar/>
      <Getstarted/>
      <Powerfulfeatures/>
      <Testemonilesmain/>
      <Blog/>
      {/* <Animationcomp/> */}
      <Startbuilding/>
      <Footer/>
    </div>
  );
};

export default Mainpage;
