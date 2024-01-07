import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { PromiseComponent } from './promise/promise.component';
import { ListComponent } from './list/list.component';
import { RxjsLandingComponent } from './rxjs-landing/rxjs-landing.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfFromComponent } from './of-from/of-from.component';


@NgModule({
  declarations: [PromiseComponent, ListComponent, RxjsLandingComponent, FromEventComponent, IntervalTimerComponent, OfFromComponent,
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  exports: [PromiseComponent]
})
export class RxjsModule { }
