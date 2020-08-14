import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Aliment } from '../shared/Interfaces/aliment';
import { AlimentService } from '../shared/services/aliment.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-aliment-selector',
  templateUrl: './aliment-selector.component.html',
  styleUrls: ['./aliment-selector.component.css']
})
export class AlimentSelectorComponent implements OnInit {

  disabled: boolean;
  private _isSelected: boolean = false;

  @Input()
  set itemsSelected(isSelected: boolean){
    this._isSelected = isSelected;
    console.log('isSelected : ', this._isSelected);
  }

  @Output() clickAdd = new EventEmitter();

  aliments = new BehaviorSubject<Aliment[]>(null);
  alimentsAffiche =  new BehaviorSubject<Aliment[]>(null);
  selectedAliments: Aliment[] = [];
  private _filtre = new BehaviorSubject<string>(null);

  @ViewChild('maListe', {static: true})
  private list: ElementRef;

  @Input()
  public set filtre(filtre: string){
    this._filtre.next(filtre);
    this.filtrage();
  }
  public get filtre(): string{
    return this._filtre.value;

  }
  
  constructor(private apiS: AlimentService) {
    
      this.apiS.getAliments().subscribe(
      a => {this.aliments.next(a);
            this.filtrage();
            console.log('réponse: ',a);
            console.log('tableau : ', this.aliments);}
     );
      
  }

  filtrage(): void{
    if (this.alimentsAffiche){
      this.alimentsAffiche.next([]);
    }
    let temp: Aliment[] = [];
    
    if (this.aliments.value){
      for (let i of this.aliments.value.values()){
        if (i.libelle.includes(this.filtre)){
          temp.push(i);
        }
      }
    }
    this.alimentsAffiche.next(temp);
  }
  ngOnInit(): void {
  }
  onAddClick(): void{
    if (this.itemsSelected){

    }
    this.clickAdd.emit({aliments: this.selectedAliments });
  }

  onSelectedChange(value: boolean): void {

    this._isSelected = value;

    this.disabled = this._isSelected;
  }

}
