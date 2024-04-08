import React from "react";
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
import { Rating } from "@mui/material";
import "./Foods.css";
import { useProductContext } from "../../context/productContext";
function Foods({ title, value }) {
  const { catImg, productName, id, price, oldPrice, rating } = value || {};

  return (
    <>
      <div className="container">
        <div className="container-fuid">
          <div className="foods-content ">
            <div className="box flex items-center gap-4 shaow-md borer mb-4">
              <div className="box-img bg-[#F7F7F7] p-[1rem]  rounded-md">
                <img src={catImg} alt="" className="w-20" />
              </div>
              <div className="food-info">
                <h1 className="text- font-bold leading-6">{productName}</h1>
                <Rating
                  className="w-2 text-xs"
                  defaultValue={rating}
                  readOnly
                />
                <div className="price flex items-center">
                  <span className="sale-price text-[#3bb77e] font-bold text-xl">
                    ${price}
                  </span>
                  <span className="rg-price ml-4 text-xs line-through font-bold text-[#c2bbbb]">
                    ${oldPrice}{" "}
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="box flex items-center gap-4 shaow-md borer mb-4">
              <div className="box-img bg-[#F7F7F7] p-[1rem]  rounded-md">
                <img src={cat1} alt="" className="w-full" />
              </div>
              <div className="food-info">
                <h1 className="text- font-bold leading-6">
                  Blue Diamond Almonds Lightly Salted Vegetables
                </h1>
                <Rating className="w-2 text-xs" />
                <div className="price flex items-center">
                  <span className="sale-price text-[#3bb77e] font-bold text-xl">
                    $32.85
                  </span>
                  <span className="rg-price ml-4 text-xs line-through font-bold text-[#c2bbbb]">
                    $36.85
                  </span>
                </div>
              </div>
            </div>
            <div className="box flex items-center gap-4 shaow-md borer">
              <div className="box-img bg-[#F7F7F7] p-[1rem]  rounded-md">
                <img src={cat1} alt="" className="w-full" />
              </div>
              <div className="food-info">
                <h1 className="text- font-bold leading-6">
                  Blue Diamond Almonds Lightly Salted Vegetables
                </h1>
                <Rating className="w-2 text-xs" />
                <div className="price flex items-center">
                  <span className="sale-price text-[#3bb77e] font-bold text-xl">
                    $32.85
                  </span>
                  <span className="rg-price ml-4 text-xs line-through font-bold text-[#c2bbbb]">
                    $36.85
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Foods;
