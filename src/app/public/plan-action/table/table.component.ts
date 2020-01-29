import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pa-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('PlanAction') public planAction;

  constructor() { }

  ngOnInit() {
  }

}
