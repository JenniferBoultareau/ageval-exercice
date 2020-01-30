import { Objectif } from './objectif.model';

export class PlanAction {
  constructor(
    public id?: number,
    public etablissement?: string,
    public objectifs?: Objectif
  ) {}
}