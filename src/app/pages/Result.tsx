import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPaths from "../../imports/svg-krmgb6cs7e";
import { calculateRecommendation, accordLabels, MoodCode, PlaceCode, EnergyCode, SeasonCode, Accord, getPrefType, moodLabels, placeLabels, seasonLabels, getRecommendedPerfumes } from "../../utils/recommendation";
import { useEffect, useState, useMemo } from "react";
import { Perfume, perfumesDB } from "../../data/perfumes";

export default function Result() {
  const [q1State] = useState<string>(() => sessionStorage.getItem("q1") || "FEMALE");
  const [q2State] = useState<MoodCode>(() => (sessionStorage.getItem("q2") as MoodCode) || "NEUTRAL");
  const [q3State] = useState<EnergyCode>(() => (sessionStorage.getItem("q3") as EnergyCode) || "CALM");
  const [q4State] = useState<PlaceCode>(() => (sessionStorage.getItem("q4") as PlaceCode) || "NEUTRAL");

  const [topAccords, setTopAccords] = useState<Accord[]>(() => {
    const recommended = calculateRecommendation(q2State, q4State);
    if (recommended.length >= 2) {
      if (q2State === "NEUTRAL" && q4State === "NEUTRAL") {
        return q1State === "MALE" ? ["WOODY", "FRESH"] : ["FLORAL", "MUSKY"];
      }
      return recommended;
    }
    return ["WOODY", "MUSKY"];
  });

  const accord1 = accordLabels[topAccords[0]];
  const accord2 = accordLabels[topAccords[1]];

  const isNeutralCard = q2State === "NEUTRAL" && q4State === "NEUTRAL";
  const prefType = getPrefType(topAccords[0], topAccords[1], isNeutralCard);

  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);

  const recommendedPerfumes = useMemo(() => {
    // Both Q2, Q4 "잘 모르겠어요" -> 1,3항목 필터링 후 등록된 순서로 추천 
    return getRecommendedPerfumes(q1State, q2State, q3State, q4State, isNeutralCard).slice(0, 3);
  }, [q1State, q2State, q3State, q4State, isNeutralCard]);

  function renderEnergySentence() {
    switch (q3State) {
      case "ACTIVE":
        return <>활발하고 쾌활한 성향으로, <span className="font-bold">존재감 있게 퍼지는 향</span>을 선호할 거에요.</>;
      case "NORMAL":
        return <>무난하고 안정된 성향으로, <span className="font-bold">자연스럽게 느껴지는 향</span>을 선호할 거에요.</>;
      case "CALM":
      default:
        return <>조용하고 차분한 성향으로, <span className="font-bold">은은하게 머무는 향</span>을 선호할 거에요.</>;
    }
  }

  let answersText = "";
  if (!isNeutralCard) {
    if (q2State === "NEUTRAL") {
      answersText = `${placeLabels[q4State]} 감각을 선호하는 당신에게는 `;
    } else if (q4State === "NEUTRAL") {
      answersText = `${moodLabels[q2State]} 분위기를 선호하는 당신에게는 `;
    } else {
      answersText = `${moodLabels[q2State]} 분위기, ${placeLabels[q4State]} 감각을 선호하는 당신에게는 `;
    }
  }

  let diffusionWidth = "30%";
  let diffusionText = "은은하게 퍼지는 향";
  switch (q3State) {
    case "ACTIVE":
      diffusionWidth = "90%";
      diffusionText = "존재감 있게 퍼지는 향";
      break;
    case "NORMAL":
      diffusionWidth = "60%";
      diffusionText = "자연스럽게 퍼지는 향";
      break;
    case "CALM":
    default:
      diffusionWidth = "30%";
      diffusionText = "은은하게 퍼지는 향";
      break;
  }

  // Animation Params based on Energy (3-tier division)
  const animParams = useMemo(() => {
    switch (q3State) {
      case "ACTIVE":
        return {
          ballSize: 160,
          particleCount: 450,
          durationRange: [2.0, 5.5],
          maxDist: 350,
          sizeScale: 1.0
        };
      case "NORMAL":
        return {
          ballSize: 128,
          particleCount: 300,
          durationRange: [3.5, 8.5],
          maxDist: 220,
          sizeScale: 1.0
        };
      case "CALM":
      default:
        return {
          ballSize: 95,
          particleCount: 200,
          durationRange: [5.5, 14.5],
          maxDist: 140,
          sizeScale: 1.0
        };
    }
  }, [q3State]);

  const particles = useMemo(() => {
    const { particleCount, durationRange, maxDist, sizeScale } = animParams;
    return Array.from({ length: particleCount }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.65);
      const distance = r * maxDist;

      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      const duration = durationRange[0] + Math.random() * (durationRange[1] - durationRange[0]);
      const delay = -(Math.random() * duration);
      const size = (2.7 + Math.random() * 7.8) * sizeScale;
      const opacity = 0.7 + Math.random() * 0.3;

      const color = Math.random() > 0.5 ? prefType.color_code_1 : prefType.color_code_2;

      return {
        id: i,
        tx: `${tx}px`,
        ty: `${ty}px`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        size: `${size}px`,
        opacity,
        color
      };
    });
  }, [prefType, animParams]);

  const handleShare = async () => {
    const shareData = {
      title: 'Tryscent - 내 향수 취향 결과',
      text: `트라이센트 테스트 결과, 저는 '${prefType.type_name}' 유형이 나왔어요! 당신에게 어울리는 향수도 찾아보세요.`,
      url: window.location.origin,
    };

    // 1. Try Native Share (Mobile iOS/Android)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
        console.error('Native share failed:', err);
      }
    }

    // 2. Fallback to Clipboard (Desktop/Other)
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(window.location.origin);
        alert('링크가 복사되었습니다! 원하시는 곳에 붙여넣어 공유해 보세요.');
        return;
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    }

    // 3. Final Fallback for non-secure dev environment (HTTP)
    alert(`공유 링크: ${window.location.origin}\n(현재 환경에서는 자동 복사를 지원하지 않아 수동으로 복사해 주세요.)`);
  };

  return (
    <div className="bg-white h-full min-h-screen w-full max-w-[393px] mx-auto relative overflow-auto">
      <header className="fixed top-0 left-0 right-0 max-w-[393px] mx-auto bg-white z-50 px-4 py-2 h-[58px] shadow-sm">
        <div className="relative flex items-center justify-center h-full">
          <h1 className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold text-[18px] text-[#111827] tracking-[-0.4395px] leading-[27px]">
            취향 테스트 결과
          </h1>
          <div className="absolute right-0 top-0 h-full flex items-center justify-center">
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
        </div>
      </header>

      <main className="pt-[58px] pb-8 px-6">
        <div className="relative w-full aspect-[4/5] mb-[-40px] mt-6 flex flex-col items-center">
          <div className="relative w-full flex-[1.5] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 w-0 h-0 z-[40] pointer-events-none">
              {particles.map(p => (
                <div
                  key={p.id}
                  className="perfume-particle-v2"
                  style={{
                    width: p.size,
                    height: p.size,
                    backgroundColor: p.color,
                    "--tx": p.tx,
                    "--ty": p.ty,
                    "--p-duration": p.duration,
                    "--p-delay": p.delay,
                    "--p-opacity": p.opacity,
                    boxShadow: `0 0 10px ${p.color}aa`
                  } as any}
                />
              ))}
            </div>

            <div className="relative z-20 flex items-center justify-center">
              <div
                className="relative flex items-center justify-center z-10"
                style={{ width: animParams.ballSize, height: animParams.ballSize }}
              >
                <div
                  className="absolute inset-0 rounded-full blur-[14px] saturate-[150%] brightness-[105%] shadow-[0_15px_50px_rgba(0,0,0,0.1)]"
                  style={{
                    background: `linear-gradient(135deg, ${prefType.color_code_1} 0%, ${prefType.color_code_2} 100%)`,
                  }}
                />
                <div className="absolute top-1 left-2 w-1/2 h-2/5 rounded-full bg-white/40 blur-[12px] rotate-[-20deg] z-20 pointer-events-none" />
                <div className="absolute bottom-1 right-2 w-1/2 h-2/5 rounded-full bg-black/5 blur-[15px] z-5 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="relative w-full flex-1 flex flex-col items-center text-center px-6 pt-2 z-40 transform translate-y-[-10px]">
            <h2 className="text-[32px] font-bold mb-2 tracking-[-0.02em] text-[#111827]">
              {prefType.type_name}
            </h2>
            <p className="text-[14px] font-light text-[#6b7280] leading-[1.6] break-keep">
              {prefType.type_name !== "THE NEUTRAL" && (
                <>
                  {prefType.type_description}
                  <br />
                </>
              )}
              {diffusionText}
            </p>
          </div>
        </div>


        {/* Description */}
        <p className="text-[16px] leading-[1.6] text-[#4b5563] mb-8 text-left break-keep">
          당신의 향 취향 유형은 <span className="font-bold">"{prefType.type_name}"</span>입니다. {prefType.type_sentence}{" "}
          {!isNeutralCard && (
            <>
              {answersText}
              <span className="font-bold">{accord1}</span>와 <span className="font-bold">{accord2}</span> 계열의 향이 잘 어울려요.{" "}
            </>
          )}
          {renderEnergySentence()}
          {prefType.type_name === "THE NEUTRAL" && (
            <> 지금은 누구나 부담 없이 사용할 수 있는 향 중심으로 추천드릴게요.</>
          )}
        </p>

        {/* Scent Categories */}
        <div className="mb-8">
          <h2 className="font-semibold text-black mb-3 text-[18px]">추천 향 계열</h2>
          <div className="flex flex-wrap gap-2">
            {(Object.entries(accordLabels) as [Accord, string][]).map(([key, label]) => {
              const isActive = topAccords.includes(key as Accord);
              return (
                <span
                  key={key}
                  className={`px-4 py-2 text-[14px] rounded-[20px] ${isActive ? "bg-black text-white" : "bg-[#f3f4f6] text-[#9ca3af]"
                    }`}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Intensity Sliders */}
        <div className="mb-8">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-black text-[18px]">확산력</span>
              <span className="text-[14px] text-[#6b7280]">{diffusionText}</span>
            </div>
            <div className="w-full h-2 bg-[#f3f4f6] rounded-full overflow-hidden">
              <div className="h-full bg-black rounded-full" style={{ width: diffusionWidth }} />
            </div>
          </div>
        </div>


        {/* Recommended Perfumes */}
        <div className="mb-8">
          <h2 className="text-[18px] font-semibold text-black mb-4">추천 향수</h2>

          {recommendedPerfumes.length > 0 ? (
            recommendedPerfumes.map((perfume) => (
              <div
                key={perfume.perfume_id}
                className="bg-white rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] p-4 mb-4 flex gap-4 cursor-pointer active:scale-[0.98] transition-transform"
                onClick={() => setSelectedPerfume(perfume)}
              >
                <div className="w-[80px] h-[80px] rounded-[8px] overflow-hidden flex-shrink-0 p-1.5 flex items-center justify-center">
                  <ImageWithFallback
                    alt={`${perfume.brand_name_en} 향수`}
                    className="w-full h-full object-contain"
                    src={`/perfumes/${perfume.perfume_id}.jpg`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[16px] font-semibold text-black mb-1 truncate">{perfume.brand_name_en}</h3>
                  <p className="text-[14px] text-black mb-1 truncate">{perfume.perfume_name_kr}</p>
                  <p className="text-[14px] text-[#6b7280] line-clamp-2 break-keep">
                    {perfume.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-[14px] text-[#6b7280] text-center p-4 bg-white rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)]">
              필터에 맞는 추천 향수가 없습니다.
            </div>
          )}
        </div>

        {/* Share Button (Text Only Style) */}
        <button
          onClick={handleShare}
          className="w-full flex items-center justify-center gap-2 cursor-pointer mt-12 mb-8 active:opacity-60 transition-opacity"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          <p className="text-[15px] font-medium text-[#9ca3af] tracking-tight">
            내 취향 공유하기
          </p>
        </button>
      </main>

      {/* Perfume Detail Full-Screen Popup */}
      <PerfumeDetailPopup
        perfume={selectedPerfume}
        onClose={() => setSelectedPerfume(null)}
      />
    </div>
  );
}

import { accordColorMap, getSillageInfo, getLongevityInfo } from "../../utils/recommendation";

function PerfumeDetailPopup({ perfume, onClose }: { perfume: Perfume | null; onClose: () => void }) {
  if (!perfume) return null;

  const sillage = getSillageInfo(perfume.sillage);
  const longevity = getLongevityInfo(perfume.longevity);

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-center bg-white animate-in fade-in duration-200">
      <div className="w-full max-w-[393px] h-full bg-white overflow-hidden relative flex flex-col">

        {/* Header (Matching Result page style) */}
        <header className="bg-white z-50 px-4 py-2 h-[58px] shadow-sm shrink-0">
          <div className="relative flex items-center justify-center h-full">
            {/* Back Button (left side) */}
            <div className="absolute left-0 top-0 h-full flex items-center justify-center">
              <button onClick={onClose} className="relative rounded-[16777200px] shrink-0 size-[36px] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Title */}
            <h1 className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold text-[18px] text-[#111827] tracking-[-0.4395px] leading-[27px]">
              향수 상세
            </h1>

            {/* Home Button (right side) */}
            <div className="absolute right-0 top-0 h-full flex items-center justify-center">
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
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-8 pb-12 pt-8">

          {/* 1. Image */}
          <div className="w-full aspect-square bg-white rounded-[24px] mb-2 flex items-center justify-center p-14 overflow-hidden">
            <ImageWithFallback
              alt={perfume.perfume_name_kr}
              className="w-full h-full object-contain"
              src={`/perfumes/${perfume.perfume_id}.jpg`}
            />
          </div>

          {/* 2. Brand & Name */}
          <div className="text-center mb-6">
            <h2 className="text-[17px] font-bold text-[#111827] mb-1 leading-tight tracking-tight uppercase">
              {perfume.brand_name_en}
            </h2>
            <p className="text-[17px] font-normal text-[#4b5563]">
              {perfume.perfume_name_kr}
            </p>
          </div>

          {/* 3. Description */}
          <div className="text-center mb-10">
            <p className="text-[15px] leading-[1.7] text-[#6b7280] break-keep font-normal">
              {perfume.description}
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#f3f4f6] mb-8" />

          {/* 4. Main Accords */}
          <div className="mb-10">
            <h3 className="text-[17px] font-bold text-[#111827] mb-5 text-left">메인 어코드</h3>
            <div className="flex flex-wrap items-center gap-4">
              {[perfume.main_accords_1, perfume.main_accords_2, perfume.main_accords_3].filter(Boolean).map((acc, idx) => {
                const color = accordColorMap[acc as Accord] || "#E5E7EB";
                const size = idx === 0 ? "size-[90px]" : idx === 1 ? "size-[75px]" : "size-[62px]";
                const fontSize = idx === 0 ? "text-[14px]" : idx === 1 ? "text-[12px]" : "text-[11px]";

                return (
                  <div
                    key={acc}
                    className={`rounded-full flex items-center justify-center text-center p-2 relative ${size}`}
                  >
                    {/* Blurred Background Glow */}
                    <div
                      className="absolute inset-0 rounded-full blur-[8px] opacity-70"
                      style={{
                        background: `radial-gradient(circle, ${color} 0%, ${color}aa 70%, transparent 100%)`,
                      }}
                    />
                    {/* Main Circle */}
                    <div
                      className="absolute inset-[10%] rounded-full blur-[4px] opacity-90"
                      style={{ backgroundColor: color }}
                    />
                    <span className={`text-white font-semibold uppercase leading-tight relative z-10 drop-shadow-sm ${fontSize}`}>
                      {acc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. Sillage (Diffusion) */}
          <div className="mb-10">
            <h3 className="text-[17px] font-bold text-[#111827] mb-4 text-left">확산력</h3>
            <div className="bg-[#f9fafb] p-5 rounded-[20px]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px] font-semibold text-[#111827]">{sillage.label}</span>
                <span className="text-[13px] text-[#9ca3af] font-medium tracking-tight">LEVEL {sillage.level}</span>
              </div>
              <div className="flex gap-1.5 w-full h-[12px]">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`flex-1 h-full rounded-full transition-all duration-500 ${step <= sillage.level ? 'bg-black' : 'bg-[#e5e7eb]'
                      }`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-3 px-0.5">
                <span className="text-[11px] text-[#9ca3af]">은은함</span>
                <span className="text-[11px] text-[#9ca3af]">매우강함</span>
              </div>
            </div>
          </div>

          {/* 6. Longevity (Duration) */}
          <div className="mb-4">
            <h3 className="text-[17px] font-bold text-[#111827] mb-4 text-left">지속력</h3>
            <div className="bg-[#f9fafb] p-5 rounded-[20px]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px] font-semibold text-[#111827]">{longevity.label}</span>
                <span className="text-[13px] text-[#9ca3af] font-medium tracking-tight">LEVEL {longevity.level}</span>
              </div>
              <div className="flex gap-1.5 w-full h-[12px]">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`flex-1 h-full rounded-full transition-all duration-500 ${step <= longevity.level ? 'bg-black' : 'bg-[#e5e7eb]'
                      }`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-3 px-0.5">
                <span className="text-[11px] text-[#9ca3af]">낮음</span>
                <span className="text-[11px] text-[#9ca3af]">매우높음</span>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Bottom CTA Button Section */}
        <div className="p-6 pb-10 bg-white border-t border-[#f3f4f6] shrink-0">
          <a
            href={`https://search.shopping.naver.com/search/all?query=${encodeURIComponent(perfume.perfume_name_kr)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-[56px] bg-[#111827] rounded-[16px] flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
          >
            <span className="text-white text-[16px] font-semibold">향수 보러가기</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 3H21V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 14L21 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-center mt-3 text-[12px] text-[#9ca3af] font-normal">
            네이버 쇼핑에서 확인
          </p>
        </div>

      </div>
    </div>
  );
}