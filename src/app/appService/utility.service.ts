import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  //  instead of Subject we use BehaviorSubject.
  //  In BehaviorSubject we need to assign a value.  
  //  when we subscribe it in other component this value is initialize.
  // userName = new Subject<string>();
  userName = new BehaviorSubject<string>('Sudip');

  // This function is used for RxJs part, to add <li> element
  addListItem(val: string | any, containerId: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el)
  }

  printItem(val: string | any, containerId: string) {
    let el = document.createElement('div');
    el.setAttribute('class', 'item');
    el.innerHTML = val;
    document.getElementById(containerId)?.prepend(el)
  }

  // This is used for replaySubject component
  videoEmit = new ReplaySubject<string>(5)

  // This is used for AsyncSubject component
  itemEmit = new AsyncSubject<string>();

  // CatchError & ThrowError
  handelError(err: HttpErrorResponse) {
    console.log(err)
    let errMsg = '';
    if (!err.error || !err.error.error) {
      errMsg = 'NetWork Error, Please check';
    } else {
      errMsg = 'Other type error';
    }
    return throwError(() => errMsg)
  }
}
