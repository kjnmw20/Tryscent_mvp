import { useState, useMemo } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPaths from "../../imports/svg-krmgb6cs7e";
import { 
  calculateRecommendation, 
  accordLabels, 
  MoodCode, 
  PlaceCode, 
  EnergyCode, 
  getPrefType, 
  moodLabels, 
  placeLabels, 
  getRecommendedPerfumes,
  moodOptions,
  placeOptions,
  energyOptions,
  Accord
} from "../../utils/recommendation";

export default function DesignPlayground() {
  // Test Mock States
  const [gender, setGender] = useState("FEMALE");
  const [mood, setMood] = useState<MoodCode>("NEUTRAL");
  const [energy, setEnergy] = useState<EnergyCode>("CALM");
  const [place, setPlace] = useState<PlaceCode>("NEUTRAL");
  
  // UI Controls State
  const [showControls, setShowControls] = useState(true);

  // Derived Values (Logics from Result.tsx)
  const isNeutralCard = mood === "NEUTRAL" && place === "NEUTRAL";
  const topAccords = useMemo(() => calculateRecommendation(mood, place), [mood, place]);
  const prefType = useMemo(() => getPrefType(topAccords[0], topAccords[1], isNeutralCard), [topAccords, isNeutralCard]);
  const recommendedPerfumes = useMemo(() => {
    return getRecommendedPerfumes(gender, mood, energy, place, isNeutralCard).slice(0, 3);
  }, [gender, mood, energy, place, isNeutralCard]);

  const accord1 = accordLabels[topAccords[0]];
  const accord2 = accordLabels[topAccords[1]];

  let diffusionWidth = "30%";
  let diffusionText = "은은하게 퍼지는 향";
  switch (energy) {
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
    switch (energy) {
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
  }, [energy]);

  // Animation Data (Similar to AnimationTest.tsx but potentially scalable)
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
      
      // Strictly use the two mapped colors
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

  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col md:flex-row font-sans">
      {/* Control Panel (left/top) */}
      <div className={`bg-white p-6 shadow-lg z-50 overflow-auto transition-all ${showControls ? "w-full md:w-[350px]" : "w-12 h-12 overflow-hidden"}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-xl text-black">Design Controls</h2>
          <button onClick={() => setShowControls(!showControls)} className="p-2 hover:bg-gray-100 rounded text-black">
            {showControls ? "✕" : "☰"}
          </button>
        </div>

        {showControls && (
          <div className="space-y-6 pb-10">
            {/* Gender */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Gender</label>
              <div className="flex gap-2">
                {["FEMALE", "MALE"].map((g) => (
                  <button key={g} onClick={() => setGender(g)} className={`px-3 py-1.5 rounded-md text-xs font-semibold ${gender === g ? "bg-black text-white" : "bg-gray-100 text-gray-600"}`}>{g}</button>
                ))}
              </div>
            </div>

            {/* Mood */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Mood (Q2)</label>
              <select value={mood} onChange={(e) => setMood(e.target.value as MoodCode)} className="w-full bg-gray-50 border border-gray-200 rounded-md p-2 text-sm text-black">
                {moodOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            {/* Place */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Place (Q4)</label>
              <select value={place} onChange={(e) => setPlace(e.target.value as PlaceCode)} className="w-full bg-gray-50 border border-gray-200 rounded-md p-2 text-sm text-black">
                {placeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            {/* Energy */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Energy (Diffusion Level)</label>
              <div className="flex flex-wrap gap-2">
                {energyOptions.map((e) => (
                  <button key={e} onClick={() => setEnergy(e)} className={`px-3 py-1.5 rounded-md text-xs font-semibold ${energy === e ? "bg-black text-white" : "bg-gray-100 text-gray-600"}`}>{e}</button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-[10px] text-gray-400 mb-2 font-mono">Current PrefType: {prefType.type_name}</p>
              <button onClick={() => window.location.reload()} className="w-full py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-bold hover:bg-gray-300">
                Refresh Test Data
              </button>
            </div>
            
            <Link to="/animation-test" className="block text-center text-blue-500 text-sm hover:underline">
               Go to Animation v2 Test →
            </Link>
          </div>
        )}
      </div>

      {/* Preview Section (Mock Mobile View) */}
      <div className="flex-1 overflow-auto p-4 md:p-10 flex justify-center bg-gray-200">
        <div className="w-full max-w-[393px] bg-white h-fit min-h-[852px] shadow-2xl relative overflow-hidden rounded-[40px] border-[8px] border-black">
          {/* Header Mock */}
          <header className="bg-white px-4 py-2 h-[58px] border-b flex items-center justify-center sticky top-0 z-[60]">
            <h1 className="font-semibold text-[18px] text-black">취향 테스트 결과</h1>
          </header>

          <main className="pb-8 px-6">
            {/* Result Display Area (Sandbox) - Swapped Layout */}
            <div
              className={`relative w-full aspect-[4/5] mb-0 mt-6 flex flex-col items-center`}
            >
              {/* Animated Circular Object Area (Top) */}
              <div className="relative w-full flex-[1.5] flex items-center justify-center pt-10">
                
                {/* Particles Container (Rich & Colored) */}
                <div className="absolute top-1/2 left-1/2 w-0 h-0 z-[40] pointer-events-none">
                  {particles.map(p => (
                    <div 
                      key={p.id} 
                      className="test-particle-v2"
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

                {/* The Circular Gradient Ball (Vivid 3D Diagonal Version) */}
                <div className="relative z-20 flex items-center justify-center">
                   
                   {/* Main 3D Styled Ball */}
                   <div 
                    className="relative flex items-center justify-center z-10"
                    style={{ width: animParams.ballSize, height: animParams.ballSize }}
                   >
                      {/* Core Color (More Vivid) */}
                      <div 
                        className="absolute inset-0 rounded-full blur-[14px] saturate-[150%] brightness-[105%] shadow-[0_15px_50px_rgba(0,0,0,0.1)]"
                        style={{
                          background: `linear-gradient(135deg, ${prefType.color_code_1} 10%, ${prefType.color_code_2} 90%)`,
                        }}
                      />
                      
                      {/* 3D Highlight Layer (Top-left Shine) */}
                      <div 
                        className="absolute top-1 left-2 w-1/2 h-2/5 rounded-full bg-white/40 blur-[12px] rotate-[-20deg] z-20 pointer-events-none"
                      />

                      {/* Depth Shadow (Bottom-right darker tint) */}
                      <div 
                        className="absolute bottom-1 right-2 w-1/2 h-2/5 rounded-full bg-black/5 blur-[15px] z-5 pointer-events-none"
                      />
                   </div>
                </div>
              </div>

              {/* Text Content (Bottom, Black) */}
              <div className="relative w-full flex-1 flex flex-col items-center text-center px-6 pt-6 z-40">
                <h2 className="text-[32px] font-bold mb-2 tracking-[-0.02em] text-black">
                  {prefType.type_name}
                </h2>
                <p className="text-[14px] font-thin text-black/60 leading-[1.6] break-keep">
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

            {/* Description Text */}
            <p className="text-[16px] leading-[1.6] text-[#4b5563] mb-8 text-left">
              당신의 향 취향 유형은 <span className="font-bold">"{prefType.type_name}"</span>입니다. {prefType.type_sentence}{" "}
              {!isNeutralCard && (
                <>
                  <span className="font-bold">{accord1}</span>와 <span className="font-bold">{accord2}</span> 계열의 향이 잘 어울려요.{" "}
                </>
              )}
            </p>

            <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">매핑된 색상 코드</p>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded" style={{background: prefType.color_code_1}} />
                        <span className="text-xs font-mono">{prefType.color_code_1}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded" style={{background: prefType.color_code_2}} />
                        <span className="text-xs font-mono">{prefType.color_code_2}</span>
                    </div>
                </div>
            </div>

            {/* Recommendation Preview */}
            <div className="mb-8">
              <h2 className="font-semibold text-black mb-3 text-[18px]">추천 향수 (Preview)</h2>
              <div className="space-y-4">
                {recommendedPerfumes.length > 0 ? (
                  recommendedPerfumes.map((perfume) => (
                    <div key={perfume.perfume_id} className="bg-white rounded-[16px] shadow-sm border p-4 flex gap-4">
                      <div className="w-[60px] h-[60px] bg-gray-50 rounded-lg flex-shrink-0 flex items-center justify-center p-1 text-[8px] text-gray-300">
                        IMG
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[14px] font-bold truncate">{perfume.brand_name_en}</h3>
                        <p className="text-[12px] text-gray-500 truncate">{perfume.perfume_name_kr}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">추천 결과 없음</p>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .test-particle-v2 {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          opacity: 0;
          will-change: transform, opacity;
          animation: particle-diffuse-v2 var(--p-duration, 4s) cubic-bezier(0.1, 0, 0.3, 1) infinite;
          animation-delay: var(--p-delay, 0s);
        }

        @keyframes particle-diffuse-v2 {
          0% {
            transform: translate(-50%, -50%) translate(0, 0) scale(0.1);
            opacity: 0;
          }
          15% {
            opacity: var(--p-opacity, 0.8);
          }
          80% {
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(0.6);
            opacity: 0;
          }
        }
      `}} />
    </div>
  );
}
