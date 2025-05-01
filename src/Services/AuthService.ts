import { storageService } from "./StorageService";
import { httpService } from "./HttpService";

export const saveAuthTokens = (accessToken: string, refreshToken: string) => {
  storageService.setItem("token", accessToken);
  storageService.setCookie("refreshToken", refreshToken, 1);
  httpService.setAuthorization(accessToken);
};

export const clearAuthTokens = () => {
  storageService.removeItem("token");
  storageService.deleteCookie("refreshToken");
};
