import Mainpage from "./pages/main-page";
import Blogpage from "./pages/blog-page";
import Aboutpage from "./pages/about-page";
import Productpage from "./pages/product-page";
import Pricingpage from "./pages/pricing-page";
import Contactpage from "./pages/contact-page";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/product" element={<Productpage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/pricing" element={<Pricingpage />} />
      <Route path="/blog" element={<Blogpage />} />
      <Route path="/contact" element={<Contactpage />} />
    </Routes>
  );
};

export default App;
