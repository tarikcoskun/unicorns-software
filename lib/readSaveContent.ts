import {
  calculatedExplorationPoints,
  calculatedDifficultyPoints,
} from "@lib/calculatedPoints";

export function readSaveContent(saveFile: string) {
  let content: Array<string> = <Array<string>>saveFile.match(/[^\r\n]+/g);
  let room: number = 143;
  let gameTimer: number = 0;
  let skillPoints: number = 0;
  let unlockedLevels: number = 0;
  let explorationPoints: number = 0;
  let progressPercentage: number = 0;

  // Set room
  room = Number(content[content.indexOf("Room") + 1]);

  // Set timer
  gameTimer = Math.floor(Number(content[content.indexOf("Timer Game") + 1]));

  // Calculate skill points
  const skillPointsArray: Array<string | number> = parseArray(
    content.indexOf("Level Data: Beaten On Difficulty"),
    128
  );

  for (var index = 0; index < 128; index++) {
    if (!calculatedDifficultyPoints.includes(index)) continue;
    skillPoints += Number(skillPointsArray[index]) + 1;
  }

  // Calculate unlocked levels
  for (var index = 0; index < 128; index++) {
    unlockedLevels += Number(
      parseArray(content.indexOf("Level Data: Unlocked"), 128)[index]
    );
  }

  // Calculate exploration points
  const explorationPointsIndex = content.indexOf(
    "Collected Exploration Points"
  );
  const explorationPointsArray = parseArray(explorationPointsIndex, 45);
  for (var index = 0; index < 45; index++) {
    if (calculatedExplorationPoints.includes(explorationPointsArray[index]))
      explorationPoints++;
  }

  // Calculate progress percentage
  progressPercentage = Math.floor(
    ((unlockedLevels / 128 + skillPoints / 244 + explorationPoints / 45) / 3) *
      100
  );

  function parseArray(valueTitleIndex: number, listLength: number) {
    return content.slice(valueTitleIndex + 2, valueTitleIndex + listLength + 2);
  }

  return {
    room: room,
    gameTimer: gameTimer,
    skillPoints: skillPoints,
    explorationPoints: explorationPoints,
    progressPercentage: progressPercentage,
  };
}
