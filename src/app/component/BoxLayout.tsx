import React from "react";

function BoxLayout({ children, className, bgGray }) {
  return (
    <div
      className={`${bgGray ? "bg-lightGray" : ""} 
      ${className.includes("col-span-2") ? "w-[330px]" : "w-[165px]"}
      flex items-center justify-center lg:w-[334px] lg:min-h-[334px] md:w-[224px] md:min-h-[224px] min-h-[165px]  rounded-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default BoxLayout;
