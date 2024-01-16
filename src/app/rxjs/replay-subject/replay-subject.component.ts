import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  userList_1: Array<any> = [];
  userList_2: Array<any> = [];
  userList_3: Array<any> = ['csdvc', 'iuyyu'];

  subscribeMode_2: boolean = false;
  subscribeMode_3: boolean = false;

  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {
    this._utility.videoEmit.subscribe(res => {
      console.log(res);
      this.userList_1.push(res);
    })
  }

  onAddVideo(data: string) {
    this._utility.videoEmit.next(data)
  }

  userTwoSubscribe() {
    this._utility.videoEmit.subscribe(res => {
      this.userList_2.push(res);
    })
    this.subscribeMode_2 = !this.subscribeMode_2
  }

  userThreeSubscribe() {
    this.subscribeMode_3 = !this.subscribeMode_3
  }
}
