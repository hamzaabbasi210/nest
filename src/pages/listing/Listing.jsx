import React, { useState, useEffect } from "react";
import Sidebar from "../../componants/sidebar/Sidebar";
import { BiCategory } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";
import "./Listing.css";
import { Button } from "@mui/material";
import Product2 from "../../componants/product2/Product2";
import { useProductContext } from "../../context/productContext";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";

function ShopListing(props) {
  const { Products } = useProductContext();
  const [priceDropdown, setPriceDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [catProductsData, setCatProductsData] = useState([]);
  const { id } = useParams();

  var itemArr = [];
  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      Products.map((val) => {
        if (props.single === true) {
          if (val.cat_name.toLowerCase() === id.toLowerCase()) {
            val.items.length !== 0 &&
              val.items.map((val) => {
                val.products.length !== 0 &&
                  val.products.map((val) => {
                    itemArr.push(val);
                  });
              });
          }
        } else if (props.single === false) {
          val.items.map((val) => {
            if (
              val.cat_name.split(" ").join("-").toLowerCase() ===
              id.split(" ").join("-").toLowerCase()
            ) {
              val.products.map((val) => {
                itemArr.push({ ...val });
              });
            }
          });
        } else {
          val.items.map((val) => {
            val.products.map((val) => {
              itemArr.push(val);
            });
          });
        }
      });
      const list2 = itemArr.filter(
        (item, index) => itemArr.indexOf(item) === index
      );
      setCatProductsData(list2);
    } else {
      Products.map((val) => {
        return val.items.map((val) => {
          return val.products.map((val) => {
            itemArr.push(val);
          });
        });
      });
    }
    const list3 = itemArr.filter(
      (item, index) => itemArr.indexOf(item) === index
    );
    setCatProductsData(list3);
  }, [props.single, id, Products]);

  const filterByPrice = (minValue, maxValue) => {
    if (id) {
      Products.length !== 0 &&
        Products.map((val) => {
          if (val.cat_name && val.cat_name.toLowerCase() === id.toLowerCase()) {
            val.items.length !== 0 &&
              val.items.map((val) => {
                val.products.length !== 0 &&
                  val.products.map((val) => {
                    console.log(val.price);
                    let price = parseInt(
                      val.price.toString().replace(/,/g, "")
                    );
                    // console.log(price);
                    if (minValue <= price && maxValue >= price) {
                      itemArr.push(val);
                    }
                  });
              });
          } else {
            val.items.length !== 0 &&
              val.items.map((item_, index_) => {
                if (
                  item_.cat_name.split(" ").join("-").toLowerCase() ==
                  id.split(" ").join("-").toLowerCase()
                ) {
                  item_.products.map((product) => {
                    let price = parseInt(
                      product.price.toString().replace(/,/g, "")
                    );
                    if (minValue <= price && maxValue >= price) {
                      itemArr.push({
                        ...product,
                      });
                    }
                  });
                }
              });
          }
        });
      const list2 = itemArr.filter(
        (item, index) => itemArr.indexOf(item) === index
      );
      setCatProductsData(list2);
    }
  };

  const handleClickAway = () => {
    console.log("Maybe close the popup");
    setCategoryDropdown(false);
  };

  return (
    <>
      {catProductsData.length > 0 && (
        <div className="listing-container my-12">
          <div className="container-fluid">
            <div className="top-heading">
              <h1 className="text-5xl font-bold">
                {id ? sessionStorage.getItem("cat") : "all Products"}
              </h1>
              <ul>
                <li>
                  <NavLink to="/" style={{ color: "#3BB77D" }}>
                    home &nbsp;/{" "}
                  </NavLink>
                </li>

                {props.single === false && (
                  <li style={{ color: "#3BB77D" }}>{id}</li>
                )}
              </ul>
            </div>
            <div className="listing-content ">
              <div className="row">
                <div className="col-3 Listing-sidebar">
                  <Sidebar filterByPrice={filterByPrice} range={true} />
                </div>
                <div className="col-9 listing-Products mt-4">
                  <div className="top-strip flex justify-between flex-wrap gap-4">
                    <div className="result">
                      We found{" "}
                      <span className="text-success font-bold">
                        {catProductsData.length}
                      </span>{" "}
                      items for you!
                    </div>
                    <div className="filter-btn flex ">
                      <div className="tab relative ">
                        <Button
                          onClick={() => setCategoryDropdown(!categoryDropdown)}
                          style={{
                            border: "1px solid #3BB77D",
                            fontWeight: "bold",
                            color: "#3BB77D",
                          }}
                        >
                          {id ? id : "filter by brand"}
                        </Button>
                        {categoryDropdown === true && (
                          <ClickAwayListener onClickAway={handleClickAway}>
                            <div className="account-dropdown z-50 bg-[#FFFFFf] w-[90%] h-[auto] text-sm  absolute top-[100%] shadow-md right-4 py-4 ">
                              <ul className="w-full ">
                                {Products.map((val_) => {
                                  console.log(val_.cat_name);
                                  return val_.items.map((val) => {
                                    return (
                                      <NavLink
                                        to={`/cat/${val_.cat_name.toLowerCase()}/${val.cat_name
                                          .split(" ")
                                          .join("-")}`}
                                        className={({ isActive }) =>
                                          isActive
                                            ? "text-[#3BB77D] font-bold"
                                            : "text-black"
                                        }
                                      >
                                        <li
                                          className="p-2"
                                          onClick={() =>
                                            setCategoryDropdown(
                                              !categoryDropdown
                                            )
                                          }
                                        >
                                          {val.cat_name}
                                        </li>
                                      </NavLink>
                                    );
                                  });
                                })}
                              </ul>
                            </div>
                          </ClickAwayListener>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="product-box mt-6">
                    {catProductsData.map((val) => {
                      return (
                        <div className="feature-product2  mr-6 mt-4">
                          <Product2 value={val} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShopListing;
