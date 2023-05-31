import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { TestdirectiveDirective } from 'src/app/appDirective/testdirective.directive';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements AfterViewInit, AfterContentInit {

  @ViewChild('childBox') childBox: ElementRef;
  @Input() text: string;
  productName: string = 'TV';
  @ContentChild('childContent') childParagraph: ElementRef;
  @ViewChild(TestdirectiveDirective) testdirective: TestdirectiveDirective

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // using renderer we set class, attribute, style ect.
    this.renderer.setStyle(this.childBox.nativeElement, 'background', '#a7b4b4');
  }
  ngAfterContentInit(): void {
    // for @ContentChild use ngAfterContentInit
    this.renderer.setStyle(this.childParagraph.nativeElement, 'color', 'red');
  }

  alertProductname() {
    alert(this.productName);
    let text = this.renderer.createText('What is your name?');
    this.renderer.appendChild(this.childParagraph.nativeElement, text)
  }

  changeBGColor(color: string) {
    this.testdirective.changeBackground(color);
  }
}
