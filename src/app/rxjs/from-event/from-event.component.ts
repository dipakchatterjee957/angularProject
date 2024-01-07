import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityService } from 'src/app/appService/utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit {

  @ViewChild('addBtn') addBtn: ElementRef;

  constructor(public _utility: UtilityService) { }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      console.log(res);
      let value = "Item" + count++;
      this._utility.addListItem(value, 'container1');
      this._utility.addListItem(value, 'container2');
    })
  }

}
