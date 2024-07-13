import Image from "next/image";

import ShoppingWhite from "../icons/ShoppingWhite.png"

const AddToCartButton = ({ color, gradient, onClick }) => {
  return (
    <button
      className={`flex w-[309px] h-[59px] justify-center my-4 bg-[#1D364D] font-semibold text-[16px] py-4 rounded-3xl ${gradient ? gradient : ""} ${gradient ? "text-[#1D364D]" : "text-white"}`}
      onClick={onClick}
      style={{ backgroundColor: gradient ? "transparent" : color }}
      type="submit"
    >
      <Image src={ShoppingWhite} alt="Shopping White" width={20} height={20} className="me-2" />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
