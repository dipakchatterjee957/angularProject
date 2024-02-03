import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, mergeMap, of, switchMap } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {

    const source = from(['Item 1.1', 'Item 1.2', 'Item 1.3', 'Item 1.4']);
    // Ex - 1
    source.pipe(
      mergeMap(x => this.modifyData(x))
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container1');
    })
    // Ex - 2
    source.pipe(
      concatMap(x => this.modifyData(x))
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container2');
    })
    // Ex - 3
    source.pipe(
      switchMap(x => this.modifyData(x))
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container3');
    })

  }


  modifyData(data: string) {
    return of(data + ' => Printed').pipe(delay(2000))
  }


}
