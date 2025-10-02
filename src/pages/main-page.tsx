import Blog from "@/components/blog";
import Footer from "@/components/footer-comp";
import Getstarted from "@/components/get-started";
import Hicomp from "@/components/hi-comp";
import Markicomp from "@/components/marki-comp";
import Meetstellar from "@/components/meet-stellar";
import Powerfulfeatures from "@/components/powerful-features-main";
import Startbuilding from "@/components/start-building";
import Testemonilesmain from "@/components/testemoniles-main";

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
      <Startbuilding/>
      <Footer/>
    </div>
  );
};

export default Mainpage;
