import React from 'react'

export default function MainText({
  title,
  description,
}: {
  title: string | React.ReactNode
  description: string
}) {
  return (
    <div className=" flex flex-col justify-center items-center w-full">
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
  )
}
