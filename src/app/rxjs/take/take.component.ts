import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, toArray } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {
    // Ex - 1
    let array = ['Ram', 'Sam', 'Mina', 'Akash', 'Rohit', 'Suman'];
    const obs1 = from(array);
    obs1.pipe(
      take(3)
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container1');
    })

    // Ex - 2
    const obs2 = from(array);
    obs2.pipe(
      takeLast(3)
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container2');
    })

    // Ex - 3
    // After every 1 sec value is emiting. When we click anywhere in the webpage 
    // the takeUntil function is running and the insert value operation was stopped.
    const obs3 = interval(1000);
    let conditionFun = fromEvent(document, 'click')
    obs3.pipe(
      map(data => "Item" + data),
      takeUntil(conditionFun)
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container3');
    })
  }
}
