import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { useProductContext } from "../../context/productContext";
import Product2 from "../product2/Product2";
import banner4 from "../../assets/banner-4.png";
import "./dailyBestDeal.css";
function DailyBestDeal() {
  const { dailyBestDeals } = useProductContext();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "90px",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],

    // fade: true,
  };
  return (
    <>
      <div className="sales-container mt-8">
        <div className="container-fluid">
          <div className="heading-content flex items-center ">
            <div className="hd">daily best deals</div>
            <div className="filter-tabs ml-auto">
              <ul className="flex gap-">
                <li className="active">
                  <NavLink>al</NavLink>
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
          <div className="deal-content mt-8 flex">
            <div className="dealImg w-[25%] h-[100%] z-10 relative rou">
              <img src={banner4} alt="" classNa me="h-full" />
            </div>
            <div className="deal-products w-[70%]">
              <Slider {...settings}>
                {dailyBestDeals.map((val) => {
                  return val.map((val) => {
                    return (
                      <div className="products gap-8">
                        <Product2 value={val} />
                      </div>
                    );
                  });
                })}
              </Slider>
            </div>
            {/* <Slider {...settings}>
              {dailyBestDeals.map((val) => {
                return val.map((val) => {
                  return (
                    <div className=" product-box flex">
                      <div key={val.id}>
                        <Product2 value={val} />
                      </div>
                    </div>
                  );
                });
              })}
            </Slider> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyBestDeal;
