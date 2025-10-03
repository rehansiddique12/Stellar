
import { blogData } from "@/lib/constants";
import MaxWidthWrapper from "./max-width-wrapper";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className="bg-white py-20">
        <MaxWidthWrapper>
            <div className="px-20">
                <div className="text-center md:text-left md:flex md:justify-between md:items-center mb-12">
                <div>
                    <p className="text-parpal text-sm font-medium mb-2">Our Blog</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Blog & Articles
                    </h2>
                </div>
                <p className="text-gray-600 max-w-xl mt-4 md:mt-0 text-sm sm:text-base mx-auto md:mx-0">
                    Unlock the power of data analytics and gain actionable insights to make 
                    informed business decisions. Enhance your website's visibility.
                </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.map((item) => (
                            <div className="bg-white rounded-lg shadow-sm  overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <img 
                    src={item.image}
                    alt="blog1" 
                    className="w-full object-cover"
                    />
                    <div className="p-6">
                    <div className="flex space-x-3 text-xs text-gray-500 mb-3">
                        <span className="text-parpal font-medium text-sm bg-black/15 rounded-full px-4 py-1">{item.type1}</span>
                        <span className="text-parpal font-medium text-sm bg-black/15 rounded-full px-4 py-1">{item.type2}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        {item.description}
                    </p>
                    <button className="flex items-center justify-center text-parpal hover:text-white font-medium text-sm hover:bg-parpal hover:px-4 hover:py-1 rounded-full duration-500">
                        {item.button}
                        <span><FaArrowRightLong className="size-4 ml-2 "/></span>
                    </button>
                    </div>
                </div>
                    ))}

                </div>
            </div>
        </MaxWidthWrapper>
</div>

  );
};

export default Blog;