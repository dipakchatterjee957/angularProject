import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { PromiseComponent } from './promise/promise.component';
import { ListComponent } from './list/list.component';
import { RxjsLandingComponent } from './rxjs-landing/rxjs-landing.component';


@NgModule({
  declarations: [PromiseComponent, ListComponent, RxjsLandingComponent,
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  exports: [PromiseComponent]
})
export class RxjsModule { }
