import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  @ViewChild('myInput') myInput: ElementRef;
  value: string;

  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {
    this._utility.itemEmit.subscribe(res => {
      console.log(res);
      this.value = res;
    })
  }

  onAddVideo(data: string) {
    console.log(data);
    this._utility.itemEmit.next(data);
    this.myInput.nativeElement.value = '';
  }

  subscribe() {
    this._utility.itemEmit.complete();
  }
}
