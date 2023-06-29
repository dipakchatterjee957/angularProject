import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  hpLaptop: boolean = true;
  dellLaptop: boolean = false;

  constructor() { }


  ngOnInit(): void {

    let buyLaptop = new Promise((resolve, reject) => {
      if (this.hpLaptop) {
        resolve('promise is resolved, Hp Laptop');
      } else if (this.dellLaptop) {
        resolve('promise is resolved, Dell Laptop');
      } else {
        reject('promise is reject')
      }
    });

    buyLaptop.then(res => {
      console.log(`%c then code=> ${res} `, 'background: #222; color: #bada55')
    }).catch(err => {
      console.log(`%c catch code=> ${err} `, 'background: #222; color: #bada55')
    })

    this.getData().then(res => {
      console.log(`%c ${res} `, 'background: #222; color: #bada55')
    })
  }

  async getData() {
    return 'data recived'
  }

  // **********************************************************************************************
  result1: string = 'Data';
  result2: string = 'Data';
  result3: string = 'Data';

  dell: object = {
    brand: 'Dell',
    price: '29000'
  }
  promiseFun() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dell)
      }, 3000);
    })
  }

  // Ex - 01 : with Promise
  function1() {
    this.result1 = 'Featching data ...';
    this.promiseFun().then(res => {
      console.log(res)
      this.result1 = JSON.stringify(res)
    })
  }

  // Ex - 02 : with Async / await
  async function2() {
    this.result2 = 'Featching data ...';
    let res = await this.promiseFun();
    console.log(res);
    this.result2 = JSON.stringify(res)
  }

  // Ex - 03 : with Fetch Api
  fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
  }
  // using promise
  // function3() {
  //   this.result3 = 'Featching data ...';
  //   this.fetchData().then(res => {
  //     console.log(res);
  //     this.result3 = JSON.stringify(res)
  //   });
  // }

  // using async / await
  async function3() {
    this.result3 = 'Featching data ...';
    let res = await this.fetchData();
    this.result3 = JSON.stringify(res)
  }
}
