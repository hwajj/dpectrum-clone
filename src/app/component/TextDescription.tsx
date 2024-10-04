import React from 'react'

export default function TitleDescription({
  title,
  boldPart,
  description,
}: {
  title: string
  boldPart: string
  description: string
  lineBreaks?: number
}) {
  const [beforeBold] = title.split(boldPart)
  return (
    <div className="px-5 text-center pb-20  leading-10 md:leading-[52px] lg:leading-[64px]">
      <h1 className="text-[34px] md:text-[44px] lg:text-[54px] font-light flex-row flex  justify-center flex-wrap ">
        {beforeBold}
        <span className="font-bold ml-3">{boldPart}</span>
      </h1>

      <p className={`mt-4 whitespace-pre-line font-light leading-relaxed`}>
        {description}
      </p>
    </div>
  )
}
