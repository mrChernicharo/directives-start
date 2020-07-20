import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor', 'lightcoral')
    // this.renderer.setStyle(this.elRef.nativeElement,'height', '40px')
    // this.renderer.setStyle(this.elRef.nativeElement,'textAlign', 'center')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor', 'lightcoral')
    this.renderer.setStyle(this.elRef.nativeElement,'height', '40px')
    this.renderer.setStyle(this.elRef.nativeElement,'textAlign', 'center')
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor', 'transparent')

  }
}
