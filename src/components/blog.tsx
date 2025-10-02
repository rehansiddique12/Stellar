import blog01 from "../assets/img/blog01.svg";
import blog02 from "../assets/img/blog02.svg";
import blog03 from "../assets/img/blog03.svg";
import MaxWidthWrapper from "./max-width-wrapper";

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

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-sm  overflow-hidden hover:shadow-md transition-shadow cursor-pointer hover:border border-parpal hover:border-l-4 hover:border-b-4 duration-300">
                    <img 
                    src={blog01}
                    alt="blog1" 
                    className="w-full object-cover"
                    />
                    <div className="p-6">
                    <div className="flex space-x-3 text-xs text-gray-500 mb-3">
                        <span>Slate</span>
                        <span>Contrux</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        The Art of Designing Timeless Masterpieces
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Dive into the realm of limitless creativity as we explore the techniques 
                        and inspirations behind crafting visually stunning and timeless designs.
                    </p>
                    <button className="flex items-center text-parpal font-medium text-sm">
                        Read More 
                        <span className="ml-2">→</span>
                    </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-sm  overflow-hidden hover:shadow-md transition-shadow hover:border border-parpal hover:border-l-4 hover:border-b-4 duration-300">
                    <img 
                    src={blog02}
                    alt="blog2" 
                    className="w-full object-cover"
                    />
                    <div className="p-6">
                    <div className="flex space-x-3 text-xs text-gray-500 mb-3">
                        <span>Slate</span>
                        <span>Contrux</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Stay Ahead of the Curve in the Visual World
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Discover the secrets of designing impactful brand experiences that 
                        leave a lasting impression on your audience.
                    </p>
                    <button className="flex items-center text-parpal font-medium text-sm">
                        Read More 
                        <span className="ml-2">→</span>
                    </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-sm  overflow-hidden hover:shadow-md transition-shadow hover:border border-parpal hover:border-l-4 hover:border-b-4 duration-300">
                    <img 
                    src={blog03}
                    alt="blog3" 
                    className="w-full object-cover"
                    />
                    <div className="p-6">
                    <div className="flex space-x-3 text-xs text-gray-500 mb-3">
                        <span>Slate</span>
                        <span>Contrux</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Crafting Emotionally Engaging User Experiences
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Join us on a journey of exploration as we push the boundaries of design, 
                        unveiling cutting-edge concepts and redefining what's possible.
                    </p>
                    <button className="flex items-center text-parpal font-medium text-sm">
                        Read More 
                        <span className="ml-2">→</span>
                    </button>
                    </div>
                </div>

                </div>
            </div>
        </MaxWidthWrapper>
</div>

  );
};

export default Blog;