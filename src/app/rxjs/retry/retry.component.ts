import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  tableData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      console.log(res);
      this.tableData = res;
    })
  }
}
