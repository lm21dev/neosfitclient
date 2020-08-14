import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApportCaloriqueContainerComponent } from './apport-calorique-container/apport-calorique-container.component';

import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { StatSuiviCaloriqueComponent } from './stat-suivi-calorique/stat-suivi-calorique.component';
import { RepasComponent } from './repas/repas.component';
const routes: Routes = [
  {
    path: 'apport', component: ApportCaloriqueContainerComponent

  },
  {
  path: 'suivi', component: StatSuiviCaloriqueComponent
  },
  {
    path: 'repas', component: RepasComponent
  },
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
