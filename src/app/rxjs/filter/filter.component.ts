import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  data1: Array<any> = [];
  data2: Array<any> = [];
  data3: Array<any> = [];

  dataArray = [
    { id: "1", name: "abcftg", gender: "m", age: "15" },
    { id: "2", name: "afgse", gender: "m", age: "25" },
    { id: "3", name: "efgd", gender: "f", age: "5" },
    { id: "4", name: "hjkh", gender: "m", age: "35" },
    { id: "5", name: "iklye", gender: "m", age: "41" },
    { id: "6", name: "ert", gender: "f", age: " 30" },
    { id: "7", name: "qwedf", gender: "f", age: " 31" },
    { id: "8", name: "bdd", gender: "m", age: " 78" }
  ]
  constructor() { }

  ngOnInit(): void {

    const source = from(this.dataArray);

    // Ex - 01  Filter by length of name
    source.pipe(
      filter(data => data.name.length > 4),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data1 = res;
    })

    // Ex - 02  Filter by gender 
    source.pipe(
      filter(data => data.gender == 'm'),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data2 = res;
    })

    // Ex - 03  Filter by nth item 
    source.pipe(
      filter(data => parseInt(data.id) <= 4),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data3 = res;
    })

  }


}
