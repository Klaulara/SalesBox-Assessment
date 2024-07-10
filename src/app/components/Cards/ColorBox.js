const ColorBox = () => {
    return (
        <div>
            <p className="text-[#B9BBBF] font-medium text-[16px]">Choose a Color</p>
            <div className="flex w-[444px] gap-3">
                <div className="bg-black rounded-full w-[64px] h-[64px]"></div>
                <div className="bg-gradient-to-b from-white to-[#CDCDCD] rounded-full w-[64px] h-[64px]"></div>
                <div className="bg-[#FFAC3C] rounded-full w-[64px] h-[64px]"></div>
                <div className="bg-[#0078B5] rounded-full w-[64px] h-[64px]"></div>
                <div className="bg-[#BB0043] rounded-full w-[64px] h-[64px]"></div>
                <div className="bg-[#5D21B7] rounded-full w-[64px] h-[64px]"></div>
            </div>
            
        </div>
    );
}

export default ColorBox;