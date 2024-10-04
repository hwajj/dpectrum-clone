import MainIntroduction from "@/app/component/MainIntroduction";
import MainProjectContact from "@/app/component/MainProjectContact";
import MainText from "@/app/component/MainText";
import TabComponent from "@/app/component/TabComponent";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full">
        <MainIntroduction>
          <MainText
            title={"디펙트럼이\n내부 개발팀이\n되어드리겠습니다"}
            description={
              "프리랜서 없는 100% 자체 개발팀으로 빠르고 정확한 커뮤니케이션이 가능합니다.\n시니어급 전문가들이 직접 프로젝트에 참여해 높은 완성도의 결과물을 제공합니다."
            }
          />
        </MainIntroduction>
        {/*menu*/}

        <TabComponent />
        <MainProjectContact>
          <MainText
            title={
              <span className={"  "}>
                <div className="text-center flex items-center justify-center gap-2 flex-col w-[283px] md:w-[512px] lg:w-full lg:flex-row lg:flex-nowrap ">
                  <span className="flex gap-2">
                    당신의 상상을{" "}
                    <div className="lg:hidden md:inline-block">
                      <StrikethroughLine length={10} />
                    </div>
                    {/*<span className="w-1/2 md:hidden border-b md:h-[10px] border-black inline-block "></span>*/}
                  </span>
                  {/*<span className="lg:w-[280px] hidden border-b lg:h-[34px] border-black lg:inline-block "></span>*/}
                  <div className="lg:inline hidden">
                    <StrikethroughLine length={20} />
                  </div>
                  <span className="flex gap-2">
                    <div className="lg:hidden md:inline-block">
                      <StrikethroughLine length={8} />
                    </div>{" "}
                    커다란 파장으로
                  </span>
                </div>
              </span>
            }
            description={
              "세상을 바꿀 당신의 비즈니스를 위해 \n" +
              "디펙트럼은 새로운 시각과 혁신을 제공합니다."
            }
          />
        </MainProjectContact>
      </main>

      <footer className="h-[148px] lg:text-[15px] md:text-[14px] text-[12px] gap-4 bg-black w-full font-suit text-white flex flex-col justify-center items-center">
        <li className="flex gap-4 lg:gap-6 flex-wrap justify-center">
          <ul className="pr-6 border-r border-gray-300 h-[12px] inline-flex items-center">
            02. 6956. 6411
          </ul>
          <ul className="pr-6 border-r border-gray-300 h-[12px] inline-flex items-center">
            04029, 서울특별시 마포구 성지길 55
          </ul>
          <ul className="pr-6 inline-flex items-center h-[12px]">
            info@dpectrum.app
          </ul>
        </li>
        <p>© Copyright by Dpectrum. All rights reserved.</p>
      </footer>
    </>
  );
}
function StrikethroughLine({ length }: { length: number }) {
  const spaces = Array.from({ length }).map((_, index) => (
    <Fragment key={index}>&nbsp;</Fragment>
  ));

  return (
    <span className="inline-block">
      <s className="block border-black">{spaces}</s>
    </span>
  );
}
