import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, forkJoin, fromEvent, map, pluck, take, withLatestFrom, zip } from 'rxjs';

@Component({
  selector: 'app-combinelatest-withlatestfrom',
  templateUrl: './combinelatest-withlatestfrom.component.html',
  styleUrls: ['./combinelatest-withlatestfrom.component.css']
})
export class CombinelatestWithlatestfromComponent implements AfterViewInit {

  nameList: Array<any> = ['Chayan', 'Suman', 'Abram'];
  colorList: Array<any> = ['primary', 'warning', 'success', 'danger'];
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {

    const observable1 = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map(data => data.target.value),
      take(4) // here take is used to end the observable to show forkJoin
    )
    const observable2 = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map(data => data.target.value),
      take(3)
    )

    // Ex - 1
    combineLatest(observable1, observable2).subscribe(([name, color]) => {
      console.log('Combinelatest=>', name, color);
      this.createElement(name, color, 'container1')
    })

    // Ex - 2
    observable1.pipe(withLatestFrom(observable2)).subscribe(([name, color]) => {
      console.log('withLatestFrom=>', name, color);
      this.createElement(name, color, 'container2')
    })

    // Ex - 3
    zip(observable1, observable2).subscribe(([name, color]) => {
      console.log('Zip=>', name, color);
      this.createElement(name, color, 'container3')
    })

    // Ex - 3
    forkJoin(observable1, observable2).subscribe(([name, color]) => {
      console.log('forkJoin=>', name, color);
      this.createElement(name, color, 'container4')
    })
  }

  createElement(name: string, color: string, containerid: string) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute("class", 'text-' + color);
    document.getElementById(containerid)?.appendChild(el)
  }
}
