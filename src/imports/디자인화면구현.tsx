import svgPaths from "./svg-uwzu61lg6r";

function App() {
  return (
    <div className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold h-[72.797px] leading-[36.4px] not-italic relative shrink-0 text-[#111827] text-[28px] tracking-[0.3828px] w-full whitespace-nowrap" data-name="App">
      <p className="absolute left-0 top-[0.5px]">당신의 일상 에너지는</p>
      <p className="absolute left-0 top-[36.9px]">어떤 편인가요?</p>
    </div>
  );
}

function RadioOption() {
  return (
    <div className="absolute h-[25.5px] left-[62px] top-[22px] w-[258px]" data-name="RadioOption">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[25.5px] left-0 not-italic text-[17px] text-black top-[0.5px] tracking-[-0.4316px] whitespace-nowrap">활발하고 존재감 넘쳐요</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[3.13%]" data-name="Group">
      <div className="absolute inset-[3.13%]" data-name="Vector">
        <div className="absolute inset-[-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p9ae0b00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[18.75%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <path d={svgPaths.p1d124bf2} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function RadioButton() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="RadioButton">
      <Group />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[22px] size-[24px] top-[22.75px]" data-name="Container">
      <RadioButton />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f3f4f6] h-[69.5px] relative rounded-[16px] shrink-0 w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <RadioOption />
        <Container3 />
      </div>
    </div>
  );
}

function RadioOption1() {
  return (
    <div className="absolute h-[25.5px] left-[62px] top-[22px] w-[258px]" data-name="RadioOption">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[25.5px] left-0 not-italic text-[#374151] text-[17px] top-[0.5px] tracking-[-0.4316px] whitespace-nowrap">조용하고 차분해요</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[3.13%]" data-name="Group">
      <div className="absolute inset-[3.13%]" data-name="Vector">
        <div className="absolute inset-[-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p9ae0b00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="RadioButton">
      <Group1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[22px] size-[24px] top-[22.75px]" data-name="Container">
      <RadioButton1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[69.5px] relative rounded-[16px] shrink-0 w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <RadioOption1 />
        <Container4 />
      </div>
    </div>
  );
}

function RadioOption2() {
  return (
    <div className="absolute h-[25.5px] left-[62px] top-[22px] w-[258px]" data-name="RadioOption">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[25.5px] left-0 not-italic text-[#374151] text-[17px] top-[0.5px] tracking-[-0.4316px] whitespace-nowrap">그냥 평범해요</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[3.13%]" data-name="Group">
      <div className="absolute inset-[3.13%]" data-name="Vector">
        <div className="absolute inset-[-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p9ae0b00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="RadioButton">
      <Group2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[22px] size-[24px] top-[22.75px]" data-name="Container">
      <RadioButton2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <RadioOption2 />
        <Container5 />
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[232.5px] items-start relative shrink-0 w-full" data-name="App">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[337.297px] items-start relative shrink-0 w-full" data-name="Container">
      <App />
      <App1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[626px] items-start left-0 overflow-clip px-[24px] top-[110px] w-[390px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-black h-[57.5px] relative rounded-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[25.5px] left-[171.79px] not-italic text-[17px] text-center text-white top-[16.5px] tracking-[-0.4316px] whitespace-nowrap">다음</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[106.5px] items-start left-0 pt-[25px] px-[24px] top-[729.5px] w-[390px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <Button3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27px] relative shrink-0 w-[117.57px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#111827] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">향수 취향 테스트</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 9.16667">
            <path d={svgPaths.p12f93600} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 17.4996">
            <path d={svgPaths.p29aa3400} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between pl-[-8px] pr-[-7.992px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Heading />
      <Button5 />
    </div>
  );
}

function Container9() {
  return <div className="bg-black flex-[81.5_0_0] h-[6px] min-h-px min-w-px rounded-[16777200px]" data-name="Container" />;
}

function Container10() {
  return <div className="bg-black flex-[81.5_0_0] h-[6px] min-h-px min-w-px rounded-[16777200px]" data-name="Container" />;
}

function Container11() {
  return <div className="bg-[#e5e7eb] flex-[81.5_0_0] h-[6px] min-h-px min-w-px rounded-[16777200px]" data-name="Container" />;
}

function Container12() {
  return <div className="bg-[#e5e7eb] flex-[81.5_0_0] h-[6px] min-h-px min-w-px rounded-[16777200px]" data-name="Container" />;
}

function ProgressBar() {
  return (
    <div className="content-stretch flex gap-[8px] h-[6px] items-start relative shrink-0 w-full" data-name="ProgressBar">
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] h-[99px] items-start left-0 pb-px pt-[16px] px-[20px] top-0 w-[390px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container8 />
      <ProgressBar />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white h-[836px] left-[355.5px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-0 w-[390px]" data-name="Container">
      <Container1 />
      <Container6 />
      <Container7 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="디자인 화면 구현" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(253, 253, 254) 33.333%, rgb(251, 252, 252) 66.667%, rgb(249, 250, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container />
    </div>
  );
}