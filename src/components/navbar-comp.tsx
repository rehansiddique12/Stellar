import { useState } from "react";
import logo from "../assets/img/logo.svg";
import MaxWidthWrapper from "./max-width-wrapper";
import { Link } from "react-router-dom";

const Navbarcomp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50 mt-3">
      <MaxWidthWrapper>
       <div className="flex items-center justify-between rounded-full gap-4 md:gap-10 h-16 md:h-20 border  px-4 md:px-2 bg-white">
            <div className="flex-shrink-0">
              <img src={logo} alt="" className="w-20 md:w-28" />
            </div>

         
          <div className="hidden lg:flex gap-10">
            <Link to="/" className="cursor-pointer text-lg hover:bg-parpal hover:text-white px-3 py-1 rounded-full">Home</Link>
            <Link to="/product" className="cursor-pointer text-lg hover:bg-parpal hover:text-white px-3 py-1 rounded-full">Product</Link>
            <Link to="/about" className="cursor-pointer text-lg hover:bg-parpal hover:text-white px-3 py-1 rounded-full">About</Link>
            <Link to="/pricing" className="cursor-pointer text-lg hover:bg-parpal hover:text-white px-3 py-1 rounded-full">Pricing</Link>
            <Link to="/blog" className="cursor-pointer text-lg hover:bg-parpal hover:text-white px-3 py-1 rounded-full">Blog</Link>
            <Link to="/contact" className="cursor-pointer text-lg hover:bg-parpal hover:text-white px-3 py-1 rounded-full">Contact</Link>
          </div>

          
          <div className="hidden lg:flex gap-6">
            <button className="bg-white px-5 py-2 rounded-3xl hover:bg-hover duration-500 hover:text-white">Sign in</button>
            <button className="bg-white px-2 py-2 rounded-3xl border border-border hover:bg-hover duration-500 hover:text-white whitespace-nowrap">Sign up for free</button>
          </div>

         
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        
        {isOpen && (
          <div className="lg:hidden bg-white mt-2 rounded-3xl border border-border p-4 flex flex-col gap-3">
            <Link to="/" className="cursor-pointer text-base hover:bg-parpal hover:text-white px-3 py-2 rounded-full">Home</Link>
            <Link to="/product" className="cursor-pointer text-base hover:bg-parpal hover:text-white px-3 py-2 rounded-full">Product</Link>
            <Link to="/about" className="cursor-pointer text-base hover:bg-parpal hover:text-white px-3 py-2 rounded-full">About</Link>
            <Link to="/pricing" className="cursor-pointer text-base hover:bg-parpal hover:text-white px-3 py-2 rounded-full">Pricing</Link>
            <Link to="/blog" className="cursor-pointer text-base hover:bg-parpal hover:text-white px-3 py-2 rounded-full">Blog</Link>
            <Link to="/contact" className="cursor-pointer text-base hover:bg-parpal hover:text-white px-3 py-2 rounded-full">Contact</Link>
            <div className="border-t border-border pt-3 mt-2 flex flex-col gap-3">
              <button className="bg-white px-5 py-2 rounded-3xl border border-border hover:bg-hover duration-500 hover:text-white">Sign in</button>
              <button className="bg-parpal text-white px-5 py-2 rounded-3xl hover:bg-parpal/80 duration-500">Sign up for free</button>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbarcomp;