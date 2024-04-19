import React from "react";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
function Banner() {
  return (
    <>
      <div className="banner-container mt-12">
        <div className="container-fluid">
          <div
            className="row  "
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit , minmax(15rem, 1fr))",
              gap: "1rem",
            }}
          >
            <div className=" rounded-md overflow-hidden">
              <img
                src={banner1}
                alt=""
                className="w-full rounded-md hover:scale-105 transition-all"
              />
            </div>
            <div className=" rounded overflow-hidden">
              <img
                src={banner2}
                alt=""
                className="w-full rounded-md hover:scale-105 transition-all"
              />
            </div>
            <div className=" rounded overflow-hidden">
              <img
                src={banner3}
                alt=""
                className="w-full rounded-md hover:scale-105 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
