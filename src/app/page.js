"use client";

import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import PrevShirt from "./components/Cards/ShirtPrevCard";
import TitleBox from "./components/Cards/ProductTitleBox";
import PriceBox from "./components/Cards/PriceBox";
import ColorBox from "./components/Cards/ColorBox";
import ShirtSizeBox from "./components/Cards/ShirtSizeBox";
import AddToCartBox from "./components/Cards/AddToCartBox";
import ShowShirtSlide from "./components/Cards/ShowShirtSlide";
import DescriptionBox from "./components/Cards/DescriptionBox";
import CartModal from "./components/Cart/CartModal";

import blackShirt from "../app/components/Images/blackshirt.png";
import whiteShirt from "../app/components/Images/whiteshirt.png";
import yellowShirt from "../app/components/Images/yellowshirt.png";
import blueShirt from "../app/components/Images/blueshirt.png";
import redShirt from "../app/components/Images/redshirt.png";
import purpleShirt from "../app/components/Images/purpleshirt.png";

const images = [
  { src: blackShirt, alt: "black shirt", name: "Black Polo Shirt" },
  { src: whiteShirt, alt: "white shirt", name: "White Polo Shirt"},
  { src: yellowShirt, alt: "yellow shirt", name: "Yellow Polo Shirt"},
  { src: blueShirt, alt: "blue shirt", name: "Blue Polo Shirt"},
  { src: redShirt, alt: "red shirt", name: "Red Polo Shirt"},
  { src: purpleShirt, alt: "purple shirt", name: "Purple Polo Shirt"},
];

const prices = [
  { size: "Small", price: 71.56 },
  { size: "Medium", price: 75.0 },
  { size: "Large", price: 80.25 },
  { size: "Extra large", price: 85.5 },
  { size: "XXL", price: 89.95 },
];

export default function Home() {
  const [color, setColor] = useState("black shirt");
  const [selectedShirt, setSelectedShirt] = useState({
    name: color,
    image: images[0].src,
  });
  const [size, setSize] = useState("Small");
  const [price, setPrice] = useState(71.56);
  const [buyColor, setBuyColor] = useState("black shirt");
  const [buyName, setBuyName] = useState("Black Polo Shirt");
  const [buyImage, setBuyImage] = useState(blackShirt);

  //find cart from local storage
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [modal, setModal] = useState(false);

  useEffect(() => {
    setSelectedShirt({
      name: color,
      image: images.find((img) => img.alt === color).src,
    });
  }, [color]);

  useEffect(() => {
    setPrice(prices.find((p) => p.size === size).price);
  }, [size]);

  useEffect(() => {
    setBuyName(images.find((img) => img.alt === buyColor).name);
    setBuyImage(images.find((img) => img.alt === buyColor).src);
  }, [buyColor]);

  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  return (
    <main className="w-fit">
      <div>
        <Header setModal={setModal} />
        <div className="w-full md:flex md:gap-4">
          <div className="w-full">
            <PrevShirt shirt={selectedShirt} />
            <ShowShirtSlide images={images} setColor={setColor} />
          </div>
          <div className="w-full">
            <TitleBox />
            <PriceBox price={price} />
            <ColorBox setBuyColor={setBuyColor} />
            <ShirtSizeBox setSize={setSize} />
            <AddToCartBox buyName={buyName} buyImage={buyImage} price={price} size={size} setModal={setModal} setCart={setCart} buyColor={buyColor} />
          </div>
        </div>
        <DescriptionBox />
        {modal && <CartModal setModal={setModal} cart={cart} setCart={setCart} />}
      </div>
      
    </main>
  );
}
