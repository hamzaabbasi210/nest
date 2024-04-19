import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function QuantityBox({ amount, setIncrese, setDecrese, quantitty = 1 }) {
  return (
    <>
      <div className="quantity w-[6rem] flex border-[1.5px]  border-[#3BB77D]  rounded">
        <input
          type="number"
          className=" py-3 text-center w-[80%] border-none outline-none"
          value={quantitty}
        />
        <div className="arrows flex flex-col items-center justify-center">
          <FaAngleUp onClick={() => setIncrese()} />
          <FaAngleDown onClick={() => setDecrese()} />
        </div>
      </div>
    </>
  );
}

export default QuantityBox;
