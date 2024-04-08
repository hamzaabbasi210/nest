import React from "react";
import product1 from "../../assets/product1.jpg";
import { Button, Rating } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import "./Product.css";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useProductContext } from "../../context/productContext";

function Product(props) {
  const { isLoading, featureProducts } = useProductContext();
  // console.log(featureProducts);
  return (
    <>
      <div className="product-container">
        <div className="container-fluid">
          <div className="product-row relative p- container-fluid">
            <div
              className={`badge  py-2  px-3  rounded-tr-3xl rounded-bl-3xl left-0  bg-black absolute  z-10 rounded-none ${props.tag}`}
            >
              {props.tag}
            </div>
            <div className="product-img px-6 py-6 relative">
              <img src={product1} alt="" className="w-full" />
              <div className="img-overlay ">
                <ul className="flex items-center justify-centers gap- border h-full  ">
                  <li tooltip="Add to Wishlist">
                    <FaRegHeart />
                  </li>
                  <li tooltip="Compare! ">
                    <MdOutlineCompareArrows />
                  </li>
                  <li tooltip="Quick View">
                    <FaRegEye />
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-info">
              <div className="brand">snacks</div>
              <h1 className="text- font-bold leading-6">
                Blue Diamond Almonds Lightly Salted Vegetables
              </h1>
              <Rating className="w-2 text-xs" />
              <div className="vendor text-[#a7a4a4]">
                By{" "}
                <span className="text-[#3bb77e] font-semibold"> StarKist</span>
              </div>
              <div className="price-cart flex items-center justify-between my-4">
                <div className="price flex items-center">
                  <span className="sale-price text-[#3bb77e] font-bold text-xl">
                    $32.85
                  </span>
                  <span className="rg-price ml-4 text-xs line-through font-bold text-[#c2bbbb]">
                    $36.85
                  </span>
                </div>
                <div className="cart">
                  <Button className="text-red-300">
                    <FiShoppingCart /> add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
