import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  pathArr = [
    { routerPath: 'promise', pathName: 'Promise' },
    { routerPath: 'fromEvent', pathName: 'From Event' },
    { routerPath: 'intervalTimer', pathName: 'Interval & Timer' },
    { routerPath: 'ofFrom', pathName: 'Of & From' },
    { routerPath: 'toArray', pathName: 'toArray' },
    { routerPath: 'customObservable', pathName: 'Custom \n Observable' },
    { routerPath: 'map', pathName: 'Map' },
    { routerPath: 'pluck', pathName: 'Pluck' },
    { routerPath: 'filter', pathName: 'Filter' },
    { routerPath: 'tap', pathName: 'Tap' },
    { routerPath: 'take', pathName: 'Take' },
    { routerPath: 'retry', pathName: 'Retry' },
    { routerPath: 'debounceTime', pathName: 'Debounce Time' },
    { routerPath: 'replaySubject', pathName: 'Replay Subject' },
  ]
}
