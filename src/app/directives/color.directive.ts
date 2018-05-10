import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appColor]"
})
export class ColorDirective {
  element: ElementRef;

  constructor(private el: ElementRef) {
    console.log(el);
    el.nativeElement.style.color = "#f00";
    this.element = el;
  }

  ngOnInit() {
    this.element.nativeElement.innerText += "!!!!!";
  }
}
