import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import Dropdown from "../SelectDropdown/Dropdown";
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import "./Header.css";
import compare from "../../assets/icon-compare.svg";
import heart from "../../assets/icon-heart.svg";
import cart from "../../assets/icon-cart.svg";
import user from "../../assets/icon-user.svg";
import { BiUser } from "react-icons/bi";
import Button from "@mui/material/Button";
import { CiHeart } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import ClickAwayListener from "react-click-away-listener";
import { useCartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";

function Header() {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const { cart } = useCartContext();
  const [categories, setCategories] = useState([
    "All categories",
    "Dairy Milk",
    "bread & fruit",
    "fresh food",
    "vegetable",
    "baking material",
    "fast food",
    "pet food & toy",
    "fresh food",
    "clothing & beauty",
    "Wines & Drink",
  ]);

  const countryList = [];
  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      await axios
        .get("https://countriesnow.space/api/v0.1/countries/")
        .then((res) => {
          if (res !== null) {
            res.data.data.map((val, ind) => {
              countryList.push(val.country);
              //   console.log(val.country);
            });
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header className="container-fluid flex justify-between item-center gap-7  py-4 m-auto w-full px-8 boder ">
        <div className="header-logo">
          <img src={logo} alt="" className="w-40" />
        </div>
        <div className="header-search flex items-center box-border  gap- w-[40%] h-[45px] border ml-auto border-green-200 px- bg-[#cc] relative">
          <Dropdown
            categoriesItems={categories}
            placeholder={"all categories"}
          />
          <span className="mx-4">|</span>
          <div className="inp-box w-[85%] flex items-center z-20">
            <input
              type="search"
              className="w-full border-none outline-none p- h-[40px] "
              placeholder="search items here..."
            />
            <div className="search-icon text-2xl text-[#ccc]">
              <IoSearchOutline />
            </div>
          </div>
        </div>
        <div className="location-sec shadow-md w-[200px] max-h-[45px] flex items-center  gap-5 pl-8 relative text-center">
          <FaLocationDot />
          <Dropdown
            className="dropDown text-[#3BB77E]"
            categoriesItems={countryList}
            placeholder={"location"}
          />
        </div>

        <div className="header-icons flex items-center borer h-[45px] gap-6 ml-auto font-thin ">
          <div className="compare-icon flex items-center justify-center relative gap-2 ">
            <img src={compare} alt="" className="w-5 " />
            <div className="absolute flex items-center justify-center left-2 -top-2 bg-[#3BB77E] w-6 rounded-full text-white text-center h-6">
              0
            </div>
            <span>compare</span>
          </div>
          <div className="wishlist-icon flex items-center justify-center relative gap-2 ">
            <img src={heart} alt="" className="w-5 " />
            <div className="absolute flex items-center justify-center left-2 -top-2 bg-[#3BB77E] w-6 rounded-full text-white text-center h-6">
              0
            </div>
            <span>wishlist</span>
          </div>
          <NavLink to="/cart">
            <div className="cart-icon flex items-center justify-center relative gap-2 ">
              <img src={cart} alt="" className="w-5 " />
              <div className="absolute flex items-center justify-center left-2 -top-2 bg-[#3BB77E]  rounded-full text-white text-center font-bold w-6 h-6">
                {cart.length}
              </div>
              <span>cart</span>
            </div>
          </NavLink>
          <ClickAwayListener onClickAway={() => setAccountDropdown(false)}>
            <div
              className="user-icon flex items-center justify-center sticky gap-2 z-50 "
              onClick={() => setAccountDropdown(!accountDropdown)}
            >
              <img src={user} alt="" className="w-5 " />
              {/* <span className="absolute flex items-center justify-center left-2 -top-2 bg-[#3BB77E] w-4 rounded-full text-white text-center h-4">
                0
              </span> */}
              <span>account</span>

              {accountDropdown === true && (
                <div className="account-dropdown z-50 bg-[#FFFFFf] w-[200px] h-[auto]  absolute top-[200%] shadow-md right-0 py-4 ">
                  <ul className="w-full ">
                    <li className="pb-2 pl-2  ">
                      <Button className="" variant="text">
                        <BiUser />
                        &nbsp;&nbsp;my account
                      </Button>
                    </li>
                    <li className="pb-2 pl-2  ">
                      <Button className="" variant="text">
                        <FaLocationDot />
                        &nbsp;&nbsp;order tracking
                      </Button>
                    </li>
                    <li className="pb-2 pl-2  ">
                      <Button className="" variant="text">
                        <CiHeart />
                        &nbsp;&nbsp;my wishlist
                      </Button>
                    </li>
                    <li className="pb-2 pl-2  ">
                      <Button className="" variant="text">
                        <IoSettingsOutline />
                        &nbsp;&nbsp;setting
                      </Button>
                    </li>
                    <li className="pb-2 pl-2  ">
                      <Button className="" variant="text">
                        <PiSignOut />
                        &nbsp;&nbsp;sign out
                      </Button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </ClickAwayListener>
        </div>
      </header>
    </>
  );
}

export default Header;
