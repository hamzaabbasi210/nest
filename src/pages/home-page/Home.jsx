import React, { useContext, useEffect } from "react";
import HomeSlider from "./HomeSlider";
import CatSlider from "../../componants/catSlider/CatSlider";
import Banner from "../../componants/banner/Banner";
import { NavLink } from "react-bootstrap";
import "./Home.css";
import Product from "../../componants/product/Product";
import "../../componants/product/Product.css";
import banner4 from "../../assets/banner4.jpg";
import Slider from "react-slick";
import Foods from "../../componants/foods/Foods";
import { useProductContext } from "../../context/productContext";
import FeatureProduct from "../../componants/featureProducts/FeatureProduct";
import Product2 from "../../componants/product2/Product2";

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
  }, []);

  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banner />

      <FeatureProduct />

      {/* -------------------- daily sales section-------------------------- */}
      <div className="sales-container mt-8">
        <div className="container-fluid">
          <div className="heading-content flex items-center ">
            <div className="hd">daily best deals</div>
            <div className="filter-tabs ml-auto">
              <ul className="flex gap-">
                <li className="active">
                  <NavLink>all</NavLink>
                </li>
                <li>
                  <NavLink>Milks & Dairies</NavLink>
                </li>
                <li>
                  <NavLink>Coffes & Teas</NavLink>
                </li>
                <li>
                  <NavLink>Pet Foods</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-8">
            <div className="col-2">
              <div className="img w-[20rem] h-[28rem] z-10 relative rou">
                <img src={banner4} alt="" className="h-full" />
              </div>
            </div>
            <div className="col-10 product-box ">
              <div className="">
                <Slider {...settings}>
                  {dailyBestDeals.map((val) => {
                    return val.map((val) => {
                      return (
                        <div key={val.id}>
                          <Product2 value={val} />
                        </div>
                      );
                    });
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------- foods section-------------------------- */}
      <div className="food-container  my-8">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <div className="heading border-b-2 pb-4 mb-4">
                <div className="hd">Top Selling</div>
              </div>
              {topSelling.map((val) => {
                return val.map((val) => {
                  return (
                    <>
                      <Foods value={val} />
                    </>
                  );
                });
              })}
            </div>
            <div className="col-3">
              <div className="heading border-b-2 pb-4 mb-4">
                <div className="hd">Trending products</div>
              </div>
              {trending.map((val) => {
                return val.map((val) => {
                  return <Foods value={val} />;
                });
              })}
            </div>
            <div className="col-3">
              <div className="heading border-b-2 pb-4 mb-4">
                <div className="hd">Recently added</div>
              </div>
              {recentlyAdded.map((val) => {
                return val.map((val) => {
                  return <Foods value={val} />;
                });
              })}
            </div>
            <div className="col-3">
              <div className="heading border-b-2 pb-4 mb-4">
                <div className="hd">Top Rated</div>
              </div>
              {topRated.map((val) => {
                return val.map((val) => {
                  return <Foods value={val} />;
                });
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------footer banner section ---------------------- */}

      {/* ---------------------footer section ---------------------- */}
    </>
  );
}

export default Home;
