import axios, { AxiosError, AxiosInstance } from "axios";
import { storageService } from "./StorageService";
import { CustomAxiosRequestConfig } from "../types/interfaces";

class HttpService {
  private httpInstance: AxiosInstance;

  constructor() {
    this.httpInstance = axios.create({
      baseURL: import.meta.env.VITE_API_BASEURL,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.httpInstance.interceptors.request.use(
      (config) => {
        const token = storageService.getItem("token");
        if (token && config.headers) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    this.httpInstance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig;
        if (!originalRequest || originalRequest._retry) {
          return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
          const refreshToken = storageService.getCookie("refreshToken");
          if (!refreshToken) throw new Error("No refresh token found");

          const res = await this.httpInstance.post("/auth/refresh", null, {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          });

          const { accessToken } = res.data;
          storageService.setItem("token", accessToken);

          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

          return this.httpInstance(originalRequest);
        } catch (refreshError) {
          console.error("Token refresh failed", refreshError);
          return Promise.reject(refreshError);
        }
      }
    );
  }

  setAuthorization(token: string) {
    this.httpInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  }

  // Basic methods
  async get<T>(url: string) {
    return this.httpInstance.get<T>(url);
  }

  async post<T>(
    url: string,
    data?: Record<string, unknown> | FormData | string
  ) {
    return this.httpInstance.post<T>(url, data);
  }

  async put<T>(
    url: string,
    data?: Record<string, unknown> | FormData | string
  ) {
    return this.httpInstance.put<T>(url, data);
  }

  async delete<T>(url: string) {
    return this.httpInstance.delete<T>(url);
  }
}

const httpService = new HttpService();
export { httpService };
