"use client";

import { useState } from "react";

import LineDivisor from "../Divisor/LineDivisor";

const ShirtSizeBox = ({ setSize }) => {

  const [selectedSize, setSelectedSize] = useState('Small');

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    setSize(e.target.value);
  }

  return (
    <>
    <div className="my-8">
      <p className="text-[#B9BBBF] font-medium text-[16px]">Choose a Size</p>
      <div className="flex">
        <div className="flex h-7 items-center ps-2 bg-[#B9BBBF] rounded me-2">
          <label className="w-full py-2 mx-2 text-sm font-medium text-[#726C6C]" >
          <input
            type="radio"
            value="Small"
            checked={selectedSize === 'Small'}
            onChange={handleSizeChange}
          />
          Small
        </label>
        
        </div>
        <div className="flex h-7 items-center ps-2 bg-[#B9BBBF] rounded me-2">
        <label className="w-full py-2 mx-2 text-sm font-medium text-[#726C6C]" >
          <input
            type="radio"
            value="Medium"
            checked={selectedSize === 'Medium'}
            onChange={handleSizeChange}
          />
          Medium
        </label>
        </div>
        <div className="flex h-7 items-center ps-2 bg-[#B9BBBF] rounded me-2">
        <label className="w-full py-2 mx-2 text-sm font-medium text-[#726C6C]" >
          <input
            type="radio"
            value="Large"
            checked={selectedSize === 'Large'}
            onChange={handleSizeChange}
          />
          Large
        </label>
        </div>
        <div className="flex h-7 items-center ps-2 bg-[#B9BBBF] rounded me-2">
        <label className="w-full py-2 mx-2 text-sm font-medium text-[#726C6C]" >
          <input
            type="radio"
            value="Extra large"
            checked={selectedSize === 'Extra large'}
            onChange={handleSizeChange}
          />
          Extra Large
        </label>
        </div>
        <div className="flex h-7 items-center ps-2 bg-[#B9BBBF] rounded me-2">
        <label className="w-full py-2 mx-2 text-sm font-medium text-[#726C6C]" >
          <input
            type="radio"
            value="XXL"
            checked={selectedSize === 'XXL'}
            onChange={handleSizeChange}
          />
          XXL
        </label>
        </div>
      </div>
    </div>
    <LineDivisor />
    </>
  );
};

export default ShirtSizeBox;
