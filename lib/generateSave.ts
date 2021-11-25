import calculated from "./calculatedPoints"
import { ISave } from "@/utils"

export function generateSave(index: number, data: Partial<ISave>) {
  const explorationPoints = [data.explorationPoints, ...calculated.explorationPoints.slice(0, data.explorationPoints)]

  const unlockedLevels = ["128"]
  const skillPoints = ["128"]

  // Fill the array with 0s
  for (let index = 0; index < 128; index++) { skillPoints.push("-1"); unlockedLevels.push("1") }

  // Get the right amount of skill points (hopefully)
  let maxSkillPoints = data.skillPoints
  for (let index = 1; index < 129; index++) {
    if (!maxSkillPoints || maxSkillPoints === 0) break
    if (!calculated.difficultyPoints.includes(index)) continue

    if (!(maxSkillPoints -3 < 0)) { skillPoints[index + 1] = "3"; maxSkillPoints -= 3 }
    else if (!(maxSkillPoints -2 < 0)) { skillPoints[index + 1] = "2"; maxSkillPoints -= 2 }
    else if (!(maxSkillPoints -1 < 0)) { skillPoints[index + 1] = "1"; maxSkillPoints -= 1 }
  }

  const generated = `Game Version\r\nBeta_4.7\r\n\r\nCollected Exploration Points\r\n${explorationPoints.join("\r\n")}\r\n\r\nLevel Data: Unlocked\r\n${unlockedLevels.join("\r\n")}\r\n\r\nLevel Data: Beaten On Difficulty\r\n${skillPoints.join("\r\n")}`
  const blob: Blob = new Blob([generated], { type: "text/plain" })

  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = index > 0 ? `S${index + 1}-SaavoGame23-2.sav`: "SaavoGame23-2.sav"
  link.click()
  URL.revokeObjectURL(link.href)
}