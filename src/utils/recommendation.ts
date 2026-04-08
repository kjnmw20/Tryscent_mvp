export type Accord = "WOODY" | "FRESH" | "SWEET" | "FLORAL" | "MUSKY" | "SPICY";

export type MoodCode = 
  | "SOFT_WARM"
  | "SWEET_ROMANTIC"
  | "NATURAL_CALM"
  | "CLEAN_FRESH"
  | "MYSTIC_DREAMY"
  | "CHIC_SENSUAL"
  | "NEUTRAL";

export type PlaceCode = 
  | "FOREST"
  | "BEACH"
  | "CITY"
  | "GARDEN"
  | "RAINY_STREET"
  | "ROOM"
  | "NEUTRAL";

export type EnergyCode = "ACTIVE" | "CALM" | "NORMAL";

export type SeasonCode = "SPRING" | "SUMMER" | "AUTUMN" | "WINTER" | "NEUTRAL";

export const energyOptions: EnergyCode[] = ["ACTIVE", "CALM", "NORMAL"];

export const seasonOptions: SeasonCode[] = ["SPRING", "SUMMER", "AUTUMN", "WINTER", "NEUTRAL"];

export const accordLabels: Record<Accord, string> = {
  WOODY: "우디",
  FRESH: "프레시",
  SWEET: "스위트",
  FLORAL: "플로럴",
  MUSKY: "머스크",
  SPICY: "스파이시"
};

export const accordColors: Record<Accord, string> = {
  WOODY: "#5F9E6E", 
  FRESH: "#A9D6E5",
  SWEET: "#F6E27A",
  FLORAL: "#FF8FB1",
  MUSKY: "#C7C0B7", // Darkened slightly for white text contrast
  SPICY: "#5A3FD9"
};

// Fixed specific WOODY color to match the common scent green
export const accordColorMap: Record<Accord, string> = {
  WOODY: "#5F9E6E",
  FRESH: "#A9D6E5",
  SWEET: "#F6E27A",
  FLORAL: "#FF8FB1",
  MUSKY: "#DED9D1", // Soft beige-gray
  SPICY: "#5A3FD9"
};

export const moodOptions: MoodCode[] = [
  "SOFT_WARM",
  "NATURAL_CALM",
  "CLEAN_FRESH",
  "SWEET_ROMANTIC",
  "MYSTIC_DREAMY",
  "CHIC_SENSUAL",
  "NEUTRAL"
];

export const placeOptions: PlaceCode[] = [
  "FOREST",
  "BEACH",
  "GARDEN",
  "RAINY_STREET",
  "ROOM",
  "CITY",
  "NEUTRAL"
];

export const moodLabels: Record<MoodCode, string> = {
  SOFT_WARM: "부드럽고 따듯한",
  SWEET_ROMANTIC: "달콤하고 로맨틱한",
  NATURAL_CALM: "자연스럽고 편안한",
  CLEAN_FRESH: "깨끗하고 청량한",
  MYSTIC_DREAMY: "화사하고 우아한",
  CHIC_SENSUAL: "시크하고 도회적인",
  NEUTRAL: "다양한 매력을 지닌" // Fallback label
};

export const placeLabels: Record<PlaceCode, string> = {
  FOREST: "숲 속에 있는 듯한",
  BEACH: "해변에 있는 듯한",
  CITY: "밤의 거리에 있는 듯한",
  GARDEN: "꽃밭에 있는 듯한",
  RAINY_STREET: "감성적인 카페에 있는 듯한",
  ROOM: "포근한 방 안에 있는 듯한",
  NEUTRAL: "새로운 곳에 있는 듯한" // Fallback label
};

export const seasonLabels: Record<SeasonCode, string> = {
  SPRING: "봄",
  SUMMER: "여름",
  AUTUMN: "가을",
  WINTER: "겨울",
  NEUTRAL: "잘 모르겠어요"
};

const fixedOrder: Accord[] = ["WOODY", "MUSKY", "FLORAL", "FRESH", "SWEET", "SPICY"];

const moodToAccord: Record<MoodCode, Accord> = {
  SOFT_WARM: "MUSKY",
  NATURAL_CALM: "WOODY",
  CLEAN_FRESH: "FRESH",
  SWEET_ROMANTIC: "SWEET",
  MYSTIC_DREAMY: "FLORAL",
  CHIC_SENSUAL: "SPICY",
  NEUTRAL: "WOODY"
};

const placeToAccord: Record<PlaceCode, Accord> = {
  FOREST: "WOODY",
  BEACH: "FRESH",
  GARDEN: "FLORAL",
  CITY: "SPICY",
  RAINY_STREET: "SWEET",
  ROOM: "MUSKY",
  NEUTRAL: "MUSKY"
};

const moodScoreMap: Record<MoodCode, Partial<Record<Accord, number>>> = {
  SOFT_WARM: { MUSKY: 2, SWEET: 1 },
  NATURAL_CALM: { WOODY: 2, MUSKY: 1 },
  CLEAN_FRESH: { FRESH: 2, FLORAL: 1 },
  SWEET_ROMANTIC: { SWEET: 2, FLORAL: 1 },
  MYSTIC_DREAMY: { FLORAL: 2, MUSKY: 1 },
  CHIC_SENSUAL: { SPICY: 2, WOODY: 1 },
  NEUTRAL: {}
};

const placeScoreMap: Record<PlaceCode, Partial<Record<Accord, number>>> = {
  FOREST: { WOODY: 2, FRESH: 1 },
  BEACH: { FRESH: 2, FLORAL: 1 },
  GARDEN: { FLORAL: 2, SWEET: 1 },
  CITY: { SPICY: 2, WOODY: 1 },
  RAINY_STREET: { SWEET: 2, MUSKY: 1 },
  ROOM: { MUSKY: 2, SWEET: 1 },
  NEUTRAL: {}
};

export function calculateRecommendation(mood: MoodCode, place: PlaceCode): Accord[] {
  let accord1 = moodToAccord[mood];
  let accord2 = placeToAccord[place];

  if (accord1 === accord2) {
    switch (accord1) {
      case "WOODY": accord2 = "MUSKY"; break;
      case "FRESH": accord2 = "FLORAL"; break;
      case "SWEET": accord2 = "FLORAL"; break;
      case "FLORAL": accord2 = "FRESH"; break;
      case "SPICY": accord2 = "WOODY"; break;
      case "MUSKY": accord2 = "SWEET"; break;
    }
  }

  return [accord1, accord2];
}

export type PrefType = {
  type_name: string;
  type_description: string;
  type_sentence: string;
  color_code_1: string;
  color_code_2: string;
};

export function getPrefType(accord1: Accord, accord2: Accord, isNeutral: boolean = false): PrefType {
  if (isNeutral) return { type_name: "THE NEUTRAL", type_description: "아직 취향이 뚜렷하게 정해지지 않아, 자신에게 맞는 향을 찾아가는 중입니다.", type_sentence: "아직 취향이 뚜렷하게 정해지지 않아, 자신에게 맞는 향을 찾아가는 유형이죠.", color_code_1: "#E5E7EB", color_code_2: "#9CA3AF" };
  
  const combination = [accord1, accord2].sort().join("_");
  
  switch (combination) {
    case ["FRESH", "MUSKY"].sort().join("_"): return { type_name: "THE PURE", type_description: "맑고 깨끗한 느낌이 연상되는 투명한 향", type_sentence: "맑고 깨끗한 느낌이 연상되는 유형이죠.", color_code_1: "#A9D6E5", color_code_2: "#F5F1E8" };
    case ["FRESH", "FLORAL"].sort().join("_"): return { type_name: "THE VIVID", type_description: "산뜻함 위에 화사한 생기가 더해진 선명한 향", type_sentence: "산뜻함 위에 화사한 생기가 더해진 유형이죠.", color_code_1: "#A9D6E5", color_code_2: "#FF8FB1" };
    case ["FRESH", "SPICY"].sort().join("_"): return { type_name: "THE SHARP", type_description: "선명하고 또렷한 긴장감이 살아있는 향", type_sentence: "선명하고 또렷한 긴장감이 살아있는 유형이죠.", color_code_1: "#A9D6E5", color_code_2: "#5A3FD9" };
    case ["FRESH", "WOODY"].sort().join("_"): return { type_name: "THE NATURAL", type_description: "자연스럽고 담백한 무드로 편안함을 주는 향", type_sentence: "자연스럽고 담백한 무드로 편안함을 주는 유형이죠.", color_code_1: "#A9D6E5", color_code_2: "#5F9E6E" };
    case ["FRESH", "SWEET"].sort().join("_"): return { type_name: "THE LIVELY", type_description: "상큼함과 달콤함이 어우러진 생기 있는 향", type_sentence: "상큼함과 달콤함이 어우러진 생기 있는 유형이죠.", color_code_1: "#A9D6E5", color_code_2: "#F6E27A" };
    case ["WOODY", "SPICY"].sort().join("_"): return { type_name: "THE DEEP", type_description: "묵직하고 깊이감 있는 분위기가 느껴지는 향", type_sentence: "묵직하고 깊이감 있는 분위기가 느껴지는 유형이죠.", color_code_1: "#5F9E6E", color_code_2: "#5A3FD9" };
    case ["WOODY", "MUSKY"].sort().join("_"): return { type_name: "THE CALM", type_description: "차분하고 안정적인 무드로 편안함을 주는 향", type_sentence: "차분하고 안정적인 무드로 편안함을 주는 유형이죠.", color_code_1: "#5F9E6E", color_code_2: "#F5F1E8" };
    case ["WOODY", "SWEET"].sort().join("_"): return { type_name: "THE WARM", type_description: "따뜻한 온기가 은은하게 감도는 향", type_sentence: "따뜻한 온기가 은은하게 감도는 유형이죠.", color_code_1: "#5F9E6E", color_code_2: "#F6E27A" };
    case ["WOODY", "FLORAL"].sort().join("_"): return { type_name: "THE HARMONY", type_description: "자연스러움과 화사함이 균형 있게 어우러진 향", type_sentence: "자연스러움과 화사함이 균형 있게 어우러진 유형이죠.", color_code_1: "#5F9E6E", color_code_2: "#FF8FB1" };
    case ["FLORAL", "MUSKY"].sort().join("_"): return { type_name: "THE SOFT", type_description: "부드럽고 포근하게 감싸 편안함을 주는 향", type_sentence: "부드럽고 포근하게 감싸 편안함을 주는 유형이죠.", color_code_1: "#FF8FB1", color_code_2: "#F5F1E8" };
    case ["FLORAL", "SWEET"].sort().join("_"): return { type_name: "THE LOVELY", type_description: "은은한 달콤함과 화사함이 어우러진 사랑스러운 향", type_sentence: "은은한 달콤함과 화사함이 어우러진 유형이죠.", color_code_1: "#FF8FB1", color_code_2: "#F6E27A" };
    case ["MUSKY", "SWEET"].sort().join("_"): return { type_name: "THE SILKY", type_description: "매끄럽고 부드러운 질감이 느껴지는 향", type_sentence: "매끄럽고 부드러운 질감이 느껴지는 유형이죠.", color_code_1: "#F5F1E8", color_code_2: "#F6E27A" };
    case ["SPICY", "FLORAL"].sort().join("_"): return { type_name: "THE ALLURE", type_description: "관능적이고 매혹적인 분위기가 인상적인 향", type_sentence: "관능적이고 매혹적인 분위기가 인상적인 유형이죠.", color_code_1: "#5A3FD9", color_code_2: "#FF8FB1" };
    case ["SPICY", "SWEET"].sort().join("_"): return { type_name: "THE BOLD", type_description: "강렬하면서도 대담한 인상이 또렷하게 남는 향", type_sentence: "강렬하면서도 대담한 인상이 또렷하게 남는 유형이죠.", color_code_1: "#5A3FD9", color_code_2: "#F6E27A" };
    case ["MUSKY", "SPICY"].sort().join("_"): return { type_name: "THE MYSTIC", type_description: "깊고 신비로운 분위기가 은밀하게 감도는 향", type_sentence: "깊고 신비로운 분위기가 은밀하게 감도는 유형이죠.", color_code_1: "#F5F1E8", color_code_2: "#5A3FD9" };
    default: return { type_name: "THE NEUTRAL", type_description: "알 수 없는 조합입니다.", type_sentence: "알 수 없는 유형입니다.", color_code_1: "#E5E7EB", color_code_2: "#9CA3AF" };
  }
}

import { Perfume, perfumesDB } from "../data/perfumes";

export function getRecommendedPerfumes(
  gender: string,
  mood: MoodCode,
  energy: EnergyCode,
  place: PlaceCode,
  isNeutral: boolean = false
): Perfume[] {
  // 1. 유저 어코드 점수 및 톱 2 계산
  let topAccords = calculateRecommendation(mood, place);

  // NEUTRAL 타입인 경우 성별에 따른 고정 어코드 적용
  if (isNeutral) {
    if (gender === "MALE") {
      topAccords = ["WOODY", "FRESH"];
    } else {
      // FEMALE 또는 기타 경우
      topAccords = ["FLORAL", "MUSKY"];
    }
  }
  
  const userScores: Record<Accord, number> = {
    WOODY: 0, MUSKY: 0, FLORAL: 0, FRESH: 0, SWEET: 0, SPICY: 0
  };
  
  // perfume_score_new_v0.1 가산점 로직 반영
  const mPoints = moodScoreMap[mood] || {};
  const pPoints = placeScoreMap[place] || {};

  (Object.keys(mPoints) as Accord[]).forEach(acc => {
    userScores[acc] += mPoints[acc] || 0;
  });
  (Object.keys(pPoints) as Accord[]).forEach(acc => {
    userScores[acc] += pPoints[acc] || 0;
  });

  // 2. 살아있는 전체 향수 목록 가져옴
  let filtered = perfumesDB.filter(p => p.is_active);

  // 1차 필터: 성별 매칭
  filtered = filtered.filter(p => {
    if (gender === "FEMALE") return p.gender === "FEMALE" || p.gender === "UNISEX";
    if (gender === "MALE") return p.gender === "MALE" || p.gender === "UNISEX";
    return true; 
  });

  // 2차 필터: 확산력(에너지) 매칭
  filtered = filtered.filter(p => {
    if (energy === "ACTIVE") return ["ENORMOUS", "STRONG", "MODERATE"].includes(p.sillage);
    if (energy === "CALM") return ["INTIMATE", "MODERATE"].includes(p.sillage);
    if (energy === "NORMAL") return p.sillage === "MODERATE";
    return true;
  });

  // 3차 필터: 핵심 향 조건 (향수의 1순위, 2순위 향 중 최소 하나가 유저 추천향 1, 2위에 속해야 함)
  filtered = filtered.filter(p => {
    const main1 = p.main_accords_1 as Accord;
    const main2 = p.main_accords_2 as Accord;
    return topAccords.includes(main1) || topAccords.includes(main2);
  });

  // NEUTRAL 인 경우에도 이제 고정된 topAccords를 기반으로 하단 점수 스코어링 로직을 수행합니다.


  // 5. 최종 점수 스코어링
  const scoredPerfumes = filtered.map(perfume => {
    let score = 0;

    const calculateScoreForAccord = (accordName: string, weight: number) => {
      const isTopAccord = topAccords.includes(accordName as Accord);
      const correctionCoefficient = isTopAccord ? 1.2 : 1.0;
      const userStatScore = userScores[accordName as Accord] || 0;
      return weight * userStatScore * correctionCoefficient;
    };

    score += calculateScoreForAccord(perfume.main_accords_1 as string, perfume.main_accords_1_score || 0);
    score += calculateScoreForAccord(perfume.main_accords_2 as string, perfume.main_accords_2_score || 0);
    score += calculateScoreForAccord(perfume.main_accords_3 as string, perfume.main_accords_3_score || 0);

    return { perfume, score };
  });

  // 6. 점수 내림차순 및 동점자 우선순위 처리 리턴
  scoredPerfumes.sort((a, b) => {
    // ① 가산점 합산 점수 동일 시
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    
    // ② 핵심 어코드(최고점 어코드)가 일치하는 향수 우선 추천
    const aMatchCore = a.perfume.main_accords_1 === topAccords[0] ? 1 : 0;
    const bMatchCore = b.perfume.main_accords_1 === topAccords[0] ? 1 : 0;
    if (bMatchCore !== aMatchCore) {
      return bMatchCore - aMatchCore; // 1(일치)인 향수가 상단으로
    }
    
    // ③ 그래도 동점일 시, 내부 고정 순서 (향후 정의 전까지 임시로 ID순 정렬)
    return a.perfume.perfume_id.localeCompare(b.perfume.perfume_id);
  });
  return scoredPerfumes.map(sp => sp.perfume);
}

export function getSillageInfo(sillage: string) {
  switch (sillage) {
    case "INTIMATE":
      return { label: "은은함", level: 1 };
    case "MODERATE":
      return { label: "보통", level: 2 };
    case "STRONG":
      return { label: "강함", level: 3 };
    case "ENORMOUS":
      return { label: "매우강함", level: 4 };
    default:
      return { label: "정보없음", level: 0 };
  }
}

export function getLongevityInfo(longevity: string) {
  switch (longevity) {
    case "WEAK":
      return { label: "낮음", level: 1 };
    case "MODERATE":
      return { label: "보통", level: 2 };
    case "LONG_LASTING":
      return { label: "높음", level: 3 };
    case "ETERNAL":
      return { label: "매우높음", level: 4 };
    default:
      return { label: "정보없음", level: 0 };
  }
}
