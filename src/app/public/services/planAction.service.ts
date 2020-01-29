import { Injectable } from '@angular/core';
import { PlanAction } from '../models/plan-action.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanActionService {

  apiUrl: string = "http://localhost:3000/planAction";

  constructor( private http: HttpClient) { }

  getObjectifs() {
    return this.http.get<PlanAction[]>(this.apiUrl);
  }

  // addObjectif(objectif: Objectif) {
  //   this.objectifs.push(objectif);
  //   this.getObjectifs();
  // }
}