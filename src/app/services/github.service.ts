import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class GithubService {
  private username = "oOBobbyOo";
  private client_id = "3fd32ad4f2df8c8a2855";
  private client_secret = "0f3dcda5c457b8b0ebc6f364358f46f235c98101";

  constructor(private _http: Http) {
    console.log("Github Service start....");
  }

  getGithubUser() {
    return this._http
      .get(
        "https://api.github.com/users/" +
          this.username +
          "?client_id=" +
          this.client_id +
          "&client_secret=" +
          this.client_secret
      )
      .map(res => res.json());
  }

  getGithubRes() {
    return this._http
      .get(
        "https://api.github.com/users/" +
          this.username +
          "/repos" +
          "?client_id=" +
          this.client_id +
          "&client_secret=" +
          this.client_secret
      )
      .map(res => res.json());
  }

  updateGithubUser(username: any) {
    this.username = username;
  }

  getAlldata() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    return this._http.get(url).subscribe(data => {
      console.log("jsonplaceholder:");
      console.log(data.json());
    });
  }
}
