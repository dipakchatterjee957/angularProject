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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
