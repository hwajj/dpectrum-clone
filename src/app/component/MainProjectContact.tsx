import React from 'react'
import Image from 'next/image'

export default function MainIntroduction({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative">
      <Image
        src="/images/right_top_green.png"
        width={692}
        height={248}
        className="absolute right-0 top-0 lg:w-[692px] md:w-[417px] w-[276px]"
        alt="left top blue image"
      />
      <Image
        src="/images/left_top_blue.png"
        width={819}
        height={293}
        className="absolute right-0 bottom-0 lg:w-[819px] md:w-[392px] w-[281px] scale-x-[-1] scale-y-[-1]"
        alt="left top blue image"
      />
      <Image
        src="/images/left_bottom_bluegreen.png"
        className="absolute bottom-0 left-0 md:block hidden lg:w-[320px] md:w-[205px]"
        width={321}
        height={321}
        alt={'left bottom bluegreen image'}
      />
      <div className="absolute gap-[30px] flex flex-col w-full h-full text-center justify-center items-center">
        {children}
      </div>
    </div>
  )
}
