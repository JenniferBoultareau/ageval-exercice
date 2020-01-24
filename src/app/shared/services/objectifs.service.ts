import { Injectable } from '@angular/core';
import { OBJECTIFS } from '../models/mock-objectifs';
import { Objectif } from 'src/app/public/models/objectif.model';

@Injectable({
  providedIn: 'root'
})
export class ObjectifsService {

  private objectifs: Objectif[];

  constructor() { }

  getObjectifs() {
    return OBJECTIFS;
  }

  addObjectif(objectif: Objectif) {
    this.objectifs.push(objectif);
    this.getObjectifs();
  }
}
