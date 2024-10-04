"use client";

import CompanyIntroduction from "@/app/component/CompanyIntroduction";

import { useState } from "react";
import ServiceArea from "@/app/component/ServiceArea";

export default function MainTabContent() {
  const [isCompanyIntroduction, setIsCompanyIntroduction] = useState(true);
  return (
    <>
      {/* 탭 메뉴 */}
      <div className="h-[70px] lg:pl-[200px] md:pl-10 pl-4 font-bold items-center justify-start border-b-[1px] border-bottomGray gap-[30px] flex w-full font-pretendard text-[20px]">
        <p
          onClick={() => setIsCompanyIntroduction(false)}
          className={`${isCompanyIntroduction ? "font-light text-mediumGray" : "font-black"} cursor-pointer`}
        >
          서비스 분야
        </p>
        <p
          onClick={() => setIsCompanyIntroduction(true)}
          className={`${isCompanyIntroduction ? "font-black" : "font-light text-mediumGray"} cursor-pointer`}
        >
          회사 소개
        </p>
      </div>

      {/* 탭에 따른 컴포넌트 전환 */}
      <div className="mt-8">
        {isCompanyIntroduction ? <CompanyIntroduction /> : <ServiceArea />}
      </div>
    </>
  );
}
