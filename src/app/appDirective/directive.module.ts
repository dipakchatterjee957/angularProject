import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostlistenerDirective } from './hostlistener.directive';
import { TestdirectiveDirective } from './testdirective.directive';

@NgModule({
  declarations: [HostlistenerDirective,TestdirectiveDirective],
  imports: [
    CommonModule
  ],
  exports: [HostlistenerDirective,TestdirectiveDirective]
})
export class DirectiveModule { }
