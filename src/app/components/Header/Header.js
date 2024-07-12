import Image from "next/image";
import shopingCart from "../icons/Shopping.png";

const Header = ({ setModal }) => { 

    const handleModal = () => {
        setModal(true);
      }

    return (
          <div className="flex w-full h-fit justify-between py-5 px-20 border-b">
            <h1 className="text-4xl font-extrabold text-[#1D364D] italic">Company</h1>
            <div className="flex w-fit">
              <div className="w-[50px] h-[50px] bg-[#F5F1EE] rounded-full p-4 z-0">
                <Image src={shopingCart} alt="shoping cart" className="" onClick={handleModal} />
              </div>
              <div className="w-[20px] h-[20px] bg-[#1D364D] rounded-full z-10 -ms-4" >
                <p className="text-sm ms-1">3</p>
              </div>
            </div>
          </div>
      );
    }

export default Header; 