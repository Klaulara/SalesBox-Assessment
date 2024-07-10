const AddToCartBox = () => {
  return (
    <div>
      <div className="flex">
        <form class="max-w-xs mx-auto">
          <div class="relative flex items-center max-w-[11rem]">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="bedrooms-input"
              class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-2xl p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                class="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="bedrooms-input"
              data-input-counter
              data-input-counter-min="1"
              data-input-counter-max="5"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value="5"
              required
            />
            <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse"></div>
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="bedrooms-input"
              class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-2xl p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                class="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </form>
        <button
          type="submit"
          class="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Add to Cart
        </button>
      </div>
      <div className="w-[582px] h-[166px] border rounded-lg">
        <div>
            <p className="font-bold text-[17px] text-[#1D364D]">Free Delivery</p>
            <p className="text-[14px] text-[#726C6C] underline">Enter your Postal code for Delivery Availability</p>
        </div>
        <div>
            <p className="font-bold text-[17px] text-[#1D364D]">Return Delivery</p>
            <p className="text-[14px] text-[#726C6C]">Free 30 days Delivery Return. <span className="underline">Details</span></p>
        </div>
      </div>
    </div>
  );
};

export default AddToCartBox;
