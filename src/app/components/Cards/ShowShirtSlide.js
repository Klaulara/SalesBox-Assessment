"use client";

import { useState } from "react";
import Image from "next/image";

import arrowBack from "/src/app/components/icons/ArrowBack.png";
import arrowForward from "/src/app/components/icons/ArrowForward.png";

  
  const ShowShirtSlide = ({ images, setColor }) => {
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
      setColor(e.target.alt)
    }
  
    return (
      <div className="flex items-center justify-center w-full px-60 md:px-0 md:w-[587px] ms-20 mt-10">
        <button
          onClick={prevSlide}
        >
          <Image src={arrowBack} alt="back" />
        </button>
        <div className="flex w-full md:w-[520px] h-[115px] overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${index * 115}px)` }}
            onClick={handleClick}
          >
            {images.map((img, idx) => (
              <Image key={idx} src={img.src} alt={img.alt} className="w-[520px] h-[115px]" />
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
        >
          <Image src={arrowForward} alt="forward" />
        </button>
      </div>
    );
  };


export default ShowShirtSlide