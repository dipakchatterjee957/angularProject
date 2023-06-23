import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { PromiseComponent } from './promise/promise.component';


@NgModule({
  declarations: [PromiseComponent,
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  exports: [PromiseComponent]
})
export class RxjsModule { }
