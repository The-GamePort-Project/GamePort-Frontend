import { AxiosRequestConfig } from "axios";
export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export interface IRegisterUserData {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
  firstname?: string;
  lastname?: string;
}
