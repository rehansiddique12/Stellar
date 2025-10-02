import MaxWidthWrapper from "./max-width-wrapper";
import {
  testimonialsData,
} from "@/lib/constants";
const firstColumn = testimonialsData.slice(0, 3);
const secondColumn = testimonialsData.slice(3, 6);
const thirdColumn = testimonialsData.slice(6, 9);
import { TestimonialsColumn } from "./ui/testimonials-columns-1";



const Testemoniles = () => {
  return (
    <MaxWidthWrapper>
    <div className="flex flex-col items-center justify-center h-full w-full py-20">
      <p className="text-parpal">Our Customers</p>
      <p className="text-3xl md:text-6xl font-semibold mt-3 md:mt-5">See what our </p>
      <p className="text-3xl md:text-6xl font-semibold mt-3 md:mt-5">customers are <span className="bg-parpal/80 border-parpal text-white font-bold rounded-full px-3 py-1 md:px-4 md:py-2">saying</span></p>
          <section className="pt-32 pb-20 relative">
          <div className="container z-10 mx-auto">
            <div className="flex justify-center gap-6 mt-5 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[440px] overflow-hidden">
              <TestimonialsColumn testimonials={firstColumn} duration={15} />
              <TestimonialsColumn
                testimonials={secondColumn}
                className="hidden md:block"
                duration={19}
              />
              <TestimonialsColumn
                testimonials={thirdColumn}
                className="hidden lg:block"
                duration={17}
              />
            </div>
          </div>
        </section>
    </div>
      </MaxWidthWrapper>
  );
};

export default Testemoniles;