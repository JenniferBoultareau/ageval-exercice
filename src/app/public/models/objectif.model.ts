import { Action } from './action.model';

export class Objectif {
  public reference: string;
  public nom: string;
  public themes: string;
  public sources: string;
  public reponsables: string;
  public echeances: string;
  public priorites: number;
  public avancement: number;
  public actions: Action;
}