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

export const clearAccessToken = () => {
  storageService.removeItem("token");
};
export const getAccessToken = () => {
  return storageService.getItem("token");
};
export const setAccessToken = (token: string) => {
  storageService.setItem("token", token);
  httpService.setAuthorization(token);
};
export const setRefreshToken = (token: string) => {
  storageService.setCookie("refreshToken", token, 1);
};
export const getRefreshToken = () => {
  return storageService.getCookie("refreshToken");
};
export const isLoggedIn = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  return !!(accessToken && refreshToken);
};

export const logout = () => {
  clearAuthTokens();
  clearAccessToken();
  httpService.setAuthorization("");
  window.location.href = "/login";
};
