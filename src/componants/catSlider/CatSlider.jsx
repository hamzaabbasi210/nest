import React from "react";
import Slider from "react-slick";

import cat1 from "../../assets/201 (1).png";
import cat2 from "../../assets/202 (1).png";
import cat3 from "../../assets/203.png";
import cat4 from "../../assets/204.png";
import cat5 from "../../assets/205.png";
import cat6 from "../../assets/206.png";
import cat7 from "../../assets/207.png";
import cat8 from "../../assets/208 (1).png";
import cat9 from "../../assets/209 (1).png";
import cat10 from "../../assets/210 (1).png";
import "./CatSlider.css";
import { useProductContext } from "../../context/productContext";
import { NavLink } from "react-router-dom";
function CatSlider() {
  const { Products } = useProductContext();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="category-slider-container">
        <div className="container-fluid ">
          <h1 className="hd">feature category</h1>
          <div className="slide-items my-12 ">
            <Slider {...settings} className="">
              {Products.flatMap((val_) => {
                console.log(val_.cat_name);
                return val_.items.flatMap((val) => {
                  return (
                    <NavLink
                      to={`/cat/${val_.cat_name.toLowerCase()}/${val.cat_name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    >
                      <div className="row  bg-[#fffceb]">
                        <div className="col">
                          <img
                            src={val.catImage}
                            alt=""
                            className="mix-blend-multiply	w-24 aspect-square mb-4"
                          />
                          <h1>
                            {val.cat_name.length > 14
                              ? val.cat_name.substr(0, 14)
                              : val.cat_name + "..."}
                          </h1>
                          <p>{val.products.length} items</p>
                        </div>
                      </div>
                    </NavLink>
                  );
                });
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatSlider;
