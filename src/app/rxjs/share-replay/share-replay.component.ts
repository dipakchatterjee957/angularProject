import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit {

  allProducts: Observable<any>;
  mobileProducts: Observable<any>;
  laptopProducts: Observable<any>;
  url: string = 'https://test-products-b05fe.firebaseio.com/products.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.allProducts = this.http.get<any>(this.url).pipe(shareReplay());

    this.mobileProducts = this.allProducts.pipe(
      map(res => res.filter((data: any) => {
        return data['type'] == 'mobile'
      }))
    );

    this.laptopProducts = this.allProducts.pipe(
      map(res => res.filter((data: any) => {
        return data['type'] == 'pc'
      }))
    );
  }
}
