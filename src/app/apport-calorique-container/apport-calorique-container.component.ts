import { Component, OnInit, Input } from '@angular/core';
import { SyntheseConsoService} from '../shared/services/synthese-conso.service';

@Component({
  selector: 'app-apport-calorique-container',
  templateUrl: './apport-calorique-container.component.html',
  styleUrls: ['./apport-calorique-container.component.css'],
  providers: [SyntheseConsoService]
})
export class ApportCaloriqueContainerComponent implements OnInit {
  affichageResult: boolean;
  constructor(private calcul: SyntheseConsoService) { }

  ngOnInit(): void {
    this.calcul.affichageResult.subscribe(u => this.affichageResult = u);
  }

}
