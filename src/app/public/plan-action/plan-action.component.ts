import { Component, OnInit } from '@angular/core';
import { PlanActionService } from '../services/planAction.service';
import { PlanAction } from '../models/plan-action.model';

@Component({
  selector: 'pa-plan-action',
  templateUrl: './plan-action.component.html',
  styleUrls: ['./plan-action.component.scss']
})
export class PlanActionComponent implements OnInit {

  public planActions: PlanAction[] = [];

  constructor(private planActionService: PlanActionService) { }

  ngOnInit() {
    this.getObjectifs();
  }

  getObjectifs() {
    this.planActionService.getObjectifs()
      .subscribe(planActions => this.planActions = planActions)
  }

}
