import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  object: any = {};

  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {

    //OF
    const obs1 = of('Ram', 'Sam', 'Mina');
    obs1.subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container1');
    })

    const obs2 = of({ name1: 'Ram', name2: 'Sam', name3: 'Mina' });
    obs2.subscribe(res => {
      console.log(res);
      this.object = res;
    })

    // From - Array
    const obs3 = from(['Ram', 'Sam', 'Mina']);
    obs3.subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container3');
    })

    // From - Promise
    const promise = new Promise((resolve, rejectct) => {
      setTimeout(() => {
        resolve('Promise Resolved')
      }, 2000);
    })

    const obs4 = from(promise);
    obs4.subscribe(res => {
      console.log(typeof res, res);
      this._utility.addListItem(res, 'container4');
    })

    // From - String
    const obs5 = from('Welcome every one');
    obs5.subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container5');
    })
  }
}
