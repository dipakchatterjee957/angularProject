import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {

  name: string = 'Chayan';
  age: number = 25;

  myMethod() {
    return ("from Arambagh")
  }

  myPropaty: boolean = true;
  myStyle:string = '15px';
  multiClass = {
    class1: true,
    class2: false,
    class3: true
  };
  multiStyle = {
    'margin': '15px',
    'border': '10px solid black',
    'background': 'blue'
  };


  message: string = '';
  showHide(){
    this.message =  (this.message == '') ? 'Hello Everyone' : ''
  };


  getInputInfo(info:any){
    console.log(info, info.value)
  }

  msg:string = 'ABC';
}
