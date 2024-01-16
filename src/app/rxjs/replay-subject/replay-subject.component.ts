import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  @ViewChild('myInput') myInput: ElementRef;
  userList_1: Array<any> = [];
  userList_2: Array<any> = [];
  userList_3: Array<any> = [];

  subscribeMode_2: boolean = false;
  subscribeMode_3: boolean = false;

  subscriptionUser_2: Subscription;
  subscriptionUser_3: Subscription;

  methodChange: boolean = true;
  intervalSubscription: Subscription;

  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {
    this._utility.videoEmit.subscribe(res => {
      console.log(res);
      this.userList_1.push(res);
    })
  }

  onAddVideo(data: string) {
    this._utility.videoEmit.next(data);
    this.myInput.nativeElement.value = '';
  }

  userTwoSubscribe() {
    if (this.subscribeMode_2) {
      this.subscriptionUser_2.unsubscribe();
    } else {
      this.subscriptionUser_2 = this._utility.videoEmit.subscribe(res => {
        this.userList_2.push(res);
      })
    }
    this.subscribeMode_2 = !this.subscribeMode_2
  }

  userThreeSubscribe() {
    if (this.subscribeMode_3) {
      this.subscriptionUser_3.unsubscribe();
    } else {
      this.subscriptionUser_3 = this._utility.videoEmit.subscribe(res => {
        this.userList_3.push(res);
      })
    }
    this.subscribeMode_3 = !this.subscribeMode_3
  }

  toggleMethod() {
    const broadCastVideo = interval(2000);
    if (this.methodChange) {
      this.intervalSubscription = broadCastVideo.subscribe(res => {
        this._utility.videoEmit.next('Video ' + res)
      })
    } else {
      this.intervalSubscription?.unsubscribe();
    }
    this.methodChange = !this.methodChange;
  }
}
