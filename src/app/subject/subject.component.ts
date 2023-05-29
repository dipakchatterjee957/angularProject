import { Component } from '@angular/core';
import { UtilityService } from '../appService/utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  UserName:string;

  constructor(public _utility: UtilityService){
    this._utility.userName.subscribe((value:string) =>{
      this.UserName = value;
    })
  }
}
