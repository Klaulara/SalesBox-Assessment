import Header from "./components/Header/Header";
import PrevShirt from "./components/Cards/ShirtPrevCard";
import TitleBox from "./components/Cards/ProductTitleBox";

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
        <PrevShirt shirt={shirt}/>
        <TitleBox />
      </div>
      
    </div>
  );
}