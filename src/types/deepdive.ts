// types/deepdive.ts
export interface DeepDiveStat {
  stat: string;
  fullStat?: string;
  home: number;
  away: number;
  description: string;
}

export type DeepDiveStats = DeepDiveStat[];
