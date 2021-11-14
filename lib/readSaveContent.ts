import calculated from "./calculatedPoints";

export default function readSaveContent(saveFile: string) {
  const content: string[] = <string[]>saveFile.match(/[^\r\n]+/g);
  let room: number = 143;
  let gameTimer: number = 0;
  let skillPoints: number = 0;
  let unlockedLevels: number = 0;
  let explorationPoints: number = 0;
  let progressPercentage: number = 0;

  // Set room and times
  room = Number(content[content.indexOf("Room") + 1]);
  gameTimer = Math.floor(Number(content[content.indexOf("Timer Game") + 1]));

  // Calculate skill points
  const skillPointsArray: Array<string | number> = parseArray(
    content.indexOf("Level Data: Beaten On Difficulty"),
    128
  );

  for (let index = 0; index < 128; index++) {
    if (!calculated.difficultyPoints.includes(index)) continue;
    skillPoints += Number(skillPointsArray[index]) + 1;
  }

  // Calculate unlocked levels
  for (let index = 0; index < 128; index++) {
    unlockedLevels += Number(
      parseArray(content.indexOf("Level Data: Unlocked"), 128)[index]
    );
  }

  // Calculate exploration points
  const explorationPointsIndex = content.indexOf(
    "Collected Exploration Points"
  );
  const explorationPointsArray = parseArray(explorationPointsIndex, 46);
  for (let index = 0; index < 46; index++) {
    if (calculated.explorationPoints.includes(explorationPointsArray[index]))
      explorationPoints++;
  }

  // Calculate progress percentage
  progressPercentage = Math.floor(
    ((unlockedLevels / 128 + skillPoints / 244 + explorationPoints / 46) / 3) *
      100
  );

  function parseArray(valueTitleIndex: number, listLength: number) {
    return content.slice(valueTitleIndex + 2, valueTitleIndex + listLength + 2);
  }

  return {
    room,
    gameTimer,
    skillPoints,
    explorationPoints,
    progressPercentage,
  };
}
