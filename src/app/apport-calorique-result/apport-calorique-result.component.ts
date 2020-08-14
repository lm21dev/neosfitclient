import { Component, OnInit } from '@angular/core';
import { SyntheseConsoService} from '../shared/services/synthese-conso.service';
import { Conso } from '../shared/Interfaces/conso';

@Component({
  selector: 'app-apport-calorique-result',
  templateUrl: './apport-calorique-result.component.html',
  styleUrls: ['./apport-calorique-result.component.css']
})
export class ApportCaloriqueResultComponent implements OnInit {
  conso: Conso;

  constructor(private calcul: SyntheseConsoService) { }

  ngOnInit(): void {
    this.calcul.conso.subscribe(u => this.conso = u);
  }

}
