import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  data1: Array<any> = [];
  data2: Array<any> = [];

  array = [
    {
      name: 'Ramen',
      age: 22,
      job: {
        title: "Angular Developer",
        id: 1001
      }
    },
    {
      name: 'Maloti',
      age: 50,
      job: {
        title: "Java Developer",
        id: 1002
      }
    },
    {
      name: 'Akash',
      age: 42,
      job: {
        title: "Vue Developer",
        id: 1003
      }
    }
  ]
  constructor() { }

  ngOnInit(): void {

    // Ex - 1
    from(this.array).pipe(
      // We can use map or pluck
      map(x => x.name),
      // pluck('name'),  
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data1 = res;
    });

    // Ex - 2
    from(this.array).pipe(
      // We can use map or pluck
      // map(x => x?.job?.title),
      pluck('job', 'title'),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data2 = res;
    })
  }
}
