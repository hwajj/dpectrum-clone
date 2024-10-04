import React from 'react'
import Image from 'next/image'
export default function Card({ title, year }: { title: string; year: string }) {
  return (
    <div className="border-b-[1px] border-lightGray p-4 flex justify-between items-center">
      <div>
        <span className="block text-gray-500 text-sm">{`@${year}`}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <Image
        alt={'arrow'}
        src={'/images/arrow.svg'}
        width={24}
        height={24}
        className="text-xl text-gray-700 cursor-pointer"
      />
    </div>
  )
}
