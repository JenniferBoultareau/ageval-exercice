import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pa-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input('action') public action;

  constructor() { }

  ngOnInit() {
  }

}
