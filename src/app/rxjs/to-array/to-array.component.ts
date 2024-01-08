import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  videoSubscription_1: Subscription;
  constructor() { }

  ngOnInit(): void {
    // Ex - 1
    const brodcastVideo1 = interval(1000);
    this.videoSubscription_1 = brodcastVideo1.pipe(take(5), toArray()).subscribe(res => {
      console.log(res);
    })

    // Ex - 2
    let array = ['Ram', 'Sam', 'Mina'];
    const obs3 = from(array);
    obs3.pipe(toArray()).subscribe(res => {
      console.log(res);
    })

    // Ex- 3
    const obs1 = of('Java', 'Nodejs', 'Angular');
    obs1.pipe(toArray()).subscribe(res => {
      console.log(res);
    })
  }
}
