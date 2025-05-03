export interface IGame {
  id: string;
  title: string;
  slug: string;
  description: string;
  developer: string;
  publisher: string;
  releaseDate: Date;
  coverImageUrl?: string | null;
  trailerUrl?: string | null;
  genres?: IGenre[] | null;
  platforms?: IPlatform[] | null;
  reviews?: IReview[] | null;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGenre {
  id: string;
  name: string;
  slug: string;
  games?: IGame[] | null;
}

export interface IPlatform {
  id: string;
  name: string;
  slug: string;
  games?: IGame[] | null;
}
export interface IReview {
  id: string;
  title: string;
  content: string;
  rating: number;
  gameId: string;
  game?: IGame | null;
  createdAt: Date;
  updatedAt: Date;
}
export interface IGameMedia {
  id: string;
  type: MediaType;
  url: string;
  gameId: string;
  game?: IGame | null;
}
export enum MediaType {
  IMAGE = "IMAGE",
  TRAILER = "TRAILER",
  SCREENSHOT = "SCREENSHOT",
}
