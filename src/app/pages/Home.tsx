import { Link } from "react-router";
import imgImage1 from "@/assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgWatermarked0Fa2934252A84E30B9122751540B41731 from "@/assets/69f324ca163abfcb7ff00bd1b381e686588136cf.png";

export default function Home() {
  return (
    <div className="bg-white h-screen w-full max-w-[393px] mx-auto relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 max-w-[393px] mx-auto bg-white z-50 flex items-center justify-center px-4 py-2 h-[58px]">
        <p className="font-['Italianno',sans-serif] text-[40px] text-black">Tryscent</p>
      </header>

      {/* Hero Section with Image */}
      <section className="relative w-full h-[calc(100vh-58px)] mt-[58px] overflow-hidden">
        <img 
          alt="향수 배경" 
          className="absolute inset-0 w-full h-full object-cover scale-[1.15] -translate-x-1 translate-y-3" 
          src={imgImage1} 
        />
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover scale-[1.15] -translate-x-1 translate-y-3" 
          src={imgWatermarked0Fa2934252A84E30B9122751540B41731} 
        />
        {/* 반투명 오버레이 */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center">
          <h1 className="text-white text-[24px] font-semibold tracking-[-0.48px] leading-[1.2] mb-2 break-keep">
            당신은 어떤 사람인가요?
          </h1>
          <p className="text-[16px] leading-[1.4] mb-6 text-[#d4d4d4] break-keep">
            나에게 맞는 향수를 찾아나가는 여정
          </p>
          <Link to="/survey">
            <button className="bg-black text-white px-4 py-3 rounded-[8px] text-[16px]">
              향수 취향 찾으러 가기
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
