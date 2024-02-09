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
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SwitchMapSearchComponent } from './switch-map-search/switch-map-search.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { CombinelatestWithlatestfromComponent } from './combinelatest-withlatestfrom/combinelatest-withlatestfrom.component';

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
      { path: 'replaySubject', component: ReplaySubjectComponent },
      { path: 'asyncSubject', component: AsyncSubjectComponent },
      { path: 'concatMerge', component: ConcatMergeComponent },
      { path: 'mergeMap', component: MergeMapComponent },
      { path: 'concatMap', component: ConcatMapComponent },
      { path: 'switchMap', component: SwitchMapComponent },
      { path: 'switchMapSearch', component: SwitchMapSearchComponent },
      { path: 'exhaustMap', component: ExhaustMapComponent },
      { path: 'combinelatestWithlatestfrom', component: CombinelatestWithlatestfromComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
