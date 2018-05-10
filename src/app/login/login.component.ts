import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
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

      // success
      // if (data) {
      //   this.router.navigate(["admin"]);
      //   this._auth.setLoggedIn(true);
      // }
    });
  }
}
