import { Component, OnInit } from '@angular/core';
import { ObjectifsService } from '../../shared/services/objectifs.service';
import { Objectif } from '../models/objectif.model';

@Component({
  selector: 'pa-plan-action',
  templateUrl: './plan-action.component.html',
  styleUrls: ['./plan-action.component.scss']
})
export class PlanActionComponent implements OnInit {

  public objectifs: Objectif[] = [];

  constructor(private objectifService: ObjectifsService) { }

  ngOnInit() {
    this.getObjectifs();
  }

  getObjectifs() {
    this.objectifService.getObjectifs()
      .subscribe(objectifs => this.objectifs = objectifs)
  }

}
