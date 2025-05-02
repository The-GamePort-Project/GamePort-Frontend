import { IUser } from "../../user/models/interfaces";
import { IGame } from "../../game/models/interfaces";

export interface IReview {
  id: string;
  content: string;
  rating: number;
  userId: string;
  gameId: string;
  user?: IUser;
  game?: IGame;
  createdAt: Date;
  updatedAt: Date;
}
