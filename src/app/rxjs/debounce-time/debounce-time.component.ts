import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  myInputText1: string | null;
  @ViewChild('myInput1') myInput1: ElementRef;
  myInputText2: string | null;
  @ViewChild('myInput2') myInput2: ElementRef;

  constructor(private loadingBar: LoadingBarService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Ex - 1
    const searchTerm1 = fromEvent<any>(this.myInput1.nativeElement, 'keyup').pipe(
      map(data => data.target.value),
      debounceTime(1000)
    );

    searchTerm1.subscribe(res => {
      console.log(res);
      this.myInputText1 = res;
      this.loadingBar.start();

      setTimeout(() => {
        this.myInputText1 = null;
        this.loadingBar.stop();
      }, 2000);
    })


    // Ex - 2
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(data => data.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );

    searchTerm2.subscribe(res => {
      console.log(res);
      this.myInputText2 = res;
      this.loadingBar.start();

      setTimeout(() => {
        this.myInputText2 = null;
        this.loadingBar.stop();
      }, 2000);
    })
  }

}
