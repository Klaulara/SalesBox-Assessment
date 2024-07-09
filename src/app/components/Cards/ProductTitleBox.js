import Image from "next/image";
import Heart from "/src/app/components/icons/Heart.png";

const TitleBox = () => {
  return (
    <main className="flex w-[582px] justify-between">
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
        <div className="w-[34px] h-[34px] bg-[#EDF0F8] rounded-lg"></div>
        <div className="w-[34px] h-[34px] bg-[#EDF0F8] rounded-lg"></div>
      </div>
    </main>
  );
};

export default TitleBox;
