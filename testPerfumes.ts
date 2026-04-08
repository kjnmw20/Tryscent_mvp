import { getRecommendedPerfumes, moodOptions, placeOptions, energyOptions, seasonOptions } from './src/utils/recommendation';

let emptyCount = 0;
let lessThanThreeCount = 0;
const genders = ["MALE", "FEMALE"];
const emptyCases = [];

for (const gender of genders) {
  for (const mood of moodOptions) {
    for (const energy of energyOptions) {
      for (const place of placeOptions) {
        for (const season of seasonOptions) {
          if (mood === "NEUTRAL" && place === "NEUTRAL") {
             continue; // Bypass internal logic since it's hardcoded to slice(0,3) in Result.tsx
          }
          const results = getRecommendedPerfumes(gender, mood, energy, place, season);
          if (results.length === 0) {
            emptyCount++;
            emptyCases.push({gender, mood, energy, place, season});
          } else if (results.length < 3) {
            lessThanThreeCount++;
          }
        }
      }
    }
  }
}

console.log(`Test Completed!`);
console.log(`Total 0 result cases: ${emptyCount}`);
console.log(`Total 1~2 result cases: ${lessThanThreeCount}`);
if (emptyCases.length > 0) {
  console.log('Sample empty cases (up to 5):', JSON.stringify(emptyCases.slice(0, 5), null, 2));
}
