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
import { UtilityService } from './appService/utility.service';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { CustomPipe } from './appPipes/custom.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './appPipes/filter.pipe';
import { DirectiveModule } from './appDirective/directive.module';
import { SharedComponentModule } from './component/shared-component.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    // We declare here components, Directives, and pipes in declarations
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
    ViewchildComponent,
    HostlistenerComponent,
    CustomPipe,
    PipeComponent,
    FilterPipe
  ],
  imports: [
    // other module which is used in the app, featured module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DirectiveModule,
    SharedComponentModule, HttpClientModule
  ],
  providers: [UtilityService],// declare services in providers
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { console.log('AppModule loaded') }
}
