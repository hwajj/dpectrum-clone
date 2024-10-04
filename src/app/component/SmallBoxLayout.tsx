import React from "react";

const SmallBoxLayout = ({ children, className, bgColor }) => {
  return (
    <div
      className={`w-full flex items-center justify-center md:w-[166px] lg:h-[248px] lg:w-[248px] min-h-[165px] rounded-sm ${bgColor} ${className}`}
    >
      {children}
    </div>
  );
};
export default SmallBoxLayout;
