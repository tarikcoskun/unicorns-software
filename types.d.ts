export interface Slot {
  gameTimer: number | undefined;
  skillPoints: number | undefined;
  explorationPoints: number | undefined;
  progressPercentage: number | undefined;
}

export interface Dialog {
  name: string;
  image: string;
  title: string;
  text: string;
}
