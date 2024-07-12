import { useState } from "react";
import Image from "next/image";

const CartModal = ({ setModal, cart }) => {

  const [cartEmpty] = useState(cart.length === 0);


  const handleClose = () => {
    setModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-end mt-[90px] bg-gray-700 bg-opacity-75 z-50 ">
      <div className="bg-white w-[450px] h-[500px] me-20 rounded-2xl">
        <div>
          <button onClick={handleClose}>
            <p className="text-black">Cerrar modal</p>
          </button>
          <div className="text-black text-center">My Cart</div>
        </div>
        <div>
          
            {cartEmpty ? (
              <div>
                <p className="text-black text-center">Cart is empty</p>
              </div>
            ) : (
              <div>
            {cart.map((item, index) => (
              <div
                className="flex border border-gray-500 m-4 rounded-xl"
                key={index}
              >
                <div className="border border-gray-500 m-2 rounded-xl">
                  <Image src={item.image} alt={item.name} width={150} />
                </div>
                <div className="w-full ">
                  <div className="m-2">
                    <p className="text-black">{item.name}</p>
                    <p className="text-black">{item.size}</p>
                  </div>
                  <div className="flex justify-between m-2 me-4">
                    <p className="text-black">${item.price}</p>
                    <p className="text-black">{item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
            )}
          
        </div>
        <div className="flex justify-between m-4">
            <p className="text-black">Total</p>
            <p className="text-black">${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
        </div>
        <button>
            
        </button>
      </div>
    </div>
  );
};

export default CartModal;
