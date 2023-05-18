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
    },
    {
      pId: '2002',
      pName: 'Mobile',
      price: '40000'
    },
    {
      pId: '3002',
      pName: 'Laptop',
      price: '70000'
    },
  ]
}
