import { useMemo } from "react";
import { Link } from "react-router";

export default function AnimationTest() {
  const particles = useMemo(() => {
    return Array.from({ length: 250 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      // Heavier concentration in the center for more 'emergence' feel
      const r = Math.pow(Math.random(), 0.7); 
      const maxDist = 350;
      const distance = r * maxDist;
      
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      const duration = 3 + Math.random() * 5;
      const delay = -(Math.random() * duration);
      const size = 1 + Math.random() * 4;
      const opacity = 0.6 + Math.random() * 0.4;
      const blur = Math.random() * 2;
      
      // Some particles are colored like the source
      const colorType = Math.random();
      const color = colorType > 0.8 ? "#38bdf8" : (colorType > 0.6 ? "#818cf8" : "#ffffff");

      return {
        id: i,
        tx: `${tx}px`,
        ty: `${ty}px`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        size: `${size}px`,
        opacity,
        blur: `${blur}px`,
        color
      };
    });
  }, []);

  return (
    <div className="bg-white h-screen w-full flex items-center justify-center overflow-hidden relative font-sans">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_75%)]" />

      {/* Navigation */}
      <div className="absolute top-10 left-6 z-50">
        <Link to="/" className="text-gray-400 hover:text-gray-900 flex items-center gap-2 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span className="text-sm font-medium tracking-tight">돌아가기</span>
        </Link>
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        {/* Deep ambient glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

        <div className="relative w-[300px] h-[300px] flex items-center justify-center">
          {/* Particles (rendered behind and in front for depth) */}
          <div className="absolute inset-0 z-10">
            {particles.slice(0, 125).map((p) => (
              <div
                key={p.id}
                className="test-particle"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color === "#ffffff" ? "#cbd5e1" : p.color, // Change white particles to light grey
                  "--tx": p.tx,
                  "--ty": p.ty,
                  "--p-duration": p.duration,
                  "--p-delay": p.delay,
                  "--p-opacity": p.opacity,
                  "--p-blur": p.blur,
                } as any}
              />
            ))}
          </div>

          {/* Central Circular Object with 2-color gradient */}
          <div className="relative z-20">
            {/* Outer soft glow layer */}
            <div className="absolute inset-[-40px] rounded-full bg-blue-400/10 blur-[30px] animate-pulse" />
            
            {/* Main Gradient Ball (The source) */}
            <div 
              className="w-[120px] h-[120px] rounded-full relative z-10 shadow-[0_10px_50px_rgba(56,189,248,0.2)] flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
                filter: "blur(12px)", // Softened boundary
                opacity: 0.85
              }}
            >
              {/* Internal light ray/glint */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6)_0%,transparent_70%)]" />
            </div>

            {/* Core intensive glow - kept sharper for centering */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-white/70 blur-[10px] z-20 animate-pulse" />
          </div>

          {/* Front Particles */}
          <div className="absolute inset-0 z-30">
            {particles.slice(125).map((p) => (
              <div
                key={p.id}
                className="test-particle"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color === "#ffffff" ? "#cbd5e1" : p.color,
                  "--tx": p.tx,
                  "--ty": p.ty,
                  "--p-duration": p.duration,
                  "--p-delay": p.delay,
                  "--p-opacity": p.opacity,
                  "--p-blur": p.blur,
                } as any}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-20 text-center w-full px-10 pointer-events-none z-40">
        <h1 className="text-gray-900 text-2xl font-bold mb-3 tracking-tight">
          그라데이션 원형 확산 테스트
        </h1>
        <div className="inline-block px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-4 backdrop-blur-sm">
          <p className="text-gray-500 text-sm font-medium">Enhanced Animation v2 (Light)</p>
        </div>
        <p className="text-gray-400 text-[15px] leading-relaxed max-w-[300px] mx-auto break-keep">
          2가지 색상이 혼합된 원형 구체 중심에서<br/>향기 입자들이 입체적으로 확산되는 효과입니다.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .test-particle {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
          will-change: transform, opacity;
          animation: test-diffuse var(--p-duration, 4s) cubic-bezier(0.1, 0, 0.3, 1) infinite;
          animation-delay: var(--p-delay, 0s);
          filter: blur(var(--p-blur, 0.5px));
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.2);
        }

        @keyframes test-diffuse {
          0% {
            transform: translate(-50%, -50%) translate(0, 0) scale(0.1);
            opacity: 0;
          }
          15% {
            opacity: var(--p-opacity, 0.8);
            transform: translate(-50%, -50%) translate(calc(var(--tx) * 0.05), calc(var(--ty) * 0.05)) scale(1.1);
          }
          100% {
            transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(0.3);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0% { transform: scale(0.95); opacity: 0.1; }
          100% { transform: scale(1.1); opacity: 0.3; }
        }
      `}} />
    </div>
  );
}
