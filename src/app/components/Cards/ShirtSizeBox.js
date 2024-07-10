const ShirtSizeBox = () => {
  return (
    <div>
      <p className="text-[#B9BBBF] font-medium text-[16px]">Choose a Size</p>
      <div className="flex">
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            checked
            id="bordered-radio-1"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-radio-1"
            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Small
          </label>
        </div>
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-radio-2"
            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Medium
          </label>
        </div>
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-radio-2"
            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Large
          </label>
        </div>
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-radio-2"
            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Extra Large
          </label>
        </div>
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-radio-2"
            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            XXL
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShirtSizeBox;
