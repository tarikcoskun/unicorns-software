import calculated from "@/lib/calculatedPoints"

export interface Save {
  room: number
  gameTimer: number
  skillPoints: number
  progressPercentage: number
  explorationPoints: string[]
}