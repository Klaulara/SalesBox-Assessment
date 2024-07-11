import LineDivisor from "../Divisor/LineDivisor";

const PriceBox = ({ price }) => {
  return (
    <>
      <div className="flex my-6">
        <span className="text-[#1D364D] font-bold text-[34px]">${price}</span>
        <span className="text-black opacity-50 line-through text-[21px]">
          $89.95
        </span>
      </div>
      <LineDivisor />
    </>
  );
};

export default PriceBox;
