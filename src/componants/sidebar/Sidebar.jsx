import React from "react";
import { categoryData } from "../categoryData";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import "./Sidebar.css";
import { Button } from "@mui/material";
import { FiFilter } from "react-icons/fi";
import banner from "../../assets/banner-4.png";
import { useProductContext } from "../../context/productContext";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Sidebar(props) {
  const [value, setValue] = React.useState([20, 60000]);
  const { Products } = useProductContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const filterByPrices = (minValue, maxValue) => {
    props.filterByPrice(minValue, maxValue);
  };
  useEffect(() => {
    filterByPrices(value[0], value[1]);
  }, [value]);

  return (
    <>
      <div className="sidebar-container ">
        <div className="container-fluid">
          <div className="box mb-8 ">
            <div className="cards shadow-xl rounded-lg max-h-[29rem] overflow-hidden px-4 mb-4 ">
              <div className="hd border-b-2 py-4">category</div>
              {Products.map((val, index) => {
                return (
                  <div
                    key={val.id}
                    className="cat-list flex items-center justify-between mt-4 mb-2 py-2 px-2 border rounded-md"
                  >
                    <div className="img">
                      <img src={val.image} alt="" className="w-7" />
                    </div>
                    <NavLink to={`/cat/${val.cat_name.toLowerCase()}`}>
                      <div className="title">{val.cat_name}</div>
                    </NavLink>

                    <div className="qty bg-[#3bb77d9f] w-4 h-4 rounded-full flex items-center justify-center p-[10px] text-xs">
                      {val.items.length}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cards shadow-xl rounded-lg max-h-[rem] overflow-hidden px-4 ">
              <div className="hd border-b-2 py-4">Fill by price</div>
              <div className="range">
                <Box sx={{ width: 240 }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color="success"
                    min={0}
                    max={60000}
                    step={1}
                  />
                </Box>
              </div>
              <div className="range-price flex justify-between">
                <div className="from font-semibold">
                  from <strong className="text-success">${value[0]}</strong>
                </div>
                <div className="to-price  font-semibold">
                  to <strong className="text-success">${value[1]}</strong>
                </div>
              </div>
              <div className="filter my-4 ">
                <h2 className="font-bold mb-3">Item Condition</h2>
                <ul className="max-h-[200px] overflow-y-scroll overflow-hidden -ml-2">
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> New
                    (1506)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} />
                    Refurbished (27)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> Used
                    (45)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> New
                    (1506)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} />
                    Refurbished (27)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> Used
                    (45)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> New
                    (1506)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} />
                    Refurbished (27)
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> Used
                    (45)
                  </li>
                </ul>
              </div>
              <div className="filter my-4 ">
                <h2 className="font-bold mb-2">color</h2>
                <ul className="max-h-[200px] overflow-y-scroll overflow-hidden -ml-2">
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> red
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> green
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> blue
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> red
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> green
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> blue
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> red
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> green
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> blue
                  </li>
                  <li>
                    {" "}
                    <Checkbox {...label} style={{ color: "#52AF77" }} /> orange
                  </li>
                </ul>
              </div>
              <Button>
                <FiFilter />
                filter
              </Button>
            </div>
            <img src={banner} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
