import Image from "next/image";

const ShirtPrevCard = ({ shirt }) => {
  return (
    <div className="flex w-fit me-20 items-center justify-center md:w-[587px] h-[691px] bg-[#FFF] border border-[#EDF0F8] rounded-lg ms-20 mt-10">
      <div className="bg-transparent rounded-lg p-2">
        <Image src={shirt.image} alt={shirt.name} className="" />
      </div>
    </div>
  );
};

export default ShirtPrevCard;
