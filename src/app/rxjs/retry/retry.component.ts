import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  tableData: any;
  fetching: boolean = false;
  status: string = 'No Data';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  fetchDetails() {
    this.fetching = true;
    this.status = 'Fetching Data ...';
    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      // retry(3);
      retryWhen(err => err.pipe(
        delay(2000),
        scan((acc, cur, index) => {
          if (index >= 5) {
            console.log(err)
            throw err;
          }
          else {
            console.log(acc, cur)
            this.status = 'Retrying Attempt # ' + index;
          }
        })
      ))
    ).subscribe(res => {
      console.log(res);
      this.tableData = res;
      this.fetching = false;
      this.status = 'Data Fetched';
    }, (err) => {
      console.log(err);
      this.tableData = [];
      this.fetching = false;
      this.status = 'Problem Fetching Data'
    })
  }
}

