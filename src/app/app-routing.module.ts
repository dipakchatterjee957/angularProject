import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindComponent } from './dataBind/databind.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';

const routes: Routes = [
  {path:'dataBind',component: DatabindComponent},
  {path:'ngIf',component: NgifComponent},
  {path:'ngSwitch',component: NgswitchComponent},
  {path:'ngFor',component: NgforComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
