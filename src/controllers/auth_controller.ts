import LocalStorage from "../datasources/local/local_storage";

export default class AuthController{
  constructor(localStorage: LocalStorage) {
    this.localStorage = localStorage;
  }

  token: string = "AUTH_TOKEN";
  localStorage: LocalStorage;

  public authSession(): boolean {
    const auth = this.localStorage.get(this.token);

    if (auth[this.token] != undefined) {
      return true;
    }

    return false
  }
}
