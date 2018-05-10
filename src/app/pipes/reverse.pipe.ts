import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse"
})
export class ReversePipe implements PipeTransform {
  transform(value: any, ...args): any {
    let newstr = value;
    console.log(value);
    console.log(args);
    if (args[0]) {
      newstr += "....";
    } else if (args[1] === "bobby") {
      newstr += "!!!";
    }
    return newstr;
  }
}
