import { Injectable } from '@angular/core';
import { OBJECTIFS } from '../models/mock-objectifs';
import { Objectif } from 'src/app/public/models/objectif.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectifsService {

  apiUrl: string = "http://localhost:3000/planAction";

  private objectifs: Objectif[];

  constructor( private http: HttpClient) { }

  getObjectifs() {
    return this.http.get<Objectif[]>(this.apiUrl);
  }

  addObjectif(objectif: Objectif) {
    this.objectifs.push(objectif);
    this.getObjectifs();
  }
}
