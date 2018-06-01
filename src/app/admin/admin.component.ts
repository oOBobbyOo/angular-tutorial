import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  orderObj: any;
  user: any;
  constructor(
    private _auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.orderObj = { ...params.keys, ...params };
      this.user = this.orderObj.params.user;
      console.log(this.orderObj);
    });
  }

  logout() {
    console.log("logout!");
    this._auth.setLoggedIn(false);
    localStorage.removeItem("userJWT");
    this.router.navigate(["login"]);
  }
}
