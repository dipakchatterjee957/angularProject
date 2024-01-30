import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.css']
})
export class ConcatMergeComponent implements OnInit {

  constructor(public _utility: UtilityService) { }

  ngOnInit(): void {
    const brodcastVideo1 = interval(1000).pipe(map(x => "Item 1." + (x + 1)), take(4));
    const brodcastVideo2 = interval(1000).pipe(map(x => "Item 2." + (x + 1)), take(2));
    const brodcastVideo3 = interval(1000).pipe(map(x => "Item 3." + (x + 1)), take(3));

    let concatVariable = concat(brodcastVideo1, brodcastVideo2, brodcastVideo3);

    concatVariable.subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container1');
    })


    const brodcastVideo4 = interval(1000).pipe(map(x => "Item 1." + (x + 1)), take(4));
    const brodcastVideo5 = interval(3000).pipe(map(x => "Item 2." + (x + 1)), take(2));
    const brodcastVideo6 = interval(2500).pipe(map(x => "Item 3." + (x + 1)), take(3));

    let mergeVariable = merge(brodcastVideo4, brodcastVideo5, brodcastVideo6);

    mergeVariable.subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container2');
    })
  }
}
