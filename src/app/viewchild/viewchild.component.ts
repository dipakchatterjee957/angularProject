import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Comp3Component } from '../component/comp3/comp3.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements AfterViewInit {

  name: string = 'sumit';
  @ViewChild('parentBox') parentBox: ElementRef;
  @ViewChild(Comp3Component) childComponent: Comp3Component; // using tis we can access the whole child component

  ngAfterViewInit(): void {
    // using this we can change the color of the div tag
    this.parentBox.nativeElement.style.background = '#edff4f';
  }

  changeChildComponentProductName() {
    // we can access the child component variable and change the value
    this.childComponent.productName = 'Laptop';
  }

  alertChildComponentProductName() {
    // we can access the child component function and alert the message
    this.childComponent.alertProductname();
  }

  // change the value of child componet 'name' variable
  inputChangeName() {
    this.name = 'Mohit';
  }
}
