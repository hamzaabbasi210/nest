import React, { useContext, useEffect } from "react";
import HomeSlider from "./HomeSlider";
import CatSlider from "../../componants/catSlider/CatSlider";
import Banner from "../../componants/banner/Banner";
import { NavLink } from "react-bootstrap";
import "./Home.css";
import Product from "../../componants/product/Product";
import "../../componants/product/Product.css";
import Slider from "react-slick";
import Foods from "../../componants/foods/Foods";
import { useProductContext } from "../../context/productContext";
import FeatureProduct from "../../componants/featureProducts/FeatureProduct";
import Product2 from "../../componants/product2/Product2";
import DailyBestDeal from "../../componants/dailyBestDeals/DailyBestDeal";
import FoodContainer from "../../componants/foods/FoodContainer";

function Home() {
  const {
    topSelling,
    dailyBestDeals,
    trending,
    recentlyAdded,
    topRated,
    Products,
    dalsAndPulses,
  } = useProductContext();
  var settings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "60px",
    adaptiveHeight: true,

    // fade: true,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    alert(window.innerWidth);
  }, []);

  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banner />
      <FeatureProduct />
      <DailyBestDeal />
      <FoodContainer />
    </>
  );
}

export default Home;
