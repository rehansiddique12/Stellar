import MaxWidthWrapper from "./max-width-wrapper";


const Startbuilding = () => {
  return (
    <div className="bg-white py-20">
  <MaxWidthWrapper>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
    
    
    <div>
      <p className="text-parpal text-sm font-medium mb-2">Start building today!</p>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Start your 7-day free trial
      </h2>
      <p className="text-gray-600">
        Experience the Stellar difference and unlock the true potential
      </p>
    </div>

   
    <div className="flex flex-col space-y-4 w-full">
    
      <div className="md:flex w-full gap-3 ">
        <input
          type="email"
          placeholder="name@email.com"
          className="flex-1 px-4 py-3 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-parpal"
        />
        <button className=" w-full mt-3 md:mt-0  md:w-[13rem] px-4 py-3 bg-parpal hover:bg-parpal/90 text-white rounded-full ">
          Get Instant Access
        </button>
      </div>

      <div className="flex-col md:flex md:flex-row items-center space-x-3 space-y-2">
        <div className="flex items-center space-x-2">
          <span className="w-5 h-5 flex items-center justify-center bg-parpal text-white rounded-full text-sm">✓</span>
          <span className="text-gray-600 text-sm">Free 7-day trial</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-5 h-5 flex items-center justify-center bg-parpal text-white rounded-full text-sm">✓</span>
          <span className="text-gray-600 text-sm">No credit card required</span>
        </div>
      </div>
    </div>

  </div>
  </MaxWidthWrapper>
</div>

  );
};

export default Startbuilding;