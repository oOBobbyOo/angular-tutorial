import { Component, OnInit } from "@angular/core";
import { GithubService } from "../services/github.service";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.css"]
})
export class GithubComponent implements OnInit {
  user: any;
  respos: any;
  username: any;

  constructor(private _githubService: GithubService) {
    this._githubService.getGithubUser().subscribe(user => {
      this.user = user;
      console.log("user:");
      console.log(this.user);
    });

    this._githubService.getGithubRes().subscribe(respos => {
      this.respos = respos;
      console.log("respos:");
      console.log(this.respos);
    });

    this._githubService.getAlldata();
  }

  ngOnInit() {}

  search() {
    this._githubService.updateGithubUser(this.username);

    this._githubService.getGithubUser().subscribe(user => {
      this.user = user;
      // console.log(this.user);
    });

    this._githubService.getGithubRes().subscribe(respos => {
      this.respos = respos;
      // console.log(this.respos);
    });
  }
}
