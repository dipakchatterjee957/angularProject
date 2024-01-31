import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {

    const source = from(['Item 1.1', 'Item 1.2', 'Item 1.3', 'Item 1.4']);
    // Ex - 1
    source.pipe(
      map(x => this.modifyData(x))
    ).subscribe(res =>
      res.subscribe(res1 => {
        console.log(res1);
        this._utility.addListItem(res1, 'container1');
      })
    )

    // Ex - 2
    source.pipe(
      map(x => this.modifyData(x)),
      mergeAll()
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container2');
    })

    // Ex - 3
    source.pipe(
      mergeMap(x => this.modifyData(x))
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container3');
    })
  }

  modifyData(data: string) {
    return of(data + ' => Printed')
  }



}
