import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, delay, retry, retryWhen, scan } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  tableData: Array<any> = [];
  fetching: boolean = false;
  status: string = 'No Data';
  errorMsg: string;

  constructor(private http: HttpClient, public _utility: UtilityService) { }

  ngOnInit(): void {
  }

  fetchDetails() {
    this.fetching = true;
    this.status = 'Fetching Data ...';
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(
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
      )),
      catchError(this._utility.handelError)
    ).subscribe({
      next: (value) => {
        console.log(value);
        this.tableData = value;
        this.fetching = false;
        this.status = 'Data Fetched';
      },
      error: (err) => {
        console.log(err);
        this.errorMsg = err;
        this.tableData = [];
        this.fetching = false;
        this.status = 'Problem Fetching Data'
      },
      complete: () => console.info('complete')
    })
  }
}

