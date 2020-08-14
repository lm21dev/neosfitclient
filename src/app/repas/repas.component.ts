import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TypeRepas } from '../shared/enums/type-repas.enum'
import { RepasService } from '../shared/services/repas.service';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {

  typeRepas = TypeRepas;
  repasForm: FormGroup;
  keys = Object.keys;
  values = Object.values;

  constructor( 
    private builder: FormBuilder,
    private serviceRepas: RepasService) { }

  ngOnInit(): void {
    this.repasForm = this.builder.group(
      {
        date: new FormControl( '', [Validators.required]),
        typeRepas: ''
      }
    );
  }

  onSubmit(): void {

    this.serviceRepas.AddRepas(this.repasForm.value)
    .subscribe(
      next => console.log(next),
      err => console.error(err));
  }


  refresh(): void {
    this.repasForm.reset();
  }

}
