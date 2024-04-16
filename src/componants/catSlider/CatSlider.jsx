import React from "react";
import Slider from "react-slick";

import "./CatSlider.css"; // Import CSS file for styling
import { useProductContext } from "../../context/productContext"; // Import product context hook
import { NavLink } from "react-router-dom"; // Import NavLink for navigation

function CatSlider() {
  const { Products } = useProductContext(); // Fetch products data from context

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
    <div className="category-slider-container">
      <div className="container-fluid ">
        <h1 className="hd title">Feature Categories</h1> {/* Title */}
        <div className="slide-items mt-12 ">
          {" "}
          {/* Container for slider */}
          <Slider {...settings} className="">
            {" "}
            {/* Slick slider */}
            {Products.flatMap((val_) => {
              // Map through products data
              return val_.items.flatMap((val) => {
                // Map through items within each category
                return (
                  <div key={val.cat_name}>
                    {" "}
                    {/* Unique key for each item */}
                    <NavLink
                      to={`/cat/${val_.cat_name.toLowerCase()}/${val.cat_name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`} // Navigation link
                    >
                      <div className="row bg-[#fffceb]">
                        {" "}
                        {/* Item container */}
                        <div className="col w-8">
                          <img
                            src={val.catImage}
                            alt=""
                            className="mix-blend-multiply w-24 aspect-square mb-4" // Image
                          />
                          <h1>
                            {val.cat_name.length > 14
                              ? val.cat_name.substr(0, 8)
                              : val.cat_name + "..."}{" "}
                            {/* Category name */}
                          </h1>
                          <p>{val.products.length} items</p>{" "}
                          {/* Number of items */}
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
