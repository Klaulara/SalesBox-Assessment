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

import grayShirt from "../app/components/Images/grayshirt.png"
import whiteShirt from "../app/components/Images/whiteshirt.png";
import yellowShirt from "../app/components/Images/yellowshirt.png";
import blueShirt from "../app/components/Images/blueshirt.png";
import redShirt from "../app/components/Images/redshirt.png";
import purpleShirt from "../app/components/Images/purpleshirt.png";

const images = [
  { src: grayShirt, alt: 'black shirt' },
  { src: whiteShirt, alt: 'white shirt' },
  { src: yellowShirt, alt: 'yellow shirt' },
  { src: blueShirt, alt: 'blue shirt' },
  { src: redShirt, alt: 'red shirt' },
  { src: purpleShirt, alt: 'purple shirt' },
];

const prices = [
  {size: 'Small', price: 71.56},
  {size: 'Medium', price: 75.00},
  {size: 'Large', price: 80.25},
  {size: 'Extra large', price: 85.50},
  {size: 'XXL', price: 89.95},
]

export default function Home() {

  const [color, setColor] = useState("black shirt");
  const [selectedShirt, setSelectedShirt] = useState({name: color, image: images[0].src});
  const [size, setSize] = useState("Small");
  const [price, setPrice] = useState(71.56);
  const [buyColor, setBuyColor] = useState("black shirt");
  
  useEffect(() => {
    setSelectedShirt({name: color, image: images.find(img => img.alt === color).src})
  }, [color]);

  useEffect(() => {
    setPrice(prices.find(p => p.size === size).price)
  }, [size]);

  return (
    <div>
      <Header />
      <div className="flex w-fit gap-24">
        <div>
          <PrevShirt shirt={selectedShirt}/>
          <ShowShirtSlide images={images} setColor={setColor}/>
        </div>
        <div>
          <TitleBox />
          <PriceBox price={price} />
          <ColorBox setBuyColor={setBuyColor} />
          <ShirtSizeBox setSize={setSize} />
          <AddToCartBox buyColor={buyColor} price={price} size={size} />
        </div>
        
      </div>
      <DescriptionBox />
    </div>
  );
}