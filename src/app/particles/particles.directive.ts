import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appParticles]",
})
export class ParticlesDirective implements OnInit {
  R = 24;
  G = 53;
  B = 106;

  finalR = 139;
  finalG = 180;
  finalB = 255;

  initialBG: string = `rgb(${this.R},${this.G},${this.B})`;
  finalBG: string = `rgb(${this.finalR},${this.finalG},${this.finalB})`;

  @HostBinding("style.background") background: string;
  @HostBinding("style.transform") scale: string;
  @HostBinding("style.transition") transition: string;
  @HostBinding("style.opacity") opacity: string;
  @HostBinding("style.marginTop") marginTop: string;
  @HostBinding("style.bottom") bottom: string;
  @HostBinding("style.marginLeft") marginLeft: string;
  @HostBinding("style.right") right: string;

  duration: number;
  deltaX: number;
  deltaY: number;

  // @Input() size: "small" | "medium" | "large";

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.background = this.initialBG;

    // this.renderer.setStyle(this.elRef.nativeElement, "position", "absolute");
    this.transition = this.setDuration();
  }

  @HostListener("click") click(event: Event) {
    console.log(event);
    this.startAnimation();
  }

  startAnimation() {
    this.marginTop = this.getY();
    this.marginLeft = this.getX();

    setTimeout(() => {
      // this.marginTop = this.marginTop.substr(1);
      // this.marginLeft = this.marginLeft.substr(1);
    }, this.duration);
    // this.background = this.finalBG;
  }

  getX() {
    return `-${Math.floor(Math.random() * 100) + 100}px`;
  }
  getY() {
    return `-${Math.floor(Math.random() * 600) + 300}px`;
  }
  setDuration() {
    const duration = (Math.floor(Math.random() * 3) + 3) * 1000;

    return `${duration + 1000}ms`;
  }

  // * this.getSize(this.size);
  // getSize(size) {
  //   switch (size) {
  //     case "small":
  //       return 10;
  //     case "medium":
  //       return 20;
  //     case "large":
  //       return 30;
  //   }
  // }
}
