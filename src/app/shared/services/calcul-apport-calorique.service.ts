import { Injectable } from '@angular/core';
import { ActiviteEnum } from '../enums/activite.enum';
import { BehaviorSubject } from 'rxjs';
export interface mangeur{
  activite: ActiviteEnum;
  sexe: number;
  age: number;
  poids: number;
  taille: number;
}

@Injectable()
export class CalculApportCaloriqueService {
  mangeur = new  BehaviorSubject<mangeur>(null);
  affichageResult = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  calcul(input: mangeur): void {
    console.log('input : ',input);
    if ( input ){
      this.mangeur.next(input);
      this.affichageResult.next(true);
    }
    

  }
}
