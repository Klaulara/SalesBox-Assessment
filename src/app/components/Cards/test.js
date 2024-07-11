import React, { useState } from 'react';

import ColorButton from '../Buttons/ColorButton';


const ColorButtonGroup = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleColorChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex space-x-2">
      <ColorButton
        color="#ff0000"
        value="red"
        selectedValue={selectedValue}
        onChange={handleColorChange}
      />
      <ColorButton
        color="#00ff00"
        value="green"
        selectedValue={selectedValue}
        onChange={handleColorChange}
      />
      <ColorButton
        color="#0000ff"
        value="blue"
        selectedValue={selectedValue}
        onChange={handleColorChange}
      />
      <ColorButton
        color="#ffff00"
        value="yellow"
        selectedValue={selectedValue}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorButtonGroup;