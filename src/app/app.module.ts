import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ApportCaloriqueComponent } from './apport-calorique/apport-calorique.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ApportCaloriqueContainerComponent } from './apport-calorique-container/apport-calorique-container.component';
import { HomeComponent } from './home/home.component';
import { ApportCaloriqueResultComponent } from './apport-calorique-result/apport-calorique-result.component';
import { NumberToSexePipe } from './number-to-sexe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ApportCaloriqueComponent,
    HeaderComponent,
    ApportCaloriqueContainerComponent,
    HomeComponent,
    ApportCaloriqueResultComponent,
    NumberToSexePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
