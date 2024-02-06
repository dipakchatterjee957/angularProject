import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, delay, exhaustMap, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {
  // To run json server D:\angularProject\src\assets\json>npx json-server --watch db.json
  num: number = 0;
  result: number = 0;
  url: string = 'http://localhost:3000/list/ddd9';
  @ViewChild('btn') btn: ElementRef;
  fetching: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {

    fromEvent(this.btn.nativeElement, 'click').pipe(
      tap(() => this.fetching = true),
      exhaustMap(() => this.onSave(this.num++))
    ).subscribe(res => {
      this.fetchData();
      this.fetching = false;
    })
  }

  onSave(value: number) {
    return this.http.put(this.url, { data: value })
  }
  // btnClick() {
  //   this.onSave(this.num++).subscribe(res => {
  //     console.log(res);
  //   })
  // }

  fetchData() {
    this.http.get<any>('http://localhost:3000/list/ddd9',)
      .subscribe(res => {
        console.log(res);
        this.result = res.data
      });
  }

  resetBtn() {
    this.http.put('http://localhost:3000/list/ddd9', { data: 0 }).subscribe(res => {
      this.fetchData();
    })
  }
}
