import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  form: FormGroup;

  constructor(private _dataService: DataService) {
    this._dataService.getAlldata().subscribe(data => {
      console.log("jsonplaceholder:");
      console.log(data);
    });
  }

  ngOnInit() {
    // form
    this.form = new FormGroup({
      firstname: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(16)
        ])
      ),
      lastname: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(16)
        ])
      ),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
        )
      ]),
      languages: new FormControl(""),
      code: new FormControl("", [
        Validators.required,
        Validators.pattern("^[1-9][0-9]{3}$")
      ])
    });
  }

  // submit
  onSubmit(user) {
    console.log(user);
  }
}
