import { useState } from "react";

import LineDivisor from "../Divisor/LineDivisor";
import ColorButton from "../Buttons/ColorButton";

const ColorBox = ({ setBuyColor }) => {

    const [selectedValue, setSelectedValue] = useState("black shirt");

    const handleColorChange = (value) => {
        setSelectedValue(value);
        setBuyColor(value);
    };


    return (
        <>
        <div className="w-full px-60 md:px-0 my-8">
            <p className="text-[#B9BBBF] font-medium text-[16px] mb-3">Choose a Color</p>
            <div className="flex w-[444px] gap-3">
                <ColorButton
                    color="#000000"
                    value="black shirt"
                    selectedValue={selectedValue}
                    onChange={handleColorChange}
                />
                <ColorButton
                    gradient="bg-gradient-to-b from-white to-[#CDCDCD]"
                    value="white shirt"
                    selectedValue={selectedValue}
                    onChange={handleColorChange}   
                />

                <ColorButton
                    color="#FFAC3C"
                    value="yellow shirt"
                    selectedValue={selectedValue}
                    onChange={handleColorChange}
                />

                <ColorButton
                    color="#0078B5"
                    value="blue shirt"
                    selectedValue={selectedValue}
                    onChange={handleColorChange}
                />

                <ColorButton
                    color="#BB0043"
                    value="red shirt"
                    selectedValue={selectedValue}
                    onChange={handleColorChange}
                />

                <ColorButton
                    color="#5D21B7"
                    value="purple shirt"
                    selectedValue={selectedValue}
                    onChange={handleColorChange}
                />
            </div>
            
        </div>
        <LineDivisor />
        </>
    );
}

export default ColorBox;