import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit {

  message: string;
  videoSubscription_1: Subscription;
  videoSubscription_2: Subscription;

  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {
    const brodcastVideo1 = interval(1000);
    const brodcastVideo2 = timer(3000, 1000); //timer(delay, Interval)

    this.videoSubscription_1 = brodcastVideo1.subscribe(res => {
      console.log(res);
      this.message = "Item" + res;
      this._utility.addListItem(this.message, 'container1');

      if (res >= 5) {
        this.videoSubscription_1.unsubscribe();
      }
    })

    this.videoSubscription_2 = brodcastVideo2.subscribe(res => {
      console.log(res);
      this.message = "Item" + res;
      this._utility.addListItem(this.message, 'container2');

      if (res >= 5) {
        this.videoSubscription_2.unsubscribe();
      }
    })
  }
}
