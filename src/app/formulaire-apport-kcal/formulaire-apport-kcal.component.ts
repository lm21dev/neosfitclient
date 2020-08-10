import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { ActivationEnd } from '@angular/router';
import {ActiviteEnum} from '../enums/activite.enum';


@Component({
  selector: 'app-formulaire-apport-kcal',
  templateUrl: './formulaire-apport-kcal.component.html',
  styleUrls: ['./formulaire-apport-kcal.component.css']
})
export class FormulaireApportKcalComponent implements OnInit {
  apportKcalForm: FormGroup;
  
  keys = Object.keys;
  act = ActiviteEnum;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.apportKcalForm = this.builder.group(
      {
        activite: '',
        sexe: '',
        age: '',
        poids: '',
        taille: ''
      }
    ); 
      console.log(this.keys(this.act));
  }
  onSubmit(): void {

  }
}
