import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
  constructor(private _http: Http) {
    console.log("Data Service start....");
  }

  getAlldata() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // return this._http.get(url).subscribe(data => {
    //   console.log("jsonplaceholder:");
    //   console.log(data.json());
    // });

    return this._http.get(url).map(res => res.json());
  }
}
