import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit() {}

  handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;

    console.log(username, password);

    this._auth.signup(username, password).subscribe(data => {
      console.log(data);

      // signup success
      if (data.status === 200) {
        console.log("signup success!");
        this.router.navigate(["login"]);
      }
    });
  }
}
