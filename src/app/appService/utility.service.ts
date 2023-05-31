import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  //  instead of Subject we use BehaviorSubject.
  //  In BehaviorSubject we need to assign a value. when we subscribe it in other 
  //  component this value is initialize.
  // userName = new Subject<string>();
  userName = new BehaviorSubject<string>('Sudip');
}
