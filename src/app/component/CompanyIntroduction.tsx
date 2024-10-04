import TitleDescription from "@/app/component/TextDescription";
import BoxLayout from "@/app/component/BoxLayout";
import React from "react";
import SmallBoxLayout from "@/app/component/SmallBoxLayout";
import Image from "next/image";
import Card from "@/app/component/Card";

export default function CompanyIntroduction() {
  return (
    <div className="pt-[120px] pb-[150px] flex flex-col">
      <TitleDescription
        title={"우리는\n일합니다."}
        boldPart={"일합니다."}
        description={
          "디펙트럼은 디지털 경험속 모든 고객 경험에서의 가치를 추구합니다.\n" +
          "함께하는 모든 프로젝트에서 고객 경험의 여정을 올바른 길로 이끌어 줄 가이드가 되어드리겠습니다."
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-[11px] md:gap-2 gap-[5px] mb-[180px] lg:mb-[271px] mx-auto max-w-[1024px]">
        <BoxLayout className="order-1" bgGray={true}>
          {"그림 1"}
        </BoxLayout>
        <BoxLayout className="order-2" bgGray={true}>
          {"그림 2"}
        </BoxLayout>
        <BoxLayout className="order-3 col-span-2 md:col-span-1">
          <div
            className={
              "flex flex-col px-4 items-center justify-center md:items-startrt"
            }
          >
            <h1 className="text-[28px] md:text-[20px] lg:text-[28px] font-light">
              <span className="font-bold">{"정교한 컨설팅"}</span>
            </h1>

            <p
              className={`mt-4 whitespace-pre-line font-light text-[15px] md:text-[13px] lg:text-[16px] w-full`}
            >
              {
                "대표자가 프로젝트의 커뮤니케이션과 기획, 개발을 직접 진행하여 성공적인 프로젝트를 이끌어냅니다. 고객과의 원활한 소통을 통해 수정과 개선을 신속하게 반영하여 최상의 결과물을 제공합니다."
              }
            </p>
          </div>
        </BoxLayout>
        <BoxLayout className="order-4" bgGray={true}>
          {"노란상자"}
        </BoxLayout>
        <BoxLayout className="order-6 md:order-5 col-span-2 md:col-span-1">
          <div
            className={
              "flex flex-col px-4 items-center justify-center md:items-start"
            }
          >
            <h1 className="text-[28px] md:text-[20px] lg:text-[28px] font-light ">
              <span className="font-bold">{"완벽한 결과물"}</span>
            </h1>

            <p
              className={`mt-4 whitespace-pre-line font-light text-[15px] md:text-[13px] lg:text-[16px]`}
            >
              {
                "대표자가 프로젝트의 커뮤니케이션과 기획, 개발을 직접 진행하여 성공적인 프로젝트를 이끌어냅니다. 고객과의 원활한 소통을 통해 수정과 개선을 신속하게 반영하여 최상의 결과물을 제공합니다."
              }
            </p>
          </div>
        </BoxLayout>
        <BoxLayout className="order-7 md:order-5" bgGray={true}>
          {"초록상자 "}
        </BoxLayout>
        <BoxLayout className="md:order-7 order-5" bgGray={true}>
          {" 모바일"}
        </BoxLayout>
        <BoxLayout className="md:flex md:order-8 hidden" bgGray={true}>
          {"줄세개"}
        </BoxLayout>
        <BoxLayout className="md:flex md:order-9 hidden" bgGray={true}>
          {"모바일+시계"}
        </BoxLayout>
        <BoxLayout className="order-9 md:order-11" bgGray={true}>
          {"코드 모양 "}
        </BoxLayout>
        <BoxLayout className="order-9 md:order-10 col-span-2 md:col-span-1">
          <div
            className={
              "flex flex-col px-4 items-center justify-center md:items-start"
            }
          >
            <h1 className="text-[28px] md:text-[20px] lg:text-[28px] font-light ">
              <span className="font-bold">{"빠른 커뮤니케이션"}</span>
            </h1>

            <p
              className={`mt-4 whitespace-pre-line font-light text-[15px] md:text-[13px] lg:text-[16px]`}
            >
              {
                "대표자가 프로젝트의 커뮤니케이션과 기획, 개발을 직접 진행하여 성공적인 프로젝트를 이끌어냅니다. 고객과의 원활한 소통을 통해 수정과 개선을 신속하게 반영하여 최상의 결과물을 제공합니다."
              }
            </p>
          </div>
        </BoxLayout>
        <BoxLayout className="hidden md:flex md:order-12" bgGray={true}>
          {"보라상자 "}
        </BoxLayout>
      </div>

      <TitleDescription
        title={"우리는\n완벽합니다."}
        boldPart={"완벽합니다."}
        description={
          "디펙트럼만의 정교한 설계와 입체적인 방법론을 통해 더 높은 가치를 만들어 갑니다.\n" +
          "각 분야 전문가들로 구성된 집단의 경험과 수행력을 더해 당신의 이상을 현실로 만들어드리겠습니다."
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-[11px] md:gap-2 gap-[5px]  mb-[180px] lg:mb-[271px] max-w-[1024px] mx-auto">
        <SmallBoxLayout className={""} bgColor={"bg-lightYellow"}>
          <div
            className={
              "flex flex-col w-full h-full px-4 items-center justify-center relative"
            }
          >
            <Image
              alt={"yellow circle"}
              src={"/images/icon_define.png"}
              width={100}
              height={100}
              objectFit="contain" // 이미지를 비율에 맞춰서 부모 안에 맞춤
            />
          </div>
        </SmallBoxLayout>{" "}
        <SmallBoxLayout className={""} bgColor={"bg-transparent"}>
          <div
            className={"flex flex-col flex-1 px-4 justify-center items-start"}
          >
            <span className="font-bold">{"빠른 커뮤니케이션"}</span>

            <p
              className={`mt-4 whitespace-pre-line font-light text-[15px] md:text-[13px] lg:text-[16px] `}
            >
              {"흩어진 아이디어를 모아\n" + "기획 문서로 정의합니다."}
            </p>
          </div>
        </SmallBoxLayout>
        <SmallBoxLayout className={""} bgColor={"bg-lightPink"}>
          <div>adfdsa</div>
        </SmallBoxLayout>
        <SmallBoxLayout className={""} bgColor={"bg-transparent"}>
          <div>adfdsa</div>
        </SmallBoxLayout>
        <SmallBoxLayout className={""} bgColor={"bg-lightGray"}>
          <div>adfdsa</div>
        </SmallBoxLayout>
        <SmallBoxLayout className={""} bgColor={"bg-lightGray"}>
          <div>adfdsa</div>
        </SmallBoxLayout>
        <SmallBoxLayout className={""} bgColor={"bg-lightGray"}>
          <div>adfdsa</div>
        </SmallBoxLayout>
        <SmallBoxLayout className={""} bgColor={"bg-lightGray"}>
          <div>adfdsa</div>
        </SmallBoxLayout>
        <SmallBoxLayout className={""} bgColor={"bg-lightPurple"}>
          <div>adfdsa</div>
        </SmallBoxLayout>
        <SmallBoxLayout className={""} bgColor={"bg-transparent"}>
          <div>adfdsa</div>
        </SmallBoxLayout>
        <SmallBoxLayout className={""} bgColor={"bg-lightGreen"}>
          <div>adfdsa</div>
        </SmallBoxLayout>
        <SmallBoxLayout className={""} bgColor={"bg-transparent"}>
          <div>adfdsa</div>
        </SmallBoxLayout>
      </div>

      <TitleDescription
        title={"우리의 파장은\n퍼져나가고 있습니다."}
        boldPart={"퍼져나가고 있습니다."}
        description={
          "디펙트럼만의 정교한 설계와 입체적인 방법론을 통해 더 높은 가치를 만들어 갑니다.\n" +
          "각 분야 전문가들로 구성된 집단의 경험과 수행력을 더해 당신의 이상을 현실로 만들어드리겠습니다."
        }
      />
      <div className="flex flex-col mx-auto md:w-[768px] lg:w-[1024px] w-[375px] max-w-[1024px] ">
        {data.map((item, index) => (
          <Card key={index} title={item.title} year={item.year} />
        ))}
      </div>
    </div>
  );
}
const data = [
  { title: "주문 제작 케이크 구매 플랫폼", year: "2K23" },
  { title: "신한카드 사내벤처 장치 검색 추모 서비스", year: "2K23" },
  { title: "영상방송 구인구직 플랫폼 서비스", year: "2K23" },
  { title: "부동산 경매 정보 플랫폼", year: "2K23" },
  { title: "NFT 마켓 플레이스", year: "2K22" },
  { title: "AI 코딩 교육 플랫폼", year: "2K22" },
  { title: "위치기반 음식 나눔 서비스", year: "2K22" },
  { title: "교육용 퀴즈 서비스", year: "2K21" },
  { title: "원격 진료 / 진단 서비스", year: "2K21" },
  { title: "펀딩 및 리워드 서비스", year: "2K21" },
];
