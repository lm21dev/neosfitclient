import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-aliment-recherche',
  templateUrl: './aliment-recherche.component.html',
  styleUrls: ['./aliment-recherche.component.css']
})
export class AlimentRechercheComponent implements OnInit {

  @Output() recherche = new EventEmitter();
  @Input() inputRecherche: string;
  constructor() { }

  ngOnInit(): void {
    this.recherche.emit({value : ''});
  }

  onTextInputValueChange(): void {
    this.recherche.emit({value : this.inputRecherche});
  }
}
