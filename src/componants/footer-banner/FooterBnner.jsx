import { Button } from "@mui/material";
import React from "react";
import { BsSend } from "react-icons/bs";
import "./FooterBanner.css";
import bannerimg from "../../assets/newsletter.png";
function FooterBnner() {
  return (
    <>
      <div className="footer-banner-container ">
        <div className="container-fluid">
          <div className="row rounded-3xl pt-12 ">
            <div className="col-6 pl-16 banner-info flex flex-col items-centr justify-center">
              <h1 className="text-4xl font-bold text-[#253D4E]">
                Stay home & get your daily <br></br>needs from our shop
              </h1>
              <p className="my-4 text-2xl font-normal text-[#7E7E7E]">
                Start You'r Daily Shopping with Nest Mart
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
            <div className="col-6 ">
              <div className="img flex items-end justify-end">
                <img src={bannerimg} alt="" className="w-4/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBnner;
