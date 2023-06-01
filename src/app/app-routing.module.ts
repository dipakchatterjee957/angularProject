import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindComponent } from './dataBind/databind.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgContentComponent } from './content/ng-content/ng-content.component';
import { ParentComponent } from './inputOutput/parent/parent.component';
import { SubjectComponent } from './subject/subject.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dataBind', component: DatabindComponent },
  { path: 'ngIf', component: NgifComponent },
  { path: 'ngSwitch', component: NgswitchComponent },
  { path: 'ngFor', component: NgforComponent },
  { path: 'ngContent', component: NgContentComponent },
  { path: 'inputOutput', component: ParentComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'viewChild', component: ViewchildComponent },
  { path: 'hostListener', component: HostlistenerComponent },
  { path: 'pipe', component: PipeComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
