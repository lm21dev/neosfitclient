import { Component, OnInit } from '@angular/core';
import { CalculApportCaloriqueService, mangeur} from '../shared/services/calcul-apport-calorique.service';

@Component({
  selector: 'app-apport-calorique-result',
  templateUrl: './apport-calorique-result.component.html',
  styleUrls: ['./apport-calorique-result.component.css']
})
export class ApportCaloriqueResultComponent implements OnInit {
  result: mangeur;

  constructor(private calcul: CalculApportCaloriqueService) { }

  ngOnInit(): void {
    this.calcul.mangeur.subscribe(m => this.result = m);
  }

}
