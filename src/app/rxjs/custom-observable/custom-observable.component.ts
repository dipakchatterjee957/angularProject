import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  techStatus1: string;
  techStatus2: string;
  nameStatus: string;
  subscribe: Subscription;
  names: string;
  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {
    //Ex-1
    const cusObs1 = new Observable(observer => {
      // observer.next();
      // observer.error();
      // observer.component();
      setTimeout(() => {
        observer.next('Data Emit 1');
      }, 1000);
      setTimeout(() => {
        observer.next('Data Emit 2');
      }, 2000);
      setTimeout(() => {
        observer.next('Data Emit 3');
        // observer.error(new Error('Error Emit'));
      }, 3000);
      setTimeout(() => {
        observer.next('Data Emit 4');
        observer.complete();
      }, 4000);
    })

    cusObs1.subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container1');
    },
      (err) => {
        this.techStatus1 = 'error';
      },
      () => {
        this.techStatus1 = 'completed';
      })

    //Ex-2
    const cusObs2 = new Observable(observer => {
      let count = 1;
      setInterval(() => {
        observer.next('Data Emit ' + count);

        if (count >= 3) {
          observer.error('Error Emit');
        }
        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000)
    })

    this.subscribe = cusObs2.subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container2');
    },
      (err) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      })

    // Ex-3
    const array = ['Ram', 'Sam', 'Mina', 'Rohit', 'Amina']
    const cusObs3 = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(array[count]);

        // if (count >= 3) {
        //   observer.error('Error Emit');
        // }
        if (count >= 4) {
          observer.complete();
        }
        count++;
      }, 1000)
    })
    cusObs3.subscribe((res: any) => {
      this.names = res
    },
      (err) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'completed';
      })

  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}

