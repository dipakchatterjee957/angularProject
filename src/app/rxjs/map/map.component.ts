import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  videoSubscription_1: Subscription;
  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {
    //Ex - 1
    const brodcastVideo1 = interval(1000);
    this.videoSubscription_1 = brodcastVideo1.pipe(
      map(data => "Item" + data)
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container1');

    })

    setTimeout(() => {
      this.videoSubscription_1.unsubscribe();
    }, 5000);

    // Ex - 2
    const array = from([
      { name: "ram", age: 26 },
      { name: "Mita", age: 23 },
      { name: "Sam", age: 27 },
      { name: "Vim", age: 30 },
    ])

    array.pipe(
      map(data => data.name)
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container2');
    })
  }
}
