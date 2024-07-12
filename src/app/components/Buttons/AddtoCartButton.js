const AddToCartButton = ({ color, gradient, onClick }) => {
  return (
    <button
      className={`w-[309px] mt-4 bg-[#1D364D] font-semibold text-[16px] py-3 rounded-3xl ${gradient ? gradient : ""} ${gradient ? "text-[#1D364D]" : "text-white"}`}
      onClick={onClick}
      style={{ backgroundColor: gradient ? "transparent" : color }}
      type="submit"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
