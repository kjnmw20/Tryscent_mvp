import { Link } from "react-router";
import { useState } from "react";
import svgPaths from "../../imports/svg-uwzu61lg6r";
import { energyOptions } from "../../utils/recommendation";

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
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[25.5px] left-0 not-italic text-[#374151] text-[17px] top-[0.5px] tracking-[-0.4316px] whitespace-nowrap">활발하고 존재감 넘쳐요</p>
    </div>
  );
}

function Group({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute contents inset-[3.13%]" data-name="Group">
      <div className="absolute inset-[3.13%]" data-name="Vector">
        <div className="absolute inset-[-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p9ae0b00} fill="var(--fill-0, white)" id="Vector" stroke={isSelected ? "var(--stroke-0, black)" : "var(--stroke-0, #D1D5DB)"} strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      {isSelected && (
        <div className="absolute inset-[18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p1d124bf2} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      )}
    </div>
  );
}

function RadioButton({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="RadioButton">
      <Group isSelected={isSelected} />
    </div>
  );
}

function Container3({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[22px] size-[24px] top-[22.75px]" data-name="Container">
      <RadioButton isSelected={isSelected} />
    </div>
  );
}

function Button({ isSelected, onClick }: { isSelected: boolean; onClick: () => void }) {
  return (
    <div
      className={`${isSelected ? 'bg-[#f3f4f6]' : 'bg-white'} h-[69.5px] relative rounded-[16px] shrink-0 w-[342px] cursor-pointer`}
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className={`absolute border-2 ${isSelected ? 'border-black' : 'border-[#e5e7eb]'} border-solid inset-0 pointer-events-none rounded-[16px]`} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <RadioOption />
        <Container3 isSelected={isSelected} />
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

function Group1({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute contents inset-[3.13%]" data-name="Group">
      <div className="absolute inset-[3.13%]" data-name="Vector">
        <div className="absolute inset-[-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p9ae0b00} fill="var(--fill-0, white)" id="Vector" stroke={isSelected ? "var(--stroke-0, black)" : "var(--stroke-0, #D1D5DB)"} strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      {isSelected && (
        <div className="absolute inset-[18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p1d124bf2} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      )}
    </div>
  );
}

function RadioButton1({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="RadioButton">
      <Group1 isSelected={isSelected} />
    </div>
  );
}

function Container4({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[22px] size-[24px] top-[22.75px]" data-name="Container">
      <RadioButton1 isSelected={isSelected} />
    </div>
  );
}

function Button1({ isSelected, onClick }: { isSelected: boolean; onClick: () => void }) {
  return (
    <div
      className={`${isSelected ? 'bg-[#f3f4f6]' : 'bg-white'} h-[69.5px] relative rounded-[16px] shrink-0 w-[342px] cursor-pointer`}
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className={`absolute border-2 ${isSelected ? 'border-black' : 'border-[#e5e7eb]'} border-solid inset-0 pointer-events-none rounded-[16px]`} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <RadioOption1 />
        <Container4 isSelected={isSelected} />
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

function Group2({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute contents inset-[3.13%]" data-name="Group">
      <div className="absolute inset-[3.13%]" data-name="Vector">
        <div className="absolute inset-[-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p9ae0b00} fill="var(--fill-0, white)" id="Vector" stroke={isSelected ? "var(--stroke-0, black)" : "var(--stroke-0, #D1D5DB)"} strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      {isSelected && (
        <div className="absolute inset-[18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p1d124bf2} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      )}
    </div>
  );
}

function RadioButton2({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="RadioButton">
      <Group2 isSelected={isSelected} />
    </div>
  );
}

function Container5({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[22px] size-[24px] top-[22.75px]" data-name="Container">
      <RadioButton2 isSelected={isSelected} />
    </div>
  );
}

function Button2({ isSelected, onClick }: { isSelected: boolean; onClick: () => void }) {
  return (
    <div
      className={`${isSelected ? 'bg-[#f3f4f6]' : 'bg-white'} flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[342px] cursor-pointer`}
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className={`absolute border-2 ${isSelected ? 'border-black' : 'border-[#e5e7eb]'} border-solid inset-0 pointer-events-none rounded-[16px]`} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <RadioOption2 />
        <Container5 isSelected={isSelected} />
      </div>
    </div>
  );
}

function App1({ selectedOption, setSelectedOption }: { selectedOption: number | null; setSelectedOption: (value: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[232.5px] items-start relative shrink-0 w-full" data-name="App">
      <Button isSelected={selectedOption === 0} onClick={() => setSelectedOption(0)} />
      <Button1 isSelected={selectedOption === 1} onClick={() => setSelectedOption(1)} />
      <Button2 isSelected={selectedOption === 2} onClick={() => setSelectedOption(2)} />
    </div>
  );
}

function Container2({ selectedOption, setSelectedOption }: { selectedOption: number | null; setSelectedOption: (value: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[337.297px] items-start relative shrink-0 w-full" data-name="Container">
      <App />
      <App1 selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    </div>
  );
}

function Container1({ selectedOption, setSelectedOption }: { selectedOption: number | null; setSelectedOption: (value: number) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[626px] items-start left-0 overflow-clip px-[24px] top-[110px] w-[390px]" data-name="Container">
      <Container2 selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    </div>
  );
}

function Button3({ isEnabled, onNext }: { isEnabled: boolean; onNext?: () => void }) {
  return (
    <div className="w-full" data-name="Button">
      {isEnabled ? (
        <Link to="/survey/step4" onClick={onNext}>
          <div className="bg-black h-[57.5px] relative rounded-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full cursor-pointer">
            <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[25.5px] left-[171.79px] not-italic text-[17px] text-center text-white top-[16.5px] tracking-[-0.4316px] whitespace-nowrap">다음</p>
          </div>
        </Link>
      ) : (
        <div className="bg-[#d1d5db] h-[57.5px] relative rounded-[12px] shrink-0 w-full cursor-not-allowed">
          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[25.5px] left-[171.79px] not-italic text-[17px] text-center text-[#6b7280] top-[16.5px] tracking-[-0.4316px] whitespace-nowrap">다음</p>
        </div>
      )}
    </div>
  );
}

function Container6({ isEnabled, onNext }: { isEnabled: boolean; onNext?: () => void }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white z-10">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="pt-[25px] px-[24px] pb-[24px]">
        <Button3 isEnabled={isEnabled} onNext={onNext} />
      </div>
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
    <Link to="/survey/step2">
      <div className="relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Button">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
          <Icon />
        </div>
      </div>
    </Link>
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
    <Link to="/">
      <div className="relative rounded-[16777200px] shrink-0 size-[36px] flex items-center justify-center" data-name="Button">
        <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 28.75 31.5">
          <path
            d="M10.25 29.5V15.75H18.5V29.5M2 11.625L14.375 2L26.75 11.625V26.75C26.75 27.4793 26.4603 28.1788 25.9445 28.6945C25.4288 29.2103 24.7293 29.5 24 29.5H4.75C4.02065 29.5 3.32118 29.2103 2.80546 28.6945C2.28973 28.1788 2 27.4793 2 26.75V11.625Z"
            stroke="#374151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </Link>
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
  return (
    <div
      className="bg-black flex-[81.5_0_0] h-[6px] min-h-px min-w-px rounded-[16777200px]"
      data-name="Container"
    />
  );
}

function Container10() {
  return (
    <div
      className="bg-black flex-[81.5_0_0] h-[6px] min-h-px min-w-px rounded-[16777200px]"
      data-name="Container"
    />
  );
}

function Container11() {
  return (
    <div
      className="bg-black flex-[81.5_0_0] h-[6px] min-h-px min-w-px rounded-[16777200px]"
      data-name="Container"
    />
  );
}

function Container12() {
  return (
    <div
      className="bg-[#e5e7eb] flex-[81.5_0_0] h-[6px] min-h-px min-w-px rounded-[16777200px]"
      data-name="Container"
    />
  );
}

function Container13() {
  return (
    <div
      className="bg-[#e5e7eb] flex-[81.5_0_0] h-[6px] min-h-px min-w-px rounded-[16777200px]"
      data-name="Container"
    />
  );
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

function Container({ selectedOption, setSelectedOption }: { selectedOption: number | null; setSelectedOption: (value: number) => void }) {
  return (
    <div className="bg-white h-screen w-[390px] max-w-full mx-auto shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] relative" data-name="Container">
      <Container1 selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Container6 
        isEnabled={selectedOption !== null} 
        onNext={() => {
          if (selectedOption !== null) {
            sessionStorage.setItem("q3", energyOptions[selectedOption]);
          }
        }}
      />
      <Container7 />
    </div>
  );
}

export default function SurveyStep2() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  return (
    <div className="relative min-h-screen w-full" data-name="디자인 화면 구현" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(253, 253, 254) 33.333%, rgb(251, 252, 252) 66.667%, rgb(249, 250, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    </div>
  );
}