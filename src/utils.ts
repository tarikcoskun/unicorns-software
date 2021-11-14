export interface ISave {
  room: number;
  gameTimer: number;
  skillPoints: number;
  explorationPoints: number;
  progressPercentage: number;
}

export const initialSave: ISave = {
  room: 143,
  gameTimer: 0,
  skillPoints: 0,
  explorationPoints: 0,
  progressPercentage: 0,
};
