import React, { useState, useEffect } from "react";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import "./Dropdown.css";
import ClickAwayListener from "react-click-away-listener";

function Dropdown({ categoriesItems, placeholder }) {
  const [dropdown, setDropdown] = useState(false);
  const [selectedCategori, setSelectedCategori] = useState(placeholder);
  const [bgActive, setBgActive] = useState(0);
  // console.log(selectedCategori)

  const selectCategori = (val, index) => {
    setSelectedCategori(val);
    setBgActive(index);
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setDropdown(false)}>
        <div
          className="categories w-full max-w-[22%] text-center "
          onClick={() => setDropdown(!dropdown)}
        >
          {selectedCategori.length > 14
            ? selectedCategori.substr(0, 8) + "..."
            : selectedCategori}
          {/* {selectedCategori.length>14 ? selectedCategori.substr(0,3)+"...": selectedCategori} */}
          <div className="arrow-icon absolute top-1.5 left-[60%]">
            {/* {dropdown ? <IoMdArrowDropdown /> : <IoMdArrowDropright />} */}
          </div>

          {dropdown === true && (
            <div className="dropdown-container z-50 bg-[#FFFFFF] text-left w-[200px] absolute -left4  top-[100%] shadow-2xl bg-[#cc] py-4 px-1 max-h-[300px] overflow-y-scroll overflow-x-hidden ">
              <>
                <div className="search-box fixed z-50">
                  <input
                    type="text"
                    placeholder="search here.."
                    className="border-green-200 w-[170px] border outline-none h-8 pl-4 mx-2"
                  />
                </div>

                <ul className="mt-12 ml-2">
                  {categoriesItems.map((val, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => selectCategori(val, index)}
                        className={`${bgActive === index ? "active" : ""}`}
                      >
                        {val}
                      </li>
                    );
                  })}
                </ul>
              </>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </>
  );
}

export default Dropdown;
