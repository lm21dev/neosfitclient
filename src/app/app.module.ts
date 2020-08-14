import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { ApportCaloriqueComponent } from './apport-calorique/apport-calorique.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ApportCaloriqueContainerComponent } from './apport-calorique-container/apport-calorique-container.component';
import { HomeComponent } from './home/home.component';
import { ApportCaloriqueResultComponent } from './apport-calorique-result/apport-calorique-result.component';
import { NumberToSexePipe } from './number-to-sexe.pipe';
import { StatSuiviCaloriqueComponent } from './stat-suivi-calorique/stat-suivi-calorique.component';
import { ToasterComponent } from './toaster/toaster.component';
import { SyntheseConsoService } from './shared/services/synthese-conso.service';

import { HttpClientModule } from '@angular/common/http';
import { RepasComponent } from './repas/repas.component';
import { AlimentSelectorComponent } from './aliment-selector/aliment-selector.component';
import { AlimentComponent } from './aliment/aliment.component';
import { AlimentRechercheComponent } from './aliment-recherche/aliment-recherche.component';
import { AlimentElemDirective } from './aliment-selector/aliment-elem.directive';


@NgModule({
  declarations: [
    AppComponent,
    ApportCaloriqueComponent,
    HeaderComponent,
    ApportCaloriqueContainerComponent,
    HomeComponent,
    ApportCaloriqueResultComponent,
    NumberToSexePipe,
    StatSuiviCaloriqueComponent,
    ToasterComponent,
    RepasComponent,
    AlimentSelectorComponent,
    AlimentComponent,
    AlimentRechercheComponent,
    AlimentElemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [SyntheseConsoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
