import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  products = [
    {
      pId: '1001',
      pName: 'TV',
      price: '15000'
    }
  ];

  addData(pId:any,pName:any,price:any){
    this.products.push(
      {
        pId: pId.value,
        pName: pName.value,
        price: price.value
      }
    );
    pId.value ='';
    pName.value=''; 
    price.value='';
  };

  deleteItem(index:number){
    this.products.splice(index,1)
  }
}
