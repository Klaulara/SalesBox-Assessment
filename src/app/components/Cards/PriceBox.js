const PriceBox = ({ price }) => {
    return (
        <div className="flex">
            <span className="text-[#1D364D] font-bold text-[34px]">${price}</span>
            <span className="text-black opacity-50 line-through text-[21px]">$89.95</span>
        </div>
    );
    };

export default PriceBox;