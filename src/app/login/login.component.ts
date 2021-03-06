import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userJWT: any;
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit() {}

  handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;

    console.log(username, password);

    this._auth.loginIn(username, password).subscribe(data => {
      console.log(data);
      console.log(data["_body"]);

      // login success
      if (data.status === 200) {
        console.log("login success!");
        this.userJWT = JSON.parse(data["_body"]);
        localStorage.setItem("userJWT", this.userJWT.token);
        this._auth.setLoggedIn(true);
        this.router.navigate(["admin"], { queryParams: { user: username } });
      }
    });
  }
}
