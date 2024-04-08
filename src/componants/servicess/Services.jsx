import React from "react";
import img1 from "../../assets/211.svg";
import img2 from "../../assets/212.svg";
import img3 from "../../assets/213.svg";
import img4 from "../../assets/214.svg";
import img5 from "../../assets/216.svg";
import "./Services.css";
function Services() {
  const boxData = [
    { img: img1, title: "Best prices & offers", desc: "Orders $50 or more" },
    { img: img2, title: "Free delivery", desc: "24/7 amazing services" },
    { img: img3, title: "Great daily deal", desc: "When you sign up" },
    { img: img4, title: "Wide assortment", desc: "Mega Discounts" },
    { img: img5, title: "Easy returns", desc: "Within 30 days" },
  ];
  return (
    <>
      <div className="services-container mt-8">
        <div className="container-fluid">
          <div className="footer-boxes">
            <div className="services-box ">
              {boxData.map((val, index) => {
                return (
                  <div
                    key={index}
                    className="box-data py-8 px-4  rounded-lg w-[%] bg-[#F7F7F7] flex items-center justify-center gap-4"
                  >
                    <div className="img">
                      <img src={val.img} alt="" />
                    </div>
                    <div className="info">
                      <h1 className="text-[22px] font-semibold">{val.title}</h1>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
