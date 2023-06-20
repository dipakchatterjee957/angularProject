import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  constructor() { console.log('PipeComponent loaded') }

  text1: string = 'Lorem, ipsum dolor sit ';
  text2: string = 'Ram Das ';
  nameSearch: string;

  products = [
    {
      pId: 1001,
      pName: 'TV',
      price: '15000'
    },
    {
      pId: 1002,
      pName: 'dee',
      price: '543245'
    },
    {
      pId: 1003,
      pName: 'yyyy',
      price: '445'
    }
  ];
  addData(pId: any, pName: any, price: any) {
    this.products.push(
      {
        pId: pId.value,
        pName: pName.value,
        price: price.value
      }
    );
    pId.value = '';
    pName.value = '';
    price.value = '';
  };
}
