import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopNavComponent } from './myContainer/top-nav/top-nav.component';
import { DatabindComponent } from './dataBind/databind.component';
import { FormsModule } from '@angular/forms';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgContentComponent } from './content/ng-content/ng-content.component';
import { CardComponent } from './content/card/card.component';
import { ParentComponent } from './inputOutput/parent/parent.component';
import { ChildComponent } from './inputOutput/child/child.component';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './component/comp1/comp1.component';
import { Comp2Component } from './component/comp2/comp2.component';
import { UtilityService } from './appService/utility.service';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { Comp3Component } from './component/comp3/comp3.component';
import { TestdirectiveDirective } from './appDirective/testdirective.directive';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { HostlistenerDirective } from './appDirective/hostlistener.directive';
import { CustomPipe } from './appPipes/custom.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './appPipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopNavComponent,
    DatabindComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    LoginComponent,
    PagenotfoundComponent,
    NgContentComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    ViewchildComponent,
    Comp3Component,
    TestdirectiveDirective,
    HostlistenerComponent,
    HostlistenerDirective,
    CustomPipe,
    PipeComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
