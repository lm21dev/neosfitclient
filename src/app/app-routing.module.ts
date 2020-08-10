import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApportCaloriqueContainerComponent } from './apport-calorique-container/apport-calorique-container.component';

import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: 'apport', component: ApportCaloriqueContainerComponent
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
