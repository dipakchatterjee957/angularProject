import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  constructor() {}

  inputPropartyProductSelected: boolean = false;
  inputPropartyProductName: string;
  outputAddedProduct: boolean;
  output = { outputAddedProductName: "" };

  onselectProduct(value: string) {
    this.inputPropartyProductSelected = true;
    this.inputPropartyProductName = value;
  }

  getaddedProduct(event:boolean){
    console.log(event);
    this.outputAddedProduct = event;
  }

  getaddedProductName(event:any){
    console.log(event);
    this.output.outputAddedProductName = event.name;
  }
}
