import svgPaths from "./svg-n1hxbucvuj";

function Spinner() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Spinner">
      <div className="absolute flex inset-[9.93%_57.07%_57.07%_9.93%] items-center justify-center">
        <div className="flex-none h-[10px] rotate-135 w-[4px]">
          <div className="bg-[rgba(60,60,67,0.6)] opacity-87 rounded-[4px] size-full" data-name="325" />
        </div>
      </div>
      <div className="absolute flex inset-[43.33%_66.67%_43.33%_0] items-center justify-center">
        <div className="flex-none h-[10px] rotate-90 w-[4px]">
          <div className="bg-[rgba(60,60,67,0.6)] opacity-75 rounded-[4px] size-full" data-name="270" />
        </div>
      </div>
      <div className="absolute flex inset-[57.07%_57.07%_9.93%_9.93%] items-center justify-center">
        <div className="flex-none h-[10px] rotate-45 w-[4px]">
          <div className="bg-[rgba(60,60,67,0.6)] opacity-63 rounded-[4px] size-full" data-name="225" />
        </div>
      </div>
      <div className="absolute bg-[rgba(60,60,67,0.6)] inset-[66.67%_43.33%_0_43.33%] opacity-51 rounded-[4px]" data-name="180" />
      <div className="absolute flex inset-[57.07%_9.92%_9.93%_57.08%] items-center justify-center">
        <div className="flex-none h-[10px] rotate-135 w-[4px]">
          <div className="bg-[rgba(60,60,67,0.6)] opacity-39 rounded-[4px] size-full" data-name="135" />
        </div>
      </div>
      <div className="absolute flex inset-[43.33%_0_43.33%_66.67%] items-center justify-center">
        <div className="flex-none h-[10px] rotate-90 w-[4px]">
          <div className="bg-[rgba(60,60,67,0.6)] opacity-27 rounded-[4px] size-full" data-name="90" />
        </div>
      </div>
      <div className="absolute flex inset-[9.93%_9.92%_57.07%_57.08%] items-center justify-center">
        <div className="flex-none h-[10px] rotate-45 w-[4px]">
          <div className="bg-[rgba(60,60,67,0.6)] opacity-15 rounded-[4px] size-full" data-name="45" />
        </div>
      </div>
      <div className="absolute bg-[rgba(60,60,67,0.6)] inset-[0_43.33%_66.67%_43.33%] rounded-[4px]" data-name="0" />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 - 14">
      <div className="absolute left-[10px] overflow-clip size-[48px] top-[17px]" data-name="Chevron left">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 28">
              <path d="M14 26L2 14L14 2" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-start left-[64px] top-[26px]" data-name="Text Heading">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] whitespace-nowrap">향수 취향 테스트</p>
      </div>
      <div className="absolute left-[334px] overflow-clip size-[33px] top-[21px]" data-name="Home">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
          <div className="absolute inset-[-7.27%_-8.08%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.75 31.5">
              <path d={svgPaths.p4cadc00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[27px] top-[222px] w-[340px]" data-name="Radio Field" />
      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[27px] top-[256px] w-[340px]" data-name="Radio Field" />
      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[27px] top-[290px] w-[340px]" data-name="Radio Field" />
      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[27px] top-[324px] w-[340px]" data-name="Radio Field" />
      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[27px] top-[358px] w-[340px]" data-name="Radio Field" />
      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[27px] top-[392px] w-[340px]" data-name="Radio Field" />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center top-[calc(50%-29px)] whitespace-nowrap">
        당신의 취향을
        <br aria-hidden="true" />
        분석 중입니다..
      </p>
      <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[183px] top-[353px]" data-name="Progress indicator">
        <Spinner />
      </div>
    </div>
  );
}