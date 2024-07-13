import Image from "next/image";
import Heart from "/src/app/components/icons/Heart.png";
import Bookmark from "/src/app/components/icons/Bookmark.png";
import Share from "/src/app/components/icons/Share.png";

import LineDivisor from "../Divisor/LineDivisor";

const TitleBox = () => {
  return (
    <>
    <div className="flex w-fit px-60 md:px-0 md:w-[582px] justify-between mt-10 mb-6">
      <div>
        <p className="text-[28px] font-semibold text-black">Polo Shirt</p>
        <p className="text-[#B9BBBF] font-normal">Teixeira Design Studio</p>
      </div>
      <div className="flex gap-3">
        <div className="flex w-[76px] h-[34px] bg-[#FFF0F0] rounded-lg">
          <div className="w-[20px] h-[20px] py-[7px]">
            <Image src={Heart} alt="Heart" className="ms-[10px]"/>
          </div>
          <p className="text-[#D46F77] font-semibold ms-[14px] pt-1 ">109</p>
        </div>
        <div className="w-[34px] h-[34px] bg-[#EDF0F8] rounded-lg py-[7px] px-[10px]">
            <Image src={Bookmark} alt="Heart" />
        </div>
        <div className="w-[34px] h-[34px] bg-[#EDF0F8] rounded-lg py-[9px] px-[10px]">
            <Image src={Share} alt="Heart"/>
        </div>
      </div>
    </div>
    <LineDivisor />
    </>
  );
};

export default TitleBox;
