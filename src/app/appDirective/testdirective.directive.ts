import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'greenyellow')
  }

  changeBackground(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background', color)
  }

}
