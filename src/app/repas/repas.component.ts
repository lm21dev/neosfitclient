import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { AlimentService } from '../shared/services/aliment.service';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css'],
  providers: [AlimentService]
})
export class RepasComponent implements OnInit {

  @Output() _clickAdd = new EventEmitter();
  rechercher: string ='';
  constructor() { }

  ngOnInit(): void {
  }
  filtrage(event: any): void{
    this.rechercher = event.value;
  }
  
  clickAdd(event: any): void{
    console.log('aliment container', event);
    this._clickAdd.emit(event);
  }

}
