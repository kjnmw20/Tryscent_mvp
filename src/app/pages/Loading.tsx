import { Link, useNavigate } from "react-router";
import { useEffect } from "react";
import svgPaths from "../../imports/svg-n1hxbucvuj";

// Animated Spinner Component
function Spinner() {
  return (
    <div className="relative shrink-0 size-[30px] animate-spin" data-name="Spinner">
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

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    // 2.5초 후 결과 페이지로 자동 이동
    const timer = setTimeout(() => {
      navigate("/result", { replace: true });
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-dvh w-full" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(253, 253, 254) 33.333%, rgb(251, 252, 252) 66.667%, rgb(249, 250, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="bg-white relative w-[393px] max-w-full mx-auto shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] h-dvh flex flex-col items-center justify-center p-6" data-name="iPhone 16 - 14">
        {/* Spinner */}
        <div className="mb-6">
          <Spinner />
        </div>

        {/* Loading Text */}
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.6] text-[18px] text-black text-center whitespace-nowrap">
          당신의 취향을
          <br aria-hidden="true" />
          분석 중입니다..
        </p>
      </div>
    </div>
  );
}