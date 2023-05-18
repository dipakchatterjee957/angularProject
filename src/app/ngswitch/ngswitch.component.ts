import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {

  selectedValue:string = '';

  selectDropDown(value: any){
    this.selectedValue = value.target.value
  }
}
