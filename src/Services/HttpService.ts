import axios from 'axios';

class HttpService {
  private headers: Record<string, string> = {};
  private baseUrl: string = '';

  httpInstance = axios.create({
    baseURL: this.baseUrl,
    headers: this.headers,
  });

  constructor() {
    this.setBaseUrl();
    this.setupInterceptors();
  }

  private setBaseUrl() {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    if (!baseUrl) {
      console.warn('WARNING: Base URL not found in .env file');
      return;
    }
    this.baseUrl = baseUrl;
    this.httpInstance.defaults.baseURL = baseUrl;
  }

  private setupInterceptors() {
    this.httpInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.httpInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          if (error.response.status === 401) {
            console.warn('Unauthorized! Redirecting to login...');
            window.location.href = '/login';
          } else if (error.response.status === 500) {
            console.error('Server error. Please try again later.');
          }
        }
        return Promise.reject(error);
      }
    );
  }

  setApplicationJson() {
    this.httpInstance.defaults.headers['Content-Type'] = 'application/json';
    return this;
  }

  setToken(token: string) {
    this.httpInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
    return this;
  }

  removeToken() {
    delete this.httpInstance.defaults.headers['Authorization'];
    return this;
  }

  static async get(url: string) {
    return axios.get(url);
  }

  async post(url: string, data: object): any {
    console.log(this.baseUrl);
    return this.httpInstance.post(url, data);
  }

  static async put(url: string, data: object) {
    return axios.put(url, data);
  }

  static async delete(url: string) {
    return axios.delete(url);
  }
}

const httpService = new HttpService();
export default httpService;
