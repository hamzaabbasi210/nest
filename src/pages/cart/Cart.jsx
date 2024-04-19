import { Button, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegTrashAlt, FaLongArrowAltRight } from "react-icons/fa";
import "./Cart.css";
import QuantityBox from "../../componants/quantityBox/QuantityBox";
import { useCartContext } from "../../context/cartContext";
import { useLoginContext } from "../../context/loginContext";
import emptycart from "../../assets/emptycart.png";

function cart() {
  const { cart, removeItems, emptyCart, increment, decrement, total_amount } =
    useCartContext();
  const { isLogin } = useLoginContext();
  const removeItem = (id) => {
    removeItems(id);
  };

  return (
    <>
      <div className="cart-container ">
        <div className="container-fluid">
          <div className="bread-crums border-b-2 mt-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/listing">shop</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  cart
                </li>
              </ol>
            </nav>
          </div>
          <div className="row mt-8 mb-56">
            <div className="top flex justify-between">
              <div className="cart-heading">
                <div className="hd">your cart</div>
                <p className="mt-4">
                  There are{" "}
                  <span className="text-[#3BB77D] font-bold">
                    {" "}
                    {cart.length}
                  </span>{" "}
                  products in your cart
                </p>
              </div>
              <div className="clear-cart-btn">
                <Button
                  style={{
                    backgroundColor: "#3BB77D",
                    color: "white",
                    fontWeight: "bold",
                    padding: ".7rem 2rem",
                    fontSize: "%",
                  }}
                  onClick={emptyCart}
                >
                  Clear cart
                </Button>
              </div>
            </div>
            <div className="col-8">
              <div className="cart-left-container">
                <div className="cart-items">
                  <div className="cart-table">
                    <table className="table rounded-full">
                      <thead className="">
                        <tr className="bg-black hide-on-mobile">
                          <th className="">Product</th>
                          <th>Unit Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                          <th>Remove</th>
                        </tr>
                      </thead>

                      <tbody>
                        {isLogin === "true" ? (
                          cart.map((val, index) => {
                            // console.log(val);
                            return (
                              <>
                                <tr className="hide-on-mobile">
                                  <td>
                                    <div className="table-items flex item-center gap-8">
                                      <div className="img border rounded">
                                        <img
                                          src={val.catImg}
                                          alt=""
                                          className="w-24 aspect-square "
                                        />
                                      </div>
                                      <div className="table-info flex flex-col justify-center">
                                        <h4 className="text-lg">
                                          <NavLink
                                            to={`/singleProduct/${val.id}`}
                                          >
                                            {val.productName}
                                          </NavLink>{" "}
                                        </h4>
                                        <div className="cart-product-rating">
                                          <Rating
                                            value={parseInt(val.rating)}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    $ {parseInt(val.price.split(",").join(""))}
                                  </td>
                                  <td className="ml-auto">
                                    <QuantityBox
                                      // amount={amount}
                                      quantitty={val.quantity}
                                      setIncrese={() => increment(val.id)}
                                      setDecrese={() => decrement(val.id)}
                                    />
                                  </td>
                                  {/* <td>${totalPrice.toFixed(2)}</td> */}
                                  <td>
                                    $
                                    {val.price.split(",").join("") *
                                      val.quantity}
                                  </td>
                                  <td>
                                    <FaRegTrashAlt
                                      onClick={() => removeItem(val.id)}
                                    />
                                  </td>
                                </tr>
                              </>
                            );
                          })
                        ) : (
                          <>
                            <td colspan="5" className="text-red-400">
                              {" "}
                              <div className="mt-8 font-bold text-4xl w-full flex flex-col ">
                                login to access the cart itemss
                                <NavLink to="/signin">
                                  <Button
                                    style={{
                                      backgroundColor: "#3BB77D",
                                      marginTop: "2rem",
                                      color: "white",
                                      fontWeight: "bold",
                                      padding: ".5rem 2rem",
                                    }}
                                  >
                                    log in{" "}
                                  </Button>
                                </NavLink>
                              </div>
                            </td>
                          </>
                        )}
                      </tbody>
                    </table>
                    {isLogin === "true" && cart.length > 0 && (
                      <NavLink to="/listing">
                        <Button
                          style={{
                            backgroundColor: "#3BB77D",
                            marginTop: "2rem",
                            marginBottom: "2rem",
                            color: "white",
                            fontWeight: "bold",
                            padding: ".5rem 2rem",
                          }}
                        >
                          continue shopping
                        </Button>
                      </NavLink>
                    )}
                    {isLogin === "true" && cart.length === 0 && (
                      <>
                        <div className="w-full py-24  flex items-center justify-center ">
                          <img src={emptycart} alt="" className="w-52" />
                          <h1 className="text-3xl text-red-300">
                            your cart is empty
                          </h1>
                        </div>

                        <NavLink to="/listing">
                          <Button
                            style={{
                              backgroundColor: "#3BB77D",
                              marginTop: "2rem",
                              color: "white",
                              fontWeight: "bold",
                              padding: ".5rem 2rem",
                            }}
                          >
                            continue shopping
                          </Button>
                        </NavLink>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 h-max border p-4 rounded">
              <div className="cart-right-container">
                <div className="checkout-info border">
                  <div className="subtotle flex justify-between border p-2">
                    <h5 className="text-xl font-bold text-[#9e9999]">
                      subtotle
                    </h5>
                    <h5 className="text-2xl font-bold">
                      ${parseFloat(total_amount).toFixed(2)}
                    </h5>
                  </div>
                  <div className="subtotle flex justify-between border p-2 my-4">
                    <h5 className="text-xl font-bold text-[#9e9999]">
                      shipping
                    </h5>
                    <h5 className="text-2xl font-bold">5%</h5>
                  </div>
                  <div className="subtotle flex justify-between border p-2">
                    <h5 className="text-xl font-bold text-[#9e9999]">total</h5>

                    <h5 className="text-2xl font-bold">
                      ${parseInt(total_amount + total_amount * 0.05).toFixed(2)}
                    </h5>
                  </div>
                </div>
                <Button
                  style={{
                    backgroundColor: "#3BB77D",
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    marginTop: "2rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  proced to checkout{" "}
                  <FaLongArrowAltRight
                    style={{ marginLeft: "10px", fontSize: "20px" }}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default cart;
