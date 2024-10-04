import React from "react";

interface MainTextProps {
  title: string | React.ReactNode;
  description: string;
}
const MainText = ({ title, description }: MainTextProps) => {
  return (
    <div className="absolute flex flex-col justify-center items-center w-full h-full">
      <h1
        className="font-bold leading-[40px] md:leading-[50px] lg:leading-[70px]  tracking-[-0.01em] text-center
          text-[34px] md:text-[44px] lg:text-[54px]  whitespace-pre-line"
      >
        {title}
      </h1>

      <p
        className={`px-5 mt-4 whitespace-pre-line font-light leading-relaxed text-[15px] md:text-[16px] lg:text-[18px]`}
      >
        {description}
      </p>
    </div>
  );
};

export default MainText;
