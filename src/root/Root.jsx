import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Error from "../components/error/Error";
import Contact from "../pages/contact/Contact";
import Product from "../pages/product/Product";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Root;
