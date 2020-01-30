import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PlanAction } from '../models/plan-action.model';
import { Objectif } from '../models/objectif.model';

@Injectable({
  providedIn: 'root'
})
export class PlanActionService {

  apiUrl: string = "http://localhost:3000/planAction";

  constructor( private http: HttpClient) { }

  getObjectifs() {
    return this.http.get<PlanAction[]>(this.apiUrl);
  }

  addObjectifs(objectif) {
    return this.http.post<Objectif>(this.apiUrl, objectif);
  }
}