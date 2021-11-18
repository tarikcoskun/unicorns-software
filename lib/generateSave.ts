import { ISave } from "@/utils";
import calculated from "./calculatedPoints";

export function generateSave(index: number, data: Partial<ISave>) {
  const explorationPoints = [String(data.explorationPoints), ...calculated.explorationPoints.slice(0, data.explorationPoints)];

  const skillPoints = ["128"];
  const unlockedLevels = ["128"];

  // Fill the array with 0s
  for (let index = 0; index < 128; index++) { skillPoints.push("0"); unlockedLevels.push("1") }

  // Set the difficulty
  for (let index = 1; index < 129; index++) {
    if (calculated.difficultyPoints.includes(index)) skillPoints[index + 1] = "3"
  }

  const generated = `Game Version\r\nBeta_4.7\r\n\r\nCollected Exploration Points\r\n${explorationPoints.join("\r\n")}\r\n\r\nLevel Data: Unlocked\r\n${unlockedLevels.join("\r\n")}\r\n\r\nLevel Data: Beaten On Difficulty\r\n${skillPoints.join("\r\n")}`
  const blob: Blob = new Blob([generated], { type: "text/plain" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = index > 0 ? `S${index + 1}-SaavoGame23-2.sav`: "SaavoGame23-2.sav";
  link.click();
  URL.revokeObjectURL(link.href);
}