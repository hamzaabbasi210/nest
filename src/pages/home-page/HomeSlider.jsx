import React from "react";
import Slider from "react-slick";
import "./HomeSlider.css";
import slider1 from "../../assets/slider-1.png";
import slider2 from "../../assets/slider-2.png";
import { Button } from "@mui/material";
import { BsSend } from "react-icons/bs";

function HomeSlider() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    adaptiveHeight: true,
  };
  return (
    <>
      <div className="slider-container my-4 h-[]">
        <div className=" px-[4.4%]">
          <Slider {...settings}>
            <div className="slide-items relative rounded-lg h-full">
              <img src={slider1} alt="" className="w-full rounded-lg h-full" />
              <div className="slide-info absolute top-[20%] left-[6%] ">
                <h1 className="text-6xl font-bold text-[#253D4E]">
                  Don’t miss amazing <br></br> grocery deals
                </h1>
                <p className="my-4 text-3xl font-normal text-[#7E7E7E]">
                  Sign up for the daily newsletter
                </p>
                <div className="newsletter w-[30rem] relative overflow-hidden rounded-full mt-12">
                  <BsSend className="text-[#7E7E7E] text-2xl absolute left-4 top-[29%]" />
                  <input
                    type="text"
                    placeholder="your email address"
                    className="w-full py-3 pl-12 rounded-full border-none outline-none"
                  />
                  <div className="inp-btn">
                    <Button className="rounded-">subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-items relative rounded-lg">
              <img src={slider2} alt="" className="w-full rounded-lg" />
              <div className="slide-info absolute top-[20%] left-[6%] ">
                <h1 className="text-6xl font-bold text-[#253D4E]">
                  Fresh Vegetables <br></br>
                  Big discount
                </h1>
                <p className="my-4 text-3xl font-normal text-[#7E7E7E]">
                  Sign up for the daily newsletter
                </p>
                <div className="newsletter w-[30rem] relative overflow-hidden rounded-full mt-12">
                  <BsSend className="text-[#7E7E7E] text-2xl absolute left-4 top-[29%]" />
                  <input
                    type="text"
                    placeholder="your email address"
                    className="w-full py-3 pl-12 rounded-full border-none outline-none"
                  />
                  <div className="inp-btn">
                    <Button className="rounded-">subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HomeSlider;
