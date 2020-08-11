import {ActiviteEnum} from '../shared/enums/activite.enum';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, ValidationErrors, FormBuilder, Validators } from '@angular/forms';
import { CalculApportCaloriqueService } from '../shared/services/calcul-apport-calorique.service';
@Component({
  selector: 'app-apport-calorique',
  templateUrl: './apport-calorique.component.html',
  styleUrls: ['./apport-calorique.component.css']
})
export class ApportCaloriqueComponent implements OnInit {

  apportKcalForm: FormGroup;
  keys = Object.keys;
  act = ActiviteEnum;

  constructor(private builder: FormBuilder, private calcul: CalculApportCaloriqueService) { }

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
    this.calcul.calcul(this.apportKcalForm.value);
  }
  refresh(): void {
    this.apportKcalForm.reset();
    this.calcul.affichageResult.next(false);
    this.calcul.mangeur.next(null);
  }
}
