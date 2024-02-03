import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable, concatMap, debounceTime, delay, distinctUntilChanged, filter, switchMap } from 'rxjs';

interface search {
  thumb: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.css']
})
export class SwitchMapSearchComponent implements AfterViewInit {

  ngForm: string = '';
  searchResult: Array<search> = [];
  @ViewChild('searchForm') searchForm: NgModel;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {

    // this.getSearchs('ang').subscribe(res => {
    //   console.log(res)
    // })
    const formValue = this.searchForm.valueChanges;

    formValue?.pipe(
      filter(() => this.ngForm?.length != 0),
      debounceTime(500),
      distinctUntilChanged(),
      // concatMap(data => this.getSearchs(data)) //multiple request send so we use switchMap
      switchMap(data => this.getSearchs(data))
    ).subscribe(res => {
      console.log(res);
      this.searchResult = res;
    })

  }

  getSearchs(searchTerm: string): Observable<search[]> {
    return this.http.get<search[]>('https://my-json-server.typicode.com/Uxtrendz/apis/videoList' + '?q=' + searchTerm)
  }

}
