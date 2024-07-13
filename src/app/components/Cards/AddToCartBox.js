import { useState, useEffect } from "react";
import Image from "next/image";

import AddToCartButton from "../Buttons/AddtoCartButton";

import ShoppingRed from "../icons/ShoppingRed.png";
import Shipping from "../icons/Shipping.png";

const colors = [
  { color: "#000000", name: "black shirt" },
  { color: "#FFAC3C", name: "yellow shirt" },
  { color: "#0078B5", name: "blue shirt" },
  { color: "#BB0043", name: "red shirt" },
  { color: "#5D21B7", name: "purple shirt" },
];

const gradient = "bg-gradient-to-b from-white to-[#CDCDCD]";

const AddToCartBox = ({
  buyName,
  buyImage,
  price,
  size,
  setModal,
  setCart,
  buyColor,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedGradient, setSelectedGradient] = useState(false);
  const [selectedColor, setSelectedColor] = useState("black shirt");

  useEffect(() => {
    if (buyColor === "white shirt") {
      setSelectedGradient(true);
    } else {
      setSelectedColor(colors.find((c) => c.name === buyColor).color);
      setSelectedGradient(false);
    }
  }, [buyColor]);

  const handleClick = () => {
    setModal(true);
    setQuantity(1);
    setCart((prev) => [
      ...prev,
      {
        image: buyImage,
        name: buyName,
        price: price,
        size: size,
        quantity: quantity,
      },
    ]);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 15) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="w-full px-60 md:px-0">
      <div className="flex">
        <form className="flex justify-center max-w-xs mx-5">
          <div className="relative flex items-center max-w-[11rem]">
            <button
              type="button"
              className="bg-[#F3F3F3] rounded-s-3xl p-3 h-[59px]"
              onClick={handleDecrement}
            >
              <svg
                className="w-3 h-3 text-[#3A4980]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              className="bg-[#F3F3F3] h-[59px] font-medium text-center text-gray-900 text-sm w-full pb-1"
              defaultValue={quantity}
              required
            />
            <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse"></div>
            <button
              type="button"
              className="bg-[#F3F3F3] rounded-e-3xl p-3 h-[59px]"
              onClick={handleIncrement}
            >
              <svg
                className="w-3 h-3 text-[#3A4980]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </form>
        {selectedGradient ? (
          <AddToCartButton gradient={gradient} onClick={handleClick} />
        ) : (
          <AddToCartButton color={selectedColor} onClick={handleClick} />
        )}
      </div>
      <div className="w-[582px] h-[166px] border rounded-lg mt-4 p-4">
        <div className="flex my-3 h-[45px]">
          <div className="mx-4 mt-2">
            <Image src={Shipping} alt="Shipping" width={19} height={15} />
          </div>

          <div>
            <p className="font-bold text-[17px] text-[#1D364D]">
              Free Delivery
            </p>
            <p className="text-[14px] text-[#726C6C] underline">
              Enter your Postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className="border-b border-[#B9BBBF] w-fit md:w-[548px]"></div>
        <div className="flex  mt-3 h-[45px]">
          <div className="mx-4 mt-2">
            <Image
              src={ShoppingRed}
              alt="Shopping Red"
              width={19}
              height={15}
            />
          </div>
          <div>
            <p className="font-bold text-[17px] text-[#1D364D]">
              Return Delivery
            </p>
            <p className="text-[14px] text-[#726C6C]">
              Free 30 days Delivery Return.{" "}
              <span className="underline">Details</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartBox;
