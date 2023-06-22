import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { RouterModule, Routes } from '@angular/router';

const pageRoutes: Routes = [
  {
    path: '', component: Page1Component, children: [
      // ':id' is used for router params
      { path: 'page2/:id', component: Page2Component },
      { path: 'page3', component: Page3Component }
    ]
  }
];

@NgModule({
  declarations: [Page1Component, Page2Component, Page3Component],
  imports: [CommonModule, RouterModule, RouterModule.forChild(pageRoutes)],
  exports: [Page1Component, Page2Component, Page3Component],
})
export class PagesModule {
  constructor() { console.log('PagesModule loaded') }
}
