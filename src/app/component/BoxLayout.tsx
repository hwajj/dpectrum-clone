import React from 'react'
interface BoxLayoutProps {
  children: React.ReactNode
  className?: string
  bgGray?: boolean
}

export default function BoxLayout({
  children,
  className,
  bgGray,
}: BoxLayoutProps) {
  return (
    <div
      className={`${bgGray ? 'bg-lightGray' : ''} 
      ${className?.includes('col-span-2') ? 'w-full py-[50px] sm:w-[335px]' : 'w-full sm:w-[165px]'}
      flex items-center justify-center lg:w-[334px] lg:min-h-[334px] md:w-[224px] md:min-h-[224px] min-h-[165px]  rounded-sm ${className}`}
    >
      {children}
    </div>
  )
}
