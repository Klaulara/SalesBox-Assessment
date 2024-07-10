"use client";

import { useState } from "react";
import Image from "next/image";

import grayShirt from "../Images/grayshirt.png";
import whiteShirt from "../Images/whiteshirt.png";
import yellowShirt from "../Images/yellowshirt.png";
import blueShirt from "../Images/blueshirt.png";
import redShirt from "../Images/redshirt.png";
import purpleShirt from "../Images/purpleshirt.png";

import arrowBack from "/src/app/components/icons/ArrowBack.png";
import arrowForward from "/src/app/components/icons/ArrowForward.png";

const images = [
    { src: grayShirt, alt: 'gray shirt' },
    { src: whiteShirt, alt: 'white shirt' },
    { src: yellowShirt, alt: 'yellow shirt' },
    { src: blueShirt, alt: 'blue shirt' },
    { src: redShirt, alt: 'red shirt' },
    { src: purpleShirt, alt: 'purple shirt' },
  ];
  
  const ShowShirtSlide = () => {
    const [index, setIndex] = useState(0);
  
    const nextSlide = () => {
      if (index < images.length - 1) {
        setIndex(index + 1);
      }
    };
  
    const prevSlide = () => {
      if (index > 0) {
        setIndex(index - 1);
      }
    };

    const handleClick = (e) => {
        console.log(e.target.alt)
    }
  
    return (
      <div className="flex w-[587px] ms-20">
        <button
          className="left-0 top-1/2 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <Image src={arrowBack} alt="back" />
        </button>
        <div className="flex w-[520px] h-[115px] overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${index * 115}px)` }}
            onClick={handleClick}
          >
            {images.map((img, idx) => (
              <Image key={idx} src={img.src} alt={img.alt} className="w-[115px] h-[115px]" />
            ))}
          </div>
        </div>
        <button
          className="right-0 top-1/2 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <Image src={arrowForward} alt="forward" />
        </button>
      </div>
    );
  };


export default ShowShirtSlide