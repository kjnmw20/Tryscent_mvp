import { Link } from "react-router";
import { useState } from "react";
import svgPaths from "../../imports/svg-krmgb6cs7e";
import { seasonOptions } from "../../utils/recommendation";

// Radio Button Component
function RadioButton({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <circle 
          cx="12" 
          cy="12" 
          r="11.25" 
          fill="white" 
          stroke={isSelected ? "#000000" : "#D1D5DB"} 
          strokeWidth="1.5" 
        />
        {isSelected && (
          <circle cx="12" cy="12" r="6" fill="black" />
        )}
      </svg>
    </div>
  );
}

// Option Component
function OptionItem({ 
  label, 
  isSelected, 
  onClick 
}: { 
  label: string; 
  isSelected: boolean; 
  onClick: () => void;
}) {
  return (
    <div 
      className={`${isSelected ? 'bg-[#f3f4f6]' : 'bg-white'} h-[69.5px] relative rounded-[16px] shrink-0 w-full cursor-pointer`}
      onClick={onClick}
    >
      <div aria-hidden="true" className={`absolute border-2 ${isSelected ? 'border-black' : 'border-[#e5e7eb]'} border-solid inset-0 pointer-events-none rounded-[16px]`} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex items-center">
        <div className="absolute left-[22px] size-[24px]">
          <RadioButton isSelected={isSelected} />
        </div>
        <p className="absolute left-[62px] right-[22px] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[25.5px] not-italic text-[#374151] text-[17px] tracking-[-0.4316px]">
          {label}
        </p>
      </div>
    </div>
  );
}

// Header Component
function Header() {
  return (
    <div className="absolute bg-white left-0 top-0 w-full z-10">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[20px]">
        {/* Back Button */}
        <Link to="/survey/step4">
          <div className="relative rounded-[16777200px] shrink-0 size-[40px] flex items-center justify-center">
            <svg className="w-[8px] h-[14px]" fill="none" viewBox="0 0 8 14">
              <path 
                d="M7 13L1 7L7 1" 
                stroke="#374151" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
              />
            </svg>
          </div>
        </Link>

        {/* Title */}
        <h1 className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold text-[18px] text-[#111827] tracking-[-0.4395px] leading-[27px]">
          향수 취향 테스트
        </h1>

        {/* Home Button */}
        <Link to="/">
          <div className="relative rounded-[16777200px] shrink-0 size-[36px] flex items-center justify-center">
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 28.75 31.5">
              <path 
                d={svgPaths.p4cadc00} 
                stroke="#374151" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Progress Bar - step 5 of 5 (all filled) */}
      <div className="flex gap-[8px] px-[20px] pb-[16px]">
        <div className="flex-1 h-[6px] bg-black rounded-[16777200px]" />
        <div className="flex-1 h-[6px] bg-black rounded-[16777200px]" />
        <div className="flex-1 h-[6px] bg-black rounded-[16777200px]" />
        <div className="flex-1 h-[6px] bg-black rounded-[16777200px]" />
        <div className="flex-1 h-[6px] bg-black rounded-[16777200px]" />
      </div>
    </div>
  );
}

// Footer with Fixed Button
function FixedButton({ isEnabled, onNext }: { isEnabled: boolean; onNext?: () => void }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white z-10">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="pt-[25px] px-[24px] pb-[24px]">
        <div className="w-full">
          {isEnabled ? (
            <Link to="/loading" onClick={onNext}>
              <div className="bg-black h-[57.5px] relative rounded-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full cursor-pointer">
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[25.5px] not-italic text-[17px] text-center tracking-[-0.4316px] whitespace-nowrap text-white">
                  테스트 결과보기
                </p>
              </div>
            </Link>
          ) : (
            <div className="bg-[#d1d5db] h-[57.5px] relative rounded-[12px] shrink-0 w-full cursor-not-allowed">
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[25.5px] not-italic text-[17px] text-center tracking-[-0.4316px] whitespace-nowrap text-[#6b7280]">
                테스트 결과보기
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SurveyStep4() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const options = [
    "봄",
    "여름",
    "가을",
    "겨울",
    "잘 모르겠어요"
  ];

  return (
    <div className="relative min-h-screen w-full" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(253, 253, 254) 33.333%, rgb(251, 252, 252) 66.667%, rgb(249, 250, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="bg-white h-screen w-[390px] max-w-full mx-auto shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] relative">
        {/* Header - Fixed */}
        <Header />

        {/* Content - Scrollable */}
        <div className="absolute content-stretch flex flex-col items-start left-0 overflow-y-auto px-[24px] pb-[120px] top-[110px] bottom-[106.5px] w-[390px]">
          {/* Question */}
          <div className="mb-[32px]">
            <h2 className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold text-[28px] text-[#111827] tracking-[0.3828px] leading-[36.4px]">
              당신의 향기로 어떤 계절을
              <br />
              떠올리고 싶나요?
            </h2>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-[12px] w-full">
            {options.map((option, index) => (
              <OptionItem
                key={index}
                label={option}
                isSelected={selectedOption === index}
                onClick={() => setSelectedOption(index)}
              />
            ))}
          </div>
        </div>

        {/* Fixed Button at Bottom */}
        <FixedButton 
          isEnabled={selectedOption !== null} 
          onNext={() => {
            if (selectedOption !== null) {
              sessionStorage.setItem("q5", seasonOptions[selectedOption]);
            }
          }}
        />
      </div>
    </div>
  );
}