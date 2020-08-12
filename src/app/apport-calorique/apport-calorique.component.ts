import {ActiviteEnum} from '../shared/enums/activite.enum';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, ValidationErrors, FormBuilder, Validators } from '@angular/forms';
import { CalculApportCaloriqueService } from '../shared/services/calcul-apport-calorique.service';
import { SyntheseConsoService } from '../shared/services/synthese-conso.service';
import { TypeSexe } from '../shared/enums/type-sexe.enum';

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
    private calcul: CalculApportCaloriqueService, 
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
    .subscribe(
      next => console.log(next),
      err => console.error(err));
  }
  refresh(): void {
    this.apportKcalForm.reset();
    this.calcul.affichageResult.next(false);
    this.calcul.mangeur.next(null);
  }
}
