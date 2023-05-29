import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  pathArr = [
    {routerPath: '/dataBind', pathName: 'DataBind'},
    {routerPath: '/ngIf', pathName: 'ng-If'},
    {routerPath: '/ngSwitch', pathName: 'ng-Switch'},
    {routerPath: '/ngFor', pathName: 'ng-For'},
    {routerPath: '/ngContent', pathName: 'ng-Content'},
    {routerPath: '/inputOutput', pathName: 'input-output'},
    {routerPath: '/subject', pathName: 'subject'},
  ]
}
