import TitleDescription from '@/app/component/TextDescription'
import BoxLayout from '@/app/component/BoxLayout'
import React from 'react'
import SmallBoxLayout from '@/app/component/SmallBoxLayout'
import Image from 'next/image'
import Card from '@/app/component/Card'

export default function CompanyIntroduction() {
  return (
    <div className="pt-[120px] pb-[150px] flex flex-col">
      <TitleDescription
        title={'우리는\n일합니다.'}
        boldPart={'일합니다.'}
        description={
          '디펙트럼은 디지털 경험속 모든 고객 경험에서의 가치를 추구합니다.\n' +
          '함께하는 모든 프로젝트에서 고객 경험의 여정을 올바른 길로 이끌어 줄 가이드가 되어드리겠습니다.'
        }
      />

      <div className="grid grid-cols-2 px-5 md:p-0 md:grid-cols-3 lg:gap-[11px] md:gap-2 gap-[5px] mb-[180px] lg:mb-[271px] mx-auto max-w-[1024px]">
        <BoxLayout className="order-1" bgGray={true}>
          <Image
            src="/images/cube_blue.png"
            alt={'blue cube'}
            width={110}
            height={110}
            className={'w-[80px] h-auto md:w-[110px] lg:w-[180px]'}
          />
        </BoxLayout>
        <BoxLayout className="order-2" bgGray={true}>
          <Image
            src="/images/plan_icon.svg"
            alt={'plan icon'}
            width={110}
            height={110}
            className={'w-[80px] h-auto md:w-[110px] lg:w-[180px]'}
          />
        </BoxLayout>
        <BoxLayout className="order-3 col-span-2 md:col-span-1">
          <div
            className={
              'flex flex-col px-4 items-center justify-center md:items-startrt'
            }
          >
            <h1 className="text-[28px] md:text-[20px] lg:text-[28px] font-light">
              <span className="font-bold">{'정교한 컨설팅'}</span>
            </h1>

            <p
              className={`whitespace-pre-line font-light text-[15px] md:text-[13px] lg:text-[16px] w-full`}
            >
              {
                '대표자가 프로젝트의 커뮤니케이션과 기획, 개발을 직접 진행하여 성공적인 프로젝트를 이끌어냅니다. 고객과의 원활한 소통을 통해 수정과 개선을 신속하게 반영하여 최상의 결과물을 제공합니다.'
              }
            </p>
          </div>
        </BoxLayout>
        <BoxLayout className="order-4" bgGray={true}>
          <Image
            src="/images/cube_yellow.png"
            alt={'yellow cube'}
            width={110}
            height={110}
            className={'w-[80px] h-auto md:w-[110px] lg:w-[180px]'}
          />
        </BoxLayout>
        <BoxLayout className="order-6 md:order-5 col-span-2 md:col-span-1">
          <div
            className={
              'flex flex-col px-4 items-center justify-center md:items-start'
            }
          >
            <h1 className="text-[28px] md:text-[20px] lg:text-[28px] font-light ">
              <span className="font-bold">{'완벽한 결과물'}</span>
            </h1>

            <p
              className={`whitespace-pre-line font-light text-[15px] md:text-[13px] lg:text-[16px]`}
            >
              {
                '대표자가 프로젝트의 커뮤니케이션과 기획, 개발을 직접 진행하여 성공적인 프로젝트를 이끌어냅니다. 고객과의 원활한 소통을 통해 수정과 개선을 신속하게 반영하여 최상의 결과물을 제공합니다.'
              }
            </p>
          </div>
        </BoxLayout>
        <BoxLayout className="order-7 md:order-5" bgGray={true}>
          <Image
            src="/images/cube_green.png"
            alt={'cube green'}
            width={110}
            height={110}
            className={'w-[80px] h-auto md:w-[110px] lg:w-[180px]'}
          />
        </BoxLayout>
        <BoxLayout className="md:order-7 order-5" bgGray={true}>
          <Image
            src="/images/reactiveweb_icon.svg"
            alt={'reactiveweb'}
            width={110}
            height={110}
            className={'w-[80px] h-auto md:w-[110px] lg:w-[180px]'}
          />
        </BoxLayout>
        <BoxLayout className="md:flex md:order-8 hidden" bgGray={true}>
          <Image
            src="/images/server_icon.svg"
            alt={'server_icon'}
            width={110}
            height={110}
            className={'w-[80px] h-auto md:w-[110px] lg:w-[180px]'}
          />
        </BoxLayout>
        <BoxLayout className="md:flex md:order-9 hidden" bgGray={true}>
          <Image
            src="/images/mobileapp_icon.svg"
            alt={'mobileapp_icon'}
            width={110}
            height={110}
            className={'w-[80px] h-auto md:w-[110px] lg:w-[180px]'}
          />
        </BoxLayout>
        <BoxLayout className="order-9 md:order-11" bgGray={true}>
          <Image
            src="/images/dev_icon.svg"
            alt={'dev icon'}
            width={110}
            height={110}
            className={'w-[80px] h-auto md:w-[110px] lg:w-[180px]'}
          />
        </BoxLayout>
        <BoxLayout className="order-9 md:order-10 col-span-2 md:col-span-1">
          <div
            className={
              'flex flex-col px-4 items-center justify-center md:items-start'
            }
          >
            <h1 className="text-[28px] md:text-[20px] lg:text-[28px] font-light ">
              <span className="font-bold">{'빠른 커뮤니케이션'}</span>
            </h1>

            <p
              className={`whitespace-pre-line font-light text-[15px] md:text-[13px] lg:text-[16px]`}
            >
              {
                '대표자가 프로젝트의 커뮤니케이션과 기획, 개발을 직접 진행하여 성공적인 프로젝트를 이끌어냅니다. 고객과의 원활한 소통을 통해 수정과 개선을 신속하게 반영하여 최상의 결과물을 제공합니다.'
              }
            </p>
          </div>
        </BoxLayout>
        <BoxLayout className="hidden md:flex md:order-12" bgGray={true}>
          <Image
            src="/images/cube_purple.png"
            alt={'cube purple'}
            width={110}
            height={110}
            className={'w-[80px] h-auto md:w-[110px] lg:w-[180px]'}
          />
        </BoxLayout>
      </div>

      <TitleDescription
        title={'우리는\n완벽합니다.'}
        boldPart={'완벽합니다.'}
        description={
          '디펙트럼만의 정교한 설계와 입체적인 방법론을 통해 더 높은 가치를 만들어 갑니다.\n' +
          '각 분야 전문가들로 구성된 집단의 경험과 수행력을 더해 당신의 이상을 현실로 만들어드리겠습니다.'
        }
      />
      <div className="grid grid-cols-2 px-5 md:p-0 md:grid-cols-4 lg:gap-[11px] md:gap-2 gap-[5px]  mb-[180px] lg:mb-[271px] max-w-[1024px] mx-auto">
        <SmallBoxLayout className={''} bgColor={'bg-lightYellow'}>
          <div
            className={
              'flex flex-col w-full h-full px-4 items-center justify-center relative'
            }
          >
            <Image
              alt={'yellow circle'}
              src={'/images/yellow_circle.svg'}
              width={100}
              height={100}
              className="w-[77px] h-auto lg:w-[115px]"
            />
          </div>
        </SmallBoxLayout>{' '}
        <SmallBoxLayout className={''} bgColor={'bg-transparent'}>
          <div
            className={'flex flex-col flex-1 px-4 justify-center items-start'}
          >
            <span className="font-bold">{'빠른 커뮤니케이션'}</span>

            <p
              className={`mt-4 whitespace-pre-line font-light text-[15px] md:text-[13px] lg:text-[16px] `}
            >
              {'흩어진 아이디어를 모아\n' + '기획 문서로 정의합니다.'}
            </p>
          </div>
        </SmallBoxLayout>
        <SmallBoxLayout
          className={
            'flex flex-col w-full h-full px-4 items-center justify-center relative'
          }
          bgColor={'bg-lightPink'}
        >
          <Image
            alt={'red square'}
            src={'/images/red_square.svg'}
            width={100}
            height={100}
            className="w-[83px] h-auto lg:w-[123px]"
          />
        </SmallBoxLayout>
        <SmallBoxLayout className={''} bgColor={'bg-transparent'}>
          <div
            className={'p-[15px] w-full flex flex-col justify-start gap-[10px]'}
          >
            <span className="w-[62px] text-white rounded-sm bg-mediumRed px-[10px] py-[5px]">
              디자인
            </span>
            <p className="text-[14px] whitespace-pre-line">
              {'디자인 시안을 제시하고 \n' + '최종안을 결정합니다.'}
            </p>
          </div>
        </SmallBoxLayout>
        <SmallBoxLayout
          className={
            'flex flex-col w-full h-full px-4 items-center justify-center relative'
          }
          bgColor={'bg-lightGray'}
        >
          <Image
            alt={'blue cube'}
            src={'/images/cube_blue.png'}
            width={100}
            height={100}
            className={'w-[80px] h-auto md:w-[90px] lg:w-[120px]'}
          />
        </SmallBoxLayout>
        <SmallBoxLayout
          className={
            'flex flex-col w-full h-full px-4 items-center justify-center relative'
          }
          bgColor={'bg-lightGray'}
        >
          <Image
            alt={'yellow cube'}
            src={'/images/cube_yellow.png'}
            width={100}
            height={100}
            className={'w-[80px] h-auto md:w-[90px] lg:w-[120px]'}
          />
        </SmallBoxLayout>
        <SmallBoxLayout
          className={
            'flex flex-col w-full h-full px-4 items-center justify-center relative'
          }
          bgColor={'bg-lightGray'}
        >
          <Image
            alt={'green cube'}
            src={'/images/cube_green.png'}
            width={100}
            height={100}
            className={'w-[80px] h-auto md:w-[90px] lg:w-[120px]'}
          />
        </SmallBoxLayout>
        <SmallBoxLayout
          className={
            'flex flex-col w-full h-full px-4 items-center justify-center relative'
          }
          bgColor={'bg-lightGray'}
        >
          <Image
            alt={'green cube'}
            src={'/images/cube_purple.png'}
            width={100}
            height={100}
            className={'w-[80px] h-auto md:w-[90px] lg:w-[120px]'}
          />
        </SmallBoxLayout>
        <SmallBoxLayout className={''} bgColor={'bg-lightPurple'}>
          <Image
            alt={'green cube'}
            src={'/images/icon_develop.png'}
            width={100}
            height={100}
            className={'w-[64px] h-auto md:w-[72px] '}
          />
        </SmallBoxLayout>
        <SmallBoxLayout className={''} bgColor={'bg-transparent'}>
          <div
            className={'p-[15px] w-full flex flex-col justify-start gap-[10px]'}
          >
            <span className="w-12 text-white rounded-sm bg-mediumPurple px-[10px] py-[5px]">
              개발
            </span>
            <p className="text-[14px] whitespace-pre-line">
              {'기능단위의 개발과 \n' + '테스트를 반복합니다.'}
            </p>
          </div>
        </SmallBoxLayout>
        <SmallBoxLayout className={''} bgColor={'bg-lightGreen'}>
          <Image
            alt={'green cube'}
            src={'/images/icon_find.png'}
            width={100}
            height={100}
            className={'w-[100px] h-auto md:w-[150px] '}
          />
        </SmallBoxLayout>
        <SmallBoxLayout className={''} bgColor={'bg-transparent'}>
          <div
            className={'p-[15px] w-full flex flex-col justify-start gap-[10px]'}
          >
            <span className="w-12 text-white rounded-sm bg-mediumGreen px-[10px] py-[5px]">
              전달
            </span>
            <p className="text-[14px] whitespace-pre-line">
              {'QA과정을 거쳐 완벽한\n ' + '결과물을 전달합니다'}
            </p>
          </div>
        </SmallBoxLayout>
      </div>

      <TitleDescription
        title={'우리의 파장은\n퍼져나가고 있습니다.'}
        boldPart={'퍼져나가고 있습니다.'}
        description={
          '디펙트럼만의 정교한 설계와 입체적인 방법론을 통해 더 높은 가치를 만들어 갑니다.\n' +
          '각 분야 전문가들로 구성된 집단의 경험과 수행력을 더해 당신의 이상을 현실로 만들어드리겠습니다.'
        }
      />
      <div className="flex flex-col mx-auto md:w-[768px] lg:w-[1024px] w-full sm:w-[375px] max-w-[1024px] ">
        {data.map((item, index) => (
          <Card key={index} title={item.title} year={item.year} />
        ))}
      </div>

      <div
        className="flex mx-auto mt-24 gap-2 mb-28 w-[230px] bg-black
      items-center justify-center text-white h-14 cursor-pointer"
      >
        <Image
          alt={'green cube'}
          src={'/images/project_grid.svg'}
          width={20}
          height={20}
          className={'w-[20px] h-auto '}
        />
        프로젝트 보기
      </div>
    </div>
  )
}
const data = [
  { title: '주문 제작 케이크 구매 플랫폼', year: '2K23' },
  { title: '신한카드 사내벤처 장치 검색 추모 서비스', year: '2K23' },
  { title: '영상방송 구인구직 플랫폼 서비스', year: '2K23' },
  { title: '부동산 경매 정보 플랫폼', year: '2K23' },
  { title: 'NFT 마켓 플레이스', year: '2K22' },
  { title: 'AI 코딩 교육 플랫폼', year: '2K22' },
  { title: '위치기반 음식 나눔 서비스', year: '2K22' },
  { title: '교육용 퀴즈 서비스', year: '2K21' },
  { title: '원격 진료 / 진단 서비스', year: '2K21' },
  { title: '펀딩 및 리워드 서비스', year: '2K21' },
]
