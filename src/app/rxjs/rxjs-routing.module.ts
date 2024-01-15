import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ListComponent } from './list/list.component';
import { RxjsLandingComponent } from './rxjs-landing/rxjs-landing.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';

const routes: Routes = [
  {
    path: '', component: RxjsLandingComponent, children: [
      { path: '', component: ListComponent },
      { path: 'promise', component: PromiseComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'intervalTimer', component: IntervalTimerComponent },
      { path: 'ofFrom', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'customObservable', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debounceTime', component: DebounceTimeComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
