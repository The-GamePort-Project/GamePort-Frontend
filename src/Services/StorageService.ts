class StorageService {
  private storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }
  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
  getCookie(name: string): string | null {
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`));
    return match ? match.split("=")[1] : null;
  }
  setCookie(name: string, value: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
const storageService = new StorageService();
export { storageService };
