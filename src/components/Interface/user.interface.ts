export interface IUser {
  avatar: string;
  name: string;
  tag: string;
  location: string;
  stats: TStats;
}

export type TStats = {
  followers: number;
  views: number;
  likes: number;
};
