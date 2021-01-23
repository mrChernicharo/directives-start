import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appAppAnimation]",
})
export class AppAnimationDirective implements OnInit {
  @HostBinding("style.background") background: string;
  @HostBinding("style.transform") scale: string;
  @HostBinding("style.transition") transition: string;
  initialBG: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.initialBG = "orange";
    this.background = this.initialBG;
  }

  @HostListener("mouseover") mouseover(event: Event) {
    console.log(event);
    this.background = this.pickRandomColor();
    this.scale = "scale(1.2, 1.2)";
    this.transition = "0.2s";
  }

  @HostListener("mouseleave") mouseleave(event: Event) {
    this.background = this.initialBG;
    this.scale = "scale(1.0, 1.0)";
  }

  pickRandomColor(): string {
    let color = "";
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        color = "lightblue";
        break;
      case 1:
        color = "lightgray";
        break;
      case 2:
        color = "lightgreen";
        break;
      case 3:
        color = "lightcoral";
        break;
    }
    return color;
  }
}
