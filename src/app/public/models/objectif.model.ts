import { Action } from './action.model';

export class Objectif {
  constructor(
    public id?: number,
    public reference?: string,
    public nom?: string,
    public themes?: string,
    public sources?: string,
    public responsables?: string,
    public echeances?: string,
    public priorites?: string,
    public avancement?: number,
    public actions?: Action[]
  ) {}
}