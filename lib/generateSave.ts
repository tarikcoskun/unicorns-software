import { readSaveContent } from "./readSaveContent"
import calculated from "./calculatedPoints"
import { ISave } from "@/utils"

export function generateSave(index: number, data: Partial<ISave>) {
  const explorationPoints = [data.explorationPoints, ...calculated.explorationPoints.slice(0, data.explorationPoints)]

  const unlockedLevels = ["128", ...Array.from({ length: 128 }, () => "1")]
  const skillPoints = ["128", ...Array.from({ length: 128 }, () => "-1")]

  // Give the right amount of skill points
  let maxSkillPoints = data.skillPoints
  for (let index = 1; index < 129; index++) {
    if (!maxSkillPoints || maxSkillPoints === 0) break
    if (!calculated.difficultyPoints.includes(index)) continue

    if (!(maxSkillPoints -4 < 0)) { skillPoints[index + 1] = "3"; maxSkillPoints -= 4 }
    else if (!(maxSkillPoints -3 < 0)) { skillPoints[index + 1] = "2"; maxSkillPoints -= 3 }
    else if (!(maxSkillPoints -2 < 0)) { skillPoints[index + 1] = "1"; maxSkillPoints -= 2 }
    else if (!(maxSkillPoints -1 < 0)) { skillPoints[index + 1] = "0"; maxSkillPoints -= 1 }
  }

  const generated = `Game Version\r\nBeta_4.7\r\n\r\nRoom\r\n143\r\n\r\nCollected Exploration Points\r\n${explorationPoints.join("\r\n")}\r\n\r\nLevel Data: Unlocked\r\n${unlockedLevels.join("\r\n")}\r\n\r\nLevel Data: Beaten On Difficulty\r\n${skillPoints.join("\r\n")}\r\n\r\nTimer Game\r\n7020`

  const fileName = index > 0 ? `S${index + 1}-SaavoGame23-2.sav`: "SaavoGame23-2.sav"
  const blob: Blob = new Blob([generated], { type: "text/plain" })
  const download = document.createElement("a")
  download.href = URL.createObjectURL(blob)
  download.download = fileName
  download.click()
  URL.revokeObjectURL(download.href)
}