import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {

  name:string = 'Chayan';
  age:number = 25;

  myMethod(){
    return ("from Arambagh")
  }
}
