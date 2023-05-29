import { Component } from '@angular/core';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  name:string;

  constructor(public _utility: UtilityService){
    // Subscribe the BehaviorSubject and assign the value.
    this._utility.userName.subscribe((value:string) =>{
      this.name = value;
    })
  }

  changeName(value:string){
    // Change the BehaviorSubject value using next.
    // In the whole application where the BehaviorSubject is subscribe the value is changed.
    this._utility.userName.next(value)
  }
}
