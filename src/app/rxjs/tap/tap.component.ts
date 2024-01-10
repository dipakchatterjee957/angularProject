import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  videoSubscription_1: Subscription;
  videoSubscription_2: Subscription;
  myColor: string;

  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {
    const brodcastVideo = interval(1000);

    // Ex - 1
    this.videoSubscription_1 = brodcastVideo.pipe(
      tap(x => {
        if (x > 5) {
          this.videoSubscription_1.unsubscribe()
        }
      }),
      map(data => "Item" + data)
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container1');
    })

    // Ex - 2
    let arr = ['Red', 'Green', 'Purple', 'Orange', 'Blue']
    this.videoSubscription_2 = brodcastVideo.pipe(
      tap(x => {
        this.myColor = arr[x];
        if (x > 4) {
          this.videoSubscription_2.unsubscribe()
        }
      }),
      map(data => arr[data])
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container2');
    })
  }
}
