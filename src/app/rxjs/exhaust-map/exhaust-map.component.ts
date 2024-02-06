import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit {
  // To run json server D:\angularProject\src\assets\json>npx json-server --watch db.json
  num: number = 0;
  url: string = 'http://localhost:3000/list/ddd9';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  onSave(value: number) {
    return this.http.put(this.url, { data: value })
  }
  btnClick() {
    this.onSave(this.num++).subscribe(res => {
      console.log(res);
    })
    // this.http.get('http://localhost:3000/list', { observe: 'body' })
    //   .subscribe(result => {
    //     console.log(result);
    //   });
    // this.http.put('http://localhost:3000/list/ddd9', { data: this.num++ }).subscribe(res => {
    //   console.log(res)
    // })
  }
}
