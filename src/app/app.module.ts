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
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
