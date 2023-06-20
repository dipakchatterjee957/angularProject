import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.css']
})
export class HostlistenerComponent {

  constructor() { console.log('HostlistenerComponent loaded') }

  // @HostListener('click') myClick(){
  //   alert('hostlistener')
  // }

  // Using HostListener the scroll event is only working on this page.
  @HostListener('window:scroll', ['$event']) myScroll() {
    console.log('scrolling')
  }
}
