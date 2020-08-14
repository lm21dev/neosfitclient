import {ActiviteEnum} from '../shared/enums/activite.enum';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, ValidationErrors, FormBuilder, Validators } from '@angular/forms';

import { SyntheseConsoService } from '../shared/services/synthese-conso.service';
import { TypeSexe } from '../shared/enums/type-sexe.enum';
import { Conso } from '../shared/Interfaces/conso';

@Component({
  selector: 'app-apport-calorique',
  templateUrl: './apport-calorique.component.html',
  styleUrls: ['./apport-calorique.component.css']
})
export class ApportCaloriqueComponent implements OnInit {

  apportKcalForm: FormGroup;
  keys = Object.keys;
  values = Object.values;
  act = ActiviteEnum;

  sexes = TypeSexe;

  get activite(): AbstractControl{return this.apportKcalForm.get('activite'); }
  get sexe(): AbstractControl{return this.apportKcalForm.get('sexe'); }
  get poids(): AbstractControl{return this.apportKcalForm.get('poids'); }
  get age(): AbstractControl{return this.apportKcalForm.get('age'); }
  get taille(): AbstractControl{return this.apportKcalForm.get('taille'); }

  getErrors(a: AbstractControl): string{
    let res = '';
    if (a.errors && !a.pristine){
      if (a.errors.required){
        res += 'Ce champs est requis';
      }
      if (a.errors.min){
        res += 'Vous devez entrer une valeur supérieure à ' + a.errors.min.min;
      }
      if (a.errors.max){
        res += 'Vous devez entrer une valeur inférieure à ' + a.errors.max.max;
      }
    }

    return res;
  }
  constructor(
    private builder: FormBuilder,
    private syntheseConso: SyntheseConsoService) { }

  ngOnInit(): void {
    this.apportKcalForm = this.builder.group(
      {
        activite: ['', [Validators.required]],
        sexe: ['', [Validators.required]],
        age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
        poids: ['', [Validators.required, Validators.min(25), Validators.max(150)]],
        taille: ['', [Validators.required, Validators.min(130), Validators.max(250)]]
      }
    );
  }
  onSubmit(): void {

    this.syntheseConso.calculCalorique(this.apportKcalForm.value)
    .subscribe( c => {this.syntheseConso.conso.next(c); },
                err => console.error(err));
    this.syntheseConso.affichageResult.next(true);
  }
  refresh(): void {
    this.apportKcalForm.reset();
    this.syntheseConso.affichageResult.next(false);
    this.syntheseConso.conso.next(null);
  }
}
