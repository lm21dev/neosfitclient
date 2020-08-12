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

  constructor(
    private builder: FormBuilder,
    private syntheseConso: SyntheseConsoService) { }

  ngOnInit(): void {
    this.apportKcalForm = this.builder.group(
      {
        activite: new FormControl( '', [Validators.required]),
        sexe: '',
        age: '',
        poids: '',
        taille: ''
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
    this.syntheseConso.conso=null;
  }
}
