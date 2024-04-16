import { useState } from "react";
import "./App.css";
import Header from "./componants/header/Header";
import Nav from "./componants/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home-page/Home";
import FooterBnner from "./componants/footer-banner/FooterBnner";
import Footer from "./componants/footer/Footer";
import ShopListing from "./pages/listing/Listing";
import About from "./pages/about-page/About";
import SingleProduct from "./pages/single-Product-Page/SingleProduct";
import Contact from "./pages/contact us/Contact";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import SignIn from "./pages/sign_in/SignIn";
import SignUp from "./pages/sign_up/SignUp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:id" element={<ShopListing single={true} />} />
        <Route path="/cat/:id/:id" element={<ShopListing single={false} />} />
        <Route path="/listing" element={<ShopListing />} />
        <Route path="/about" element={<About />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <FooterBnner />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
