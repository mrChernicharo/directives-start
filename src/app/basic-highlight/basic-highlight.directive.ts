import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
    this.elementRef.nativeElement.style.height = '40px';
    this.elementRef.nativeElement.style.textAlign = 'center';
  }
}
