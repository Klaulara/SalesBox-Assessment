"use client";

import Header from "./components/Header/Header";
import PrevShirt from "./components/Cards/ShirtPrevCard";
import TitleBox from "./components/Cards/ProductTitleBox";
import PriceBox from "./components/Cards/PriceBox";
import ColorBox from "./components/Cards/ColorBox";
import ShirtSizeBox from "./components/Cards/ShirtSizeBox";
import AddToCartBox from "./components/Cards/AddToCartBox";
import ShowShirtSlide from "./components/Cards/ShowShirtSlide";
import DescriptionBox from "./components/Cards/DescriptionBox";

import grayShirt from "/src/app/components/Images/grayshirt.png"

const shirt = {
  name: "Shirt",
  image: grayShirt,
};


export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex w-fit gap-24">
        <div>
          <PrevShirt shirt={shirt}/>
          <ShowShirtSlide />
        </div>
        <div>
          <TitleBox />
          <PriceBox price={71.56} />
          <ColorBox />
          <ShirtSizeBox />
          <AddToCartBox />
        </div>
        
      </div>
      <DescriptionBox />
    </div>
  );
}