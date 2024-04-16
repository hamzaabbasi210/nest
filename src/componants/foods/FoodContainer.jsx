import React from "react";
import Foods from "./Foods";
import { useProductContext } from "../../context/productContext";

function FoodContainer() {
  const { topRated, topSelling, trending, recentlyAdded } = useProductContext();
  return (
    <>
      <div className="food-container  my-8">
        <div className="container-fluid">
          <div className="food-content">
            <div className="food-card">
              <div className="heading border-b-2 pb-4 mb-4">
                <div className="hd">Top Selling</div>
              </div>
              {topSelling.map((val) => {
                return val.map((val) => {
                  return (
                    <>
                      <Foods value={val} />
                    </>
                  );
                });
              })}
            </div>
            <div className="food-card">
              <div className="heading border-b-2 pb-4 mb-4">
                <div className="hd">Trending products</div>
              </div>
              {trending.map((val) => {
                return val.map((val) => {
                  return <Foods value={val} />;
                });
              })}
            </div>
            <div className="food-card">
              <div className="heading border-b-2 pb-4 mb-4">
                <div className="hd">Recently added</div>
              </div>
              {recentlyAdded.map((val) => {
                return val.map((val) => {
                  return <Foods value={val} />;
                });
              })}
            </div>
            <div className="food-card">
              <div className="heading border-b-2 pb-4 mb-4">
                <div className="hd">Top Rated</div>
              </div>
              {topRated.map((val) => {
                return val.map((val) => {
                  return <Foods value={val} />;
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodContainer;
