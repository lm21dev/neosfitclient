import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormulaireApportKcalComponent } from '../formulaire-apport-kcal/formulaire-apport-kcal.component';


@NgModule({
  declarations: [FormulaireApportKcalComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [FormulaireApportKcalComponent]
})
export class MyFormsModule { }
