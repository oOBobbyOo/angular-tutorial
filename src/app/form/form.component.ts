import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  form: FormGroup;
  pwdhide: boolean = true;
  EMAIL_REGEX: any = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  PWD_REGEX: any = /^([a-zA-Z0-9]|[_\.@]){6,20}$/;
  CODE_REGEX: any = /^[1-9][0-9]{3}$/;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      firstname: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(16)]
      ],
      lastname: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(16)]
      ],
      email: ["", [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
      password: ["", [Validators.required, Validators.pattern(this.PWD_REGEX)]],
      code: ["", [Validators.required, Validators.pattern(this.CODE_REGEX)]]
    });
  }

  // submit
  handelSubmit(data) {
    console.log(data);
  }
}
