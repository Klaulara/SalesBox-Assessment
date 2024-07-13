"use client";

import { useState, useEffect } from "react";

import LineDivisor from "../Divisor/LineDivisor";

const PriceBox = ({ price }) => {

  const [showFullPrice, setShowFullPrice] = useState(true);

  useEffect(() => {
    if (price === 89.95) {
      setShowFullPrice(false);
    } else {
      setShowFullPrice(true);
    }
  }, [price]);


  return (
    <>
      <div className="flex w-fit px-60 md:px-0 my-6">
        <span className="text-[#1D364D] font-bold text-[34px]">${price}</span>
        {showFullPrice && (
        <span className="text-black opacity-50 line-through text-[21px]">
          $89.95
        </span>)}
      </div>
      <LineDivisor />
    </>
  );
};

export default PriceBox;
