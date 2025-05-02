import { IReview } from "../../review/models/interfaces";

export interface IUser {
  id: string;
  username: string;
  email: string;
  firstname?: string;
  lastname?: string;
  password?: string;
  provider?: string;
  googleId?: string;
  role?: Role;
  reviews?: IReview[];
  createdAt: Date;
  updatedAt: Date;
}
export interface IUpdateUser {
  id: string;
  firstname?: string;
  lastname?: string;
  email?: string;
}

export type Role = "admin" | "user";
