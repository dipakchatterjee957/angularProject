import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { CustomPreloadingService } from './appService/custom-preloading.service';

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
  { path: 'loader', data: { preload: true }, loadChildren: () => import('./loader/pages.module').then(m => m.PagesModule) },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes

    // This is used for pre-loading the all modules
    // ,{ preloadingStrategy: PreloadAllModules }

    // this for custom pre-loading. which module we want to pre-load add 'data' object in 'routes' array.
    // In 'data' object make a varible as your choise just like 'preload' and make it 'true' to apply pre-loading.
    // using 'preload' true we apply pre-loading in the 'PagesModule'
    , { preloadingStrategy: CustomPreloadingService }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
