import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title: string = "home";

  data: Array<string> = [
    "javascript",
    "php",
    "html5",
    "css3",
    "react",
    "angular",
    "vue"
  ];

  constructor() {}

  ngOnInit() {}
}
