import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componants/header/Header";
import FooterBnner from "./componants/footer-banner/FooterBnner";
import Footer from "./componants/footer/Footer";
const Home = lazy(() => import("./pages/home-page/Home"));
const ShopListing = lazy(() => import("./pages/listing/Listing"));
const About = lazy(() => import("./pages/about-page/About"));
const SingleProduct = lazy(() =>
  import("./pages/single-Product-Page/SingleProduct")
);
const Contact = lazy(() => import("./pages/contact us/Contact"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const SignIn = lazy(() => import("./pages/sign_in/SignIn"));
const SignUp = lazy(() => import("./pages/sign_up/SignUp"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<ShopListing single={true} />} />
          <Route path="/cat/:id/:id" element={<ShopListing single={false} />} />
          <Route path="/listing" element={<ShopListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
      <FooterBnner />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
