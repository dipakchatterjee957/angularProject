import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlistener]'
})
export class HostlistenerDirective {

  //Insted of using renderer we can use HostBinding when we use HostListener
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, 'background', 'greenyellow')
  }

  @HostBinding('style.background') bgColor: string = 'greenyellow';
  @HostBinding('style.color') textColor: string = 'black';

  @HostBinding('class.boxColor') className: boolean = false;

  @HostListener('mouseover') myMouseover(){
    // this.renderer.setStyle(this.el.nativeElement, 'background', 'gray');
    this.bgColor = 'gray';
    this.textColor = 'white'
  }

  @HostListener('mouseout') myMouseout(){
    // this.renderer.setStyle(this.el.nativeElement, 'background', 'greenyellow');
    this.bgColor = 'greenyellow';
    this.textColor = 'black'
  }

  @HostListener('click') myClick(){
    this.className = !this.className;
  }
}
