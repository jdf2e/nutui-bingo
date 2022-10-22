export type TPrizeItem = {
  id: string | number;
  imagePath: string;
  text: string;
};

export type TOptionsItem = {
  isFinished: boolean;
  location: number;
  el: HTMLElement;
  duration: number;
  rollTimes: number;
  height: number;
};
