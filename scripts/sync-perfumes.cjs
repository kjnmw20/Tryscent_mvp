const fs = require('fs');
const path = require('path');

/**
 * 이 스크립트는 프로젝트 루트의 CSV 파일을 읽어 src/data/perfumes.ts를 자동으로 갱신합니다.
 * 실행 방법: node scripts/sync-perfumes.js
 */

const CSV_FILENAME = 'perfume_metadata_tryscent_fulfilled_v0.2.csv';
const CSV_PATH = path.join(__dirname, '..', CSV_FILENAME);
const TS_PATH = path.join(__dirname, '..', 'src', 'data', 'perfumes.ts');

try {
  const content = fs.readFileSync(CSV_PATH, 'utf8');
  const lines = content.split('\n');
  const perfumes = [];

  // Metadata Template(1), Header(2) 제외하고 3행부터 시작
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.split(',').every(cell => !cell)) continue;
    
    // Simple CSV Parser logic
    const cells = [];
    let currentCell = '';
    let inQuotes = false;
    for (let char of line) {
      if (char === '"') inQuotes = !inQuotes;
      else if (char === ',' && !inQuotes) { cells.push(currentCell.trim()); currentCell = ''; }
      else currentCell += char;
    }
    cells.push(currentCell.trim());

    if (cells.length < 18) continue;

    const [id, brandEn, brandKr, nameEn, nameKr, active, gender, accords, a1, a1s, a2, a2s, a3, a3s, sil, lon, sea, img, desc, coupangUrl] = cells;

    perfumes.push({
      perfume_id: id,
      brand_name_en: brandEn,
      brand_name_kr: brandKr,
      perfume_name_en: nameEn,
      perfume_name_kr: nameKr,
      is_active: active === '1',
      gender: gender.toUpperCase() === 'UNISEX' ? 'UNISEX' : (gender.toUpperCase() === 'MALE' ? 'MALE' : 'FEMALE'),
      accords: accords.split('|').map(s => s.trim()).filter(s => s),
      main_accords_1: a1,
      main_accords_1_score: parseInt(a1s) || 0,
      main_accords_2: a2,
      main_accords_2_score: parseInt(a2s) || 0,
      main_accords_3: a3,
      main_accords_3_score: parseInt(a3s) || 0,
      sillage: sil.toUpperCase(),
      longevity: lon.toUpperCase(),
      season: sea.split('|').map(s => {
          let val = s.trim().toUpperCase();
          return val === 'FALL' ? 'AUTUMN' : val;
      }).filter(s => s),
      image_path: img || '',
      description: desc,
      coupang_url: coupangUrl || undefined
    });
  }

  const tsOutput = `import { Accord, SeasonCode } from "../utils/recommendation";

export interface Perfume {
  perfume_id: string;
  brand_name_en: string;
  brand_name_kr: string;
  perfume_name_en: string;
  perfume_name_kr: string;
  is_active: boolean;
  gender: "UNISEX" | "FEMALE" | "MALE" | string;
  accords: string[];
  main_accords_1: Accord | string;
  main_accords_1_score: number;
  main_accords_2: Accord | string;
  main_accords_2_score: number;
  main_accords_3: Accord | string;
  main_accords_3_score: number;
  sillage: "INTIMATE" | "WEAK" | "MODERATE" | "STRONG" | "ENORMOUS" | string;
  longevity: "WEAK" | "MODERATE" | "LONG_LASTING" | "ETERNAL" | string;
  season: (SeasonCode | string)[];
  image_path: string;
  description: string;
  sort_order?: number;
  coupang_url?: string;
}

export const perfumesDB: Perfume[] = ${JSON.stringify(perfumes, null, 2)};
`;

  fs.writeFileSync(TS_PATH, tsOutput);
  console.log(`Successfully synced ${perfumes.length} perfumes from ${CSV_FILENAME}`);
} catch (error) {
  console.error("Failed to sync perfumes:", error);
}
