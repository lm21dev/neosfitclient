import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApportCaloriqueContainerComponent } from './apport-calorique-container/apport-calorique-container.component';

import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { StatSuiviCaloriqueComponent } from './stat-suivi-calorique/stat-suivi-calorique.component';
const routes: Routes = [
  {
    path: 'apport', component: ApportCaloriqueContainerComponent

  },
  {
    path: '', component: HomeComponent
  },
  {
  path: 'suivi', component: StatSuiviCaloriqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
