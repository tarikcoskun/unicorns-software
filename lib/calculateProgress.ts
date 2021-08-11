export function calculateProgress(saveFile: string) {
  let content: Array<string> = <Array<string>>saveFile.match(/[^\r\n]+/g);
  let skillPoints: number = 0;
  let unlockedLevels: number = 0;
  let explorationPoints: number = 0;
  let progressPercentage: number = 0;

  // Calculate skill points
  const skillPointsIndex: number = content.indexOf(
    "Level Data: Beaten On Difficulty"
  );
  const skillPointsArray: Array<string | number> = parseArray(skillPointsIndex);
  const calculatedDifficultyPoints = [
    18, 19, 21, 22, 23, 24, 25, 26, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72, 74, 85, 86, 87, 88, 90, 91,
    92, 93, 95, 96, 97, 98, 99, 100, 101, 102, 103, 113, 114, 115, 116, 117,
    118, 119, 120, 121, 122, 125, 126,
  ];

  for (var i = 0; i < <number>(<unknown>content[skillPointsIndex + 1]); i++) {
    if (!calculatedDifficultyPoints.includes(i)) continue;
    skillPoints += Number(skillPointsArray[i]) + 1;
  }

  // Calculate unlocked levels
  const unlockedLevelsIndex = content.indexOf("Level Data: Unlocked");
  const unlockedLevelsArray = parseArray(unlockedLevelsIndex);

  for (
    var i = 0;
    i < <number>(<unknown>content[unlockedLevelsIndex + 1]);
    i++
  ) {
    if (i == 0) continue;
    unlockedLevels += Number(unlockedLevelsArray[i]);
  }

  // Calculate exploration points
  explorationPoints =
    parseArray(content.indexOf("Collected Exploration Points")).length - 1;

  // Calculate progress percentage
  progressPercentage = Math.floor(
    ((unlockedLevels / 128 + skillPoints / 244 + explorationPoints / 45) / 3) *
      100
  );

  function parseArray(valueTitleIndex: number) {
    return content.slice(
      valueTitleIndex + 1,
      Number(content[valueTitleIndex + 1]) + valueTitleIndex + 2
    );
  }

  return {
    skillPoints: skillPoints,
    explorationPoints: explorationPoints,
    progressPercentage: progressPercentage,
  };
}
