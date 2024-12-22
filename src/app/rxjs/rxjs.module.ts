import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
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
import { PipeModule } from '../appPipes/pipe.module';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SwitchMapSearchComponent } from './switch-map-search/switch-map-search.component';
import { FormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { CombinelatestWithlatestfromComponent } from './combinelatest-withlatestfrom/combinelatest-withlatestfrom.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';


@NgModule({
  declarations: [PromiseComponent, ListComponent, RxjsLandingComponent, FromEventComponent, IntervalTimerComponent, OfFromComponent,
    ToArrayComponent, CustomObservableComponent, MapComponent, PluckComponent, FilterComponent, TapComponent, TakeComponent, RetryComponent, DebounceTimeComponent, ReplaySubjectComponent, AsyncSubjectComponent, ConcatMergeComponent, MergeMapComponent, ConcatMapComponent, SwitchMapComponent, SwitchMapSearchComponent, ExhaustMapComponent, CombinelatestWithlatestfromComponent, ShareReplayComponent],
  imports: [
    CommonModule,
    FormsModule,
    RxjsRoutingModule, PipeModule
  ],
  exports: [PromiseComponent]
})
export class RxjsModule {
  constructor() { console.log('RxjsModule loaded') }
}
