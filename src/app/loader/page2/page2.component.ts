import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  id: string | null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      console.log(res);
      this.id = res.get('id')
    });

    this.activatedRoute.queryParamMap.subscribe(res => {
      console.log(res, res.get('editmode'))

    })
  }
}
