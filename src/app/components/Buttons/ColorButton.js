import React from 'react'

const ColorButton = ({ color, gradient, value, selectedValue, onChange }) => {

    const handleClick = () => {
        onChange(value);
    };

  return (
    <div 
      className={`w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer border-2 transition-all ${
        selectedValue === value ? 'border-black' : 'border-white'
      } ${gradient ? gradient : ''}`}
      onClick={handleClick}
      style={{ backgroundColor: gradient ? 'transparent' : color }}
      >
        {selectedValue === value && (
        <span className="text-white text-2xl">✔</span>
      )}
    </div>
  )
}

export default ColorButton