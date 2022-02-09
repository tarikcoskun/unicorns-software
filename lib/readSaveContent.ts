import type { Save } from "~/types/SaveFile"
import calculated from "./calculatedPoints"

const readSaveContent = (saveFile: string): Save => {
  let room: number = 143
  let gameTimer: number = 0
  let skillPoints: number = 0
  let unlockedLevels: number = 0
  let explorationPoints: number = 0
  let progressPercentage: number = 0
  const content: string[] = <string[]>saveFile.match(/[^\r\n]+/g)

  const parseArray = (valueTitleIndex: number, listLength: number) => content.slice(valueTitleIndex + 2, valueTitleIndex + listLength + 2)

  // Set room and timer
  room = Number(content[content.indexOf("Room") + 1])
  gameTimer = Math.floor(Number(content[content.indexOf("Timer Game") + 1]))

  // Calculate skill points
  const skillPointsArray: Array<string | number> = parseArray(content.indexOf("Level Data: Beaten On Difficulty"), 128)

  for (let index = 0; index < 128; index++) {
    if (!calculated.difficultyPoints.includes(index)) continue
    skillPoints += Number(skillPointsArray[index]) + 1
  }

  // Calculate unlocked levels
  for (let index = 0; index < 128; index++) {
    unlockedLevels += Number(parseArray(content.indexOf("Level Data: Unlocked"), 128)[index])
  }

  // Calculate exploration points
  const explorationPointsIndex = content.indexOf("Collected Exploration Points")
  const explorationPointsArray = parseArray(explorationPointsIndex, 46)
  for (let index = 0; index < 46; index++) {
    if (calculated.explorationPoints.includes(explorationPointsArray[index])) explorationPoints++
  }

  // Calculate progress percentage
  progressPercentage = Math.floor(((unlockedLevels / 128 + skillPoints / 244 + explorationPoints / 46) / 3) * 100)

  const generatedData = { room, gameTimer, skillPoints, explorationPoints, progressPercentage }
  console.table(generatedData)

  return generatedData
}

export default readSaveContent