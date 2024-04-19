import React from "react";
import Slider from "react-slick";
import "./CatSlider.css";
import { useProductContext } from "../../context/productContext";
import { NavLink } from "react-router-dom";

function CatSlider() {
  const { Products } = useProductContext();

  // Slick slider settings
  var settings = {
    dots: false, // Hide dots for navigation
    infinite: true, // Enable infinite looping
    speed: 500, // Animation speed
    slidesToShow: 9, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: true, // Show navigation arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Autoplay speed
    mobileFirst: true, // Mobile-first approach
    responsive: [
      {
        breakpoint: 1560, // Breakpoint for larger screens
        settings: {
          slidesToShow: 8, // Adjust number of slides to show
          slidesToScroll: 1, // Adjust number of slides to scroll
        },
      },
      {
        breakpoint: 780, // Breakpoint for medium screens
        settings: {
          slidesToShow: 4, // Adjust number of slides to show
          slidesToScroll: 1, // Adjust number of slides to scroll
        },
      },
      {
        breakpoint: 480, // Breakpoint for small screens
        settings: {
          slidesToShow: 2, // Adjust number of slides to show
          slidesToScroll: 1, // Adjust number of slides to scroll
        },
      },
    ],
  };

  return (
    <div className="category-slider-container ">
      <div className="container-fluid ">
        <h1 className="hd title">Feature Categories</h1> {/* Title */}
        <div className="slide-items my-4 ">
          {" "}
          <Slider {...settings} className="">
            {" "}
            {Products.flatMap((val_) => {
              return val_.items.flatMap((val) => {
                return (
                  <div key={val.cat_name}>
                    {" "}
                    <NavLink
                      to={`/cat/${val_.cat_name.toLowerCase()}/${val.cat_name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    >
                      <div
                        className={`row`}
                        style={{ backgroundColor: `${val.background}` }}
                      >
                        {" "}
                        <div className="col w-8">
                          <img
                            src={val.catImage}
                            alt=""
                            className="mix-blend-multiply w-24  mb-2"
                            style={{ aspectRatio: "3/2" }}
                          />
                          <h1>
                            {val.cat_name.length > 12
                              ? val.cat_name.substr(0, 12)
                              : val.cat_name + "..."}{" "}
                          </h1>
                          <p>{val.products.length} items</p>{" "}
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              });
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CatSlider;
