"use client";

import { useState } from "react";
import Image from "next/image";

import CustomVideo from "../VideoComponent/CustomVideo";

import check from "../icons/Check.png";


const DescriptionBox = () => {
  const [description, setDesription] = useState(true);

  const handleClickShowcase = () => {
    setDesription(false);
  };

  const handleClickDescription = () => {
    setDesription(true);
  };

  return (
    <div className="w-[1279px] ms-20">
      {description ? (
        <>
          <div className="text-sm font-medium text-center text-gray-500 border-b-4 border-[#EAECF0]">
            <ul className="flex flex-wrap -mb-1">
              <li className="me-2">
                <p className="inline-block p-4 active border-b-4 border-[#EAECF0] text-[#164C96]  dark:hover:text-gray-300">
                  Description
                </p>
              </li>
              <li className="me-2" onClick={handleClickShowcase}>
                <p className="inline-block p-4 active border-b-4 border-[#EAECF0]  dark:hover:text-gray-300">
                  Showcase
                </p>
              </li>
            </ul>
          </div>
          <div className="w-[1088px] h-[544px]">
            <div>
              <p className="font-bold text-[24px] text-[#344054]">
                Product Description
              </p>
              <p className="font-normal text-[16px] text-[#667085]">
                When it&apos;s colder than the far side of the moon and spitting
                rain too, you&apos;ve still got to look good. From
                water-repellent leather to a rugged outsole, the Lunar Force 1
                adapts AF-1 style, so you can keep your flame burning when the
                weather hits. Metal lace hardware and extended tongue bring
                mountain boot toughness, while the star-studded toe design gives
                your look the edge
              </p>
            </div>
            <div>
              <p className="font-bold text-[24px] text-[#344054]">Benefits</p>
              <ul>
                <li className="flex">
                  <div className="w-[20px] h-[20px] bg-[#E7F4FC] rounded-full p-1">
                    <Image src={check} alt="check" />
                  </div>
                  <p className="font-normal text-[16px] text-[#667085]">
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
                  </p>
                </li>
                <li className="flex">
                  <div className="w-[20px] h-[20px] bg-[#E7F4FC] rounded-full p-1">
                    <Image src={check} alt="check" />
                  </div>
                  <p className="font-normal text-[16px] text-[#667085]">
                    Water-repellent finish and internal membrane help keep your
                    feet dry.
                  </p>
                </li>
                <li className="flex">
                  <div className="w-[20px] h-[20px] bg-[#E7F4FC] rounded-full p-1">
                    <Image src={check} alt="check" />
                  </div>
                  <p className="font-normal text-[16px] text-[#667085]">
                    Toe piece with star pattern adds durability.
                  </p>
                </li>
                <li className="flex">
                  <div className="w-[20px] h-[20px] bg-[#E7F4FC] rounded-full p-1">
                    <Image src={check} alt="check" />
                  </div>
                  <p className="font-normal text-[16px] text-[#667085]">
                    Synthetic insulation helps keep you warm.
                  </p>
                </li>
                <li className="flex">
                  <div className="w-[20px] h-[20px] bg-[#E7F4FC] rounded-full p-1">
                    <Image src={check} alt="check" />
                  </div>
                  <p className="font-normal text-[16px] text-[#667085]">
                    Originally designed for performance hoops, the Air unit
                    delivers lightweight cushioning.
                  </p>
                </li>
                <li className="flex">
                  <div className="w-[20px] h-[20px] bg-[#E7F4FC] rounded-full p-1">
                    <Image src={check} alt="check" />
                  </div>
                  <p className="font-normal text-[16px] text-[#667085]">
                    Plush tongue wraps over the ankle to help keep out the
                    moisture and cold.
                  </p>
                </li>
                <li className="flex">
                  <div className="w-[20px] h-[20px] bg-[#E7F4FC] rounded-full p-1">
                    <Image src={check} alt="check" />
                  </div>
                  <p className="font-normal text-[16px] text-[#667085]">
                    Rubber outsole with aggressive traction pattern adds durable
                    grip.
                  </p>
                </li>
                <li className="flex">
                  <div className="w-[20px] h-[20px] bg-[#E7F4FC] rounded-full p-1">
                    <Image src={check} alt="check" />
                  </div>
                  <p className="font-normal text-[16px] text-[#667085]">
                    Durable leather is easily cleanable so you can keep your
                    look fresh.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="text-sm font-medium text-center text-gray-500 border-b-4 border-[#EAECF0]">
          <ul className="flex flex-wrap -mb-1">
            <li className="me-2" onClick={handleClickDescription}>
              <p className="inline-block p-4 active border-b-4 border-[#EAECF0]  dark:hover:text-gray-300">
                Description
              </p>
            </li>
            <li className="me-2">
              <p className="inline-block p-4 active border-b-4 border-[#EAECF0]  dark:hover:text-gray-300">
                Showcase
              </p>
            </li>
          </ul>
        </div>
        <div className="w-[1088px] h-[544px]">
            <div className="w-[1030px] h-[406px] m-20">
                <CustomVideo />
            </div>
            
        </div>
        </>
      )}
    </div>
  );
};

export default DescriptionBox;
