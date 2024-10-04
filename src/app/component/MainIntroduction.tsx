import React from 'react'
import Image from 'next/image'

export default function MainIntroduction({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-[812px] md:h-[768px] lg:h-[810px] relative">
      <Image
        src="/images/left_top_blue.png"
        width={819}
        height={293}
        className="absolute top-0 left-0 lg:w-[819px] md:w-[672px] w-[330px]"
        alt="left top blue image"
      />
      <Image
        src="/images/left_bottom_bluegreen.png"
        className="absolute bottom-0 left-0 lg:block hidden"
        width={321}
        height={321}
        alt={'left bottom bluegreen image'}
      />
      <div className="absolute right-0 bottom-0 lg:w-[1057px] md:w-[768px] w-[509px] h-auto">
        <Image
          src="/images/right_bottom_green.png"
          width={1057}
          height={625}
          className=""
          alt="left top blue image"
        />
      </div>
      <Image
        src="/images/right_bottom_blue.png"
        width={325}
        height={325}
        className="absolute right-0 bottom-0 w-[283px] h-[282px] md:w-[337px] md:h-[309px]"
        alt="right_bottom_blue image"
      />

      <div className="absolute gap-[30px] flex flex-col w-full h-full text-center justify-center items-center">
        {children}
      </div>
    </div>
  )
}
