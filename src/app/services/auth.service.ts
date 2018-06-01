import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
  private isLoggedInStatus: boolean = false;

  constructor(private _http: Http) {}

  setLoggedIn(value: boolean) {
    this.isLoggedInStatus = value;
  }

  get isLoggedIn() {
    return this.isLoggedInStatus;
  }

  signup(username, password) {
    return this._http.post("/api/register", { username, password });
  }

  loginIn(username, password) {
    return this._http.post("/api/login", { username, password });
  }
}
