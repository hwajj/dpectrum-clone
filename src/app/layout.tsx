import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Dpectrum',
  description: '외주개발 실패하지 않는 지름길',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={'h-full '}>
      <body className={`h-full relative`}>
        <div className="z-20 bg-white px-5 lg:px-10 py-4 w-full flex justify-between fixed left-0 top-0 h-[80px] md:h-[120px] lg:h-[140px] ">
          <Image
            src="/images/logo_B.svg"
            width={170}
            height={40}
            alt={'logo'}
            className={'w-[120px] lg:w-[170px] cursor-pointer'}
          ></Image>

          <Image
            src="/images/menu_white.svg"
            width={40}
            height={40}
            className={'w-[30px] md:w-[40px] cursor-pointer'}
            alt={'logo'}
          ></Image>
        </div>
        <div className="pt-[80px] md:pt-[120px] lg:pt-[140px]">{children}</div>
      </body>
    </html>
  )
}
