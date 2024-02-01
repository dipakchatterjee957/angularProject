import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  data = [
    {
      header: 'List_1',
      description: '11111111111111'
    },
    {
      header: 'List_2',
      description: '2222222222222222'
    },
    {
      header: 'List_3',
      description: '33333333333333333'
    },
  ]
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
      map(x => this.modifyData(x)),
      concatAll()
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container2');
    })

    // Ex - 3
    source.pipe(
      concatMap(x => this.modifyData(x))
    ).subscribe(res => {
      console.log(res);
      this._utility.addListItem(res, 'container3');
    })

    // Ex - 4
    from(this.data).pipe(
      concatMap(res => this.gethtml(res))
    ).subscribe(x => {
      this._utility.printItem(x, 'container4')
    })


  }


  gethtml(data: any) {
    return of(
      `<div class="col-md-4">
        <div class="card">
            <div class="card-header">"${data.header}"</div>
            <div class="card-body">
                <ul>
                  <li>"${data.description}"</li>
                </ul>
            </div>
        </div>
      </div> <br>`
    ).pipe(delay(3000))
  }

  modifyData(data: string) {
    return of(data + ' => Printed').pipe(delay(2000))
  }

}
