import { Injectable } from '@angular/core';

export interface Conso{
  kcal: number;
  proteine: number;
  lipides: number;
  glucides: number;
}

@Injectable()
export class SyntheseConsoService {
  conso: Conso;
  constructor() {
  }
}
