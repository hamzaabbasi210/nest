import { Button, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useProductContext } from "../../context/productContext";
import "./Product2.css";
import { NavLink } from "react-router-dom";
import { CartContaxt, useCartContext } from "../../context/cartContext";
// import Alert from "@mui/material/Alert";
// import CheckIcon from "@mui/icons-material/Check";
import { toast } from "react-toastify";

function Product2(props) {
  const featureProducts = useProductContext();
  const { addToCart } = useCartContext();
  const [showAlert, setShowAlert] = useState(false);

  const notify = () =>
    toast.success(props.value.productName + " added to cart");

  const addTooCart = () => {
    props.value.quantity = 1;
    addToCart(props.value);
    notify();
    // setShowAlert(true);
    // setTimeout(() => {
    //   setShowAlert(false);
    // }, 2000);
  };

  return (
    <>
      <div className="product2-container">
        <div className="container-flu ">
          {/*
          <div
            className="addTocartalert fixed top-0 z-50 right-0 transition-opacity duration-5000 ease-in-out"
            style={{
              opacity: showAlert ? 1 : 0,
              visibility: showAlert ? "visible" : "collapse",
            }}
          >
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              severity="success"
              style={{
                backgroundColor: "#ECFFEC",
                color: "#3BB77D",
              }}
            >
              {props.value.productName} added to cart
            </Alert>
          </div>
          */}
          {/* <div className="feature-product-box w-96 "> */}
          <NavLink to={`/singleproduct/${props.value.id}`}>
            <div className="featureProductCard relative m-0 shadow-xl py-8 px-4 rounded-lg border border-[#ececec] hover:shadow-2xl-[#3BB77E] ">
              <div
                className={`badge  py-2  px-3  rounded-tr-3xl rounded-bl-3xl bg-black absolute top-0 left-0 z-10 rounded-none ${props.value.tag}`}
              >
                {props.value.tag}
              </div>
              <div className="product-img relative ">
                <div className="img flex items-center justify-center h-56 overflow-hidden">
                  <img
                    src={props.value.catImg}
                    alt=""
                    className="w- py-4 px-8 hover:scale-125 transition-all"
                  />
                </div>

                <div className="img-overlay left-[50%] transform -translate-x-1/2 -translate-y-1/2 border  h-8 bg-white absolute top-[50%] ">
                  <ul className="flex items-center justify-between gap-  h-full  ">
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
              <div className="product-infoo mt-8 flex flex-col gap-2">
                {/* <div className="top-info"> */}
                <div className="discount text-[#3BB77E]">
                  discount <strong>{props.value.discount}%</strong>
                </div>
                <h1 className="pb- text-[22px]">
                  <strong>
                    {props.value.productName.length > 18
                      ? props.value.productName.substr(0, 14) + "...."
                      : props.value.productName}
                  </strong>
                </h1>
                {/* </div> */}
                <div className="bottom-info flex items-center  gap-2">
                  <Rating
                    defaultValue={props.value.rating}
                    precision={0.5}
                    style={{ fontSize: "18px" }}
                  />
                  <p className="text-[#ccc] text-[10px]">
                    ({props.value.rating})
                  </p>
                </div>
                <span className="text-[#ccc]">
                  By{" "}
                  <strong className="text-[#3BB77E] font-semibold">
                    {props.value.brand}
                  </strong>
                </span>
                <div className="flex justify-between mt-8">
                  <div className="price flex items-center gap-2">
                    <div className="sale-price text-xl text-[#3BB77E]">
                      <strong> ${props.value.price}</strong>
                    </div>
                    <div className="reg-price line-through	text-xs">
                      ${props.value.oldPrice}
                    </div>
                  </div>
                  <div className="cart-btn">
                    <NavLink to="">
                      {" "}
                      <Button onClick={addTooCart}>
                        <FiShoppingCart /> add
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Product2;
