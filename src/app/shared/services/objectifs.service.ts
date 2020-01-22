import { Injectable } from '@angular/core';
import { OBJECTIFS } from '../models/mock-objectifs';

@Injectable({
  providedIn: 'root'
})
export class ObjectifsService {

  constructor() { }

  getObjectifs() {
    return OBJECTIFS;
  }
}
