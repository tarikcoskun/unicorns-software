import type { Save } from "@/types/SaveFile"
import calculated from "./calculatedPoints"

/**
 * Returns the necessary parts of the save file.
 * @param {string} saveFile The target save file.
 * @returns {Save} Room, timer, skill points, exploration points and progress percentage.
 */

const readSaveContent = (saveFile: string): Save => {
  let room: number = 143
  let gameTimer: number = 0
  let skillPoints: number = 0
  let unlockedLevels: number = 0
  let progressPercentage: number = 0
  let explorationPoints: string[] = []
  const content: string[] = <string[]>saveFile.match(/[^\r\n]+/g)

  const parseArray = (valueTitleIndex: number, listLength: number) => content.slice(valueTitleIndex + 2, valueTitleIndex + listLength + 2)

  // Set room id and timer
  room = Number(content[content.indexOf("Room") + 1])
  gameTimer = Math.floor(Number(content[content.indexOf("Timer Game") + 1]))

  // Find the skill points
  const skillPointsArray: Array<string | number> = parseArray(content.indexOf("Level Data: Beaten On Difficulty"), 128)

  for (let index = 0; index < 128; index++) {
    if (!calculated.difficultyPoints.includes(index)) continue
    skillPoints += Number(skillPointsArray[index]) + 1
  }

  // Find the unlocked levels
  for (let index = 0; index < 128; index++) {
    unlockedLevels += Number(parseArray(content.indexOf("Level Data: Unlocked"), 128)[index])
  }

  // Find the exploration points
  const explorationPointsIndex = content.indexOf("Collected Exploration Points")
  const explorationPointsArray = parseArray(explorationPointsIndex, 46)
  for (let index = 0; index < 46; index++) {
    if (calculated.explorationPoints.includes(explorationPointsArray[index])) explorationPoints.push(explorationPointsArray[index])
  }

  // Calculate progress percentage
  progressPercentage = Math.floor(((unlockedLevels / 128 + skillPoints / 244 + explorationPoints.length / 46) / 3) * 100)

  const generatedData = { room, gameTimer, skillPoints, explorationPoints, progressPercentage }
  console.log(generatedData)

  return generatedData
}

export default readSaveContent