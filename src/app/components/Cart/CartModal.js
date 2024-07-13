import { useState } from "react";
import Image from "next/image";

const CartModal = ({ setModal, cart, setCart }) => {
  const [cartEmpty] = useState(cart.length === 0);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);  

  const handleClose = () => {
    setModal(false);
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, itemIndex) => itemIndex !== index);
    setCart(newCart);
  }

  const decreaseQuantity = (index) => {
    const newCart = cart.map((item, itemIndex) => {
      if (itemIndex === index) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(newCart);
  };

  const increaseQuantity = (index) => {
    const newCart = cart.map((item, itemIndex) => {
      if (itemIndex === index) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(newCart);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center md:justify-end mt-[90px] bg-gray-700 bg-opacity-75 z-40 ">
      <div className="bg-white w-full h-3/4 m-20 md:w-[450px] md:h-[500px] me-20 rounded-2xl overflow-auto" >
        <div className="ms-5 mt-5 border border-black rounded-full w-6 h-6 ps-1 pb-1">
          <button onClick={handleClose}>
            <p className="text-[#3A4980] font-bold">x</p>
          </button>
        </div>
        <div>
          <div className="text-[#3A4980] font-semibold text-[28px] text-center">
            My Cart
          </div>
          {cartEmpty ? (
            <div>
              <p className="text-[#3A4980] font-bold text-center">
                Cart is empty
              </p>
            </div>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div
                  className="flex border border-[#E2E2E2] m-4 rounded-xl"
                  key={index}
                >
                  <button className="bg-red-600 rounded-full w-6 h-6 z-50" onClick={()=>removeItem(index)}>
                    X
                  </button>
                  <div className="border border-[#E2E2E2] m-2 rounded-xl">
                    <Image src={item.image} alt={item.name} width={150} />
                  </div>
                  <div className="w-full ">
                    <div className="m-2">
                      <p className="text-[#3A4980] font-semibold text-[16px]">
                        {item.name}
                      </p>
                      <p className="text-[#726C6C] font-medium text-[13px]">
                        {item.size}
                      </p>
                    </div>
                    <div className="flex justify-between m-2 me-4">
                      <p className="text-[#726C6C] font-semibold text-[14px]">
                        ${item.price}
                      </p>
                      <p className="text-black">{item.quantity}</p>
                      <div className="flex">
                        <button className="bg-black" onClick={()=>decreaseQuantity(index)}>-</button>
                        <button className="bg-black" onClick={()=>increaseQuantity(index)}>+</button>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <hr />
        <div className="flex justify-between m-4 sticky">
          <p className="text-[#726C6C] font-bold text-[14px]">Total</p>
          <p className="text-[#726C6C] font-medium text-[14px]">
            ${total.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-center mb-2">
          <button className="bg-[#3A4980] w-[325px] h-[59px] rounded-3xl">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
