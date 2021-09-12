export interface Slot {
  gameTimer: number | undefined;
  skillPoints: number | undefined;
  explorationPoints: number | undefined;
  progressPercentage: number | undefined;
}

export interface Dialog {
  id?: number;
  image: string;
  title: string;
  text: string;
}
