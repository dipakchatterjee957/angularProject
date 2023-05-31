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
  @ViewChild(Comp3Component) childComponent: Comp3Component;

  ngAfterViewInit(): void {
    this.parentBox.nativeElement.style.background = '#edff4f';
  }

  changeChildComponentProductName() {
    this.childComponent.productName = 'Laptop';
  }

  alertChildComponentProductName() {
    this.childComponent.alertProductname();
  }

  inputChangeName() {
    this.name = 'Mohit';
  }
}
