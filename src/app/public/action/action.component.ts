import { Component, OnInit } from '@angular/core';
import { ObjectifsService } from '../../shared/services/objectifs.service';

@Component({
  selector: 'pa-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  public objectifs = [];

  constructor(private objectifService: ObjectifsService) { }

  ngOnInit() {
    this.objectifs = this.objectifService.getObjectifs()
  }

}
