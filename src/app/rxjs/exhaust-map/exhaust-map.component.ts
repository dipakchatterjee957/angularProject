import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit {

  num: number = 0;
  url: string = 'assets/data.json';

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
    // this.http.get(this.url).subscribe(res => {
    //   console.log(res)
    // })
  }
}
