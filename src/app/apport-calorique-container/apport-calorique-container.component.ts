import { Component, OnInit, Input } from '@angular/core';
import { CalculApportCaloriqueService} from '../shared/services/calcul-apport-calorique.service';

@Component({
  selector: 'app-apport-calorique-container',
  templateUrl: './apport-calorique-container.component.html',
  styleUrls: ['./apport-calorique-container.component.css'],
  providers: [CalculApportCaloriqueService]
})
export class ApportCaloriqueContainerComponent implements OnInit {
  affichageResult: boolean;
  constructor(private calcul: CalculApportCaloriqueService) { }

  ngOnInit(): void {
    this.calcul.affichageResult.subscribe(u => this.affichageResult = u);
  }

}
