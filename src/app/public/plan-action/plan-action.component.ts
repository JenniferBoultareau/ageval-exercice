import { Component, OnInit } from '@angular/core';
import { ObjectifsService } from '../../shared/services/objectifs.service';

@Component({
  selector: 'pa-plan-action',
  templateUrl: './plan-action.component.html',
  styleUrls: ['./plan-action.component.scss']
})
export class PlanActionComponent implements OnInit {

  public objectifs = [];

  constructor(private objectifService: ObjectifsService) { }

  ngOnInit() {
    this.objectifs = this.objectifService.getObjectifs()
  }

}
