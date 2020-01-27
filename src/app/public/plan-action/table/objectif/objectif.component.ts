import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pa-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.scss']
})
export class ObjectifComponent implements OnInit {

  @Input('Objectifs') public obj;

  constructor() { }

  ngOnInit() {
  }

}
