import { useEffect, useState } from "react";
import React from "react";
import { useProductContext } from "../../context/productContext";
import Product2 from "../product2/Product2";
import { NavLink } from "react-router-dom";
import "./featureProduct.css";
function FeatureProduct() {
  const {
    isLoading,
    featureProducts,
    dalsAndPulses,
    Products,
    gheeAndOils,
    attaAndFLoors,
    masalasAndSpices,
    riceAndRiceProducts,
    mobilesAndTablets,
    TVAndSpeaker,
    menWesternWear,
    woMenWesternWear,
  } = useProductContext();
  const [showProducts, setShowProducts] = useState(1);
  const [activeProduct, setActiveProduct] = useState(null);
  if (isLoading) {
    return <div>Loading...................</div>;
  }
  if (!featureProducts) {
    return null;
  }
  const filterProduct = (val) => {
    setShowProducts(val);
    setActiveProduct(val);
  };
  return (
    <>
      <div className="feature-product-container py-8">
        <div className="container-fluid">
          <div className="product-container  mt-8">
            <div className="heading-content flex items-center ">
              <div className="hd">Popular products</div>
              <div className="filter-tabs ml-auto">
                <ul className="flex gap-">
                  {Products.map((val, index) => {
                    return val.items.map((val_, index) => {
                      return (
                        <li
                          className={
                            val_.id === activeProduct
                              ? "text-sm font-bold text-[#3BB77E]"
                              : "text-sm font-thin "
                          }
                        >
                          <NavLink onClick={() => filterProduct(val_.id)}>
                            {val_.cat_name}
                          </NavLink>
                        </li>
                      );
                    });
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="feature-product2  mt-8">
            {showProducts === 1 &&
              dalsAndPulses.map((val) => {
                return val.products.map((val) => {
                  // console.log(val);
                  return (
                    <>
                      <div className="">
                        <Product2 tag={"hot"} value={val} />
                      </div>
                    </>
                  );
                });
              })}
            {showProducts === 2 &&
              gheeAndOils.map((val) => {
                return val.products.map((val) => {
                  return (
                    <>
                      <div className="">
                        <Product2 tag={"hot"} value={val} />
                      </div>
                    </>
                  );
                });
              })}
            {showProducts === 3 &&
              attaAndFLoors.map((val) => {
                return val.products.map((val) => {
                  return (
                    <>
                      <div className="">
                        <Product2 tag={"hot"} value={val} />
                      </div>
                    </>
                  );
                });
              })}
            {showProducts === 4 &&
              masalasAndSpices.map((val) => {
                return val.products.map((val) => {
                  return (
                    <>
                      <div className="">
                        <Product2 tag={"hot"} value={val} />
                      </div>
                    </>
                  );
                });
              })}
            {showProducts === 5 &&
              riceAndRiceProducts.map((val) => {
                return val.products.map((val) => {
                  return (
                    <>
                      <div className="">
                        <Product2 tag={"hot"} value={val} />
                      </div>
                    </>
                  );
                });
              })}
            {showProducts === 6 &&
              mobilesAndTablets.map((val) => {
                return val.products.map((val) => {
                  return (
                    <>
                      <div className="">
                        <Product2 tag={"hot"} value={val} />
                      </div>
                    </>
                  );
                });
              })}
            {showProducts === 7 &&
              TVAndSpeaker.map((val) => {
                return val.products.map((val) => {
                  return (
                    <>
                      <div className="">
                        <Product2 tag={"hot"} value={val} />
                      </div>
                    </>
                  );
                });
              })}
            {showProducts === 8 &&
              menWesternWear.map((val) => {
                return val.products.map((val) => {
                  return (
                    <>
                      <div className="">
                        <Product2 tag={"hot"} value={val} />
                      </div>
                    </>
                  );
                });
              })}
            {showProducts === 9 &&
              woMenWesternWear.map((val) => {
                return val.products.map((val) => {
                  return (
                    <>
                      <div className="">
                        <Product2 tag={"hot"} value={val} />
                      </div>
                    </>
                  );
                });
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureProduct;
