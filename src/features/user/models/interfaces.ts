export interface IUser {
  firstname: string;
  lastname: string;
}

export interface IUpdateUser {
  id: string;
  firstname?: string;
  lastname?: string;
  email?: string;
}
