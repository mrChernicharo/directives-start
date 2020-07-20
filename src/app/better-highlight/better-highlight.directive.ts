import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.color') textColor: string = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement,'height', '40px')
    this.renderer.setStyle(this.elRef.nativeElement,'textAlign', 'center')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.textColor = 'white'
    this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor', 'lightcoral')
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.textColor = 'black'
    this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor', 'transparent')

  }
}
