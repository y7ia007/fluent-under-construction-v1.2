// TooltipComponent.js
import React, { useState } from 'react';

function TooltipComponent({ label, children }) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isTooltipVisible && <div className="tooltip">{label}</div>}
      {children}
    </div>
  );
}

export default TooltipComponent;
