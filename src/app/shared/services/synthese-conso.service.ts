import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conso } from '../Interfaces/conso';
import { Personne } from '../Interfaces/personne';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SyntheseConsoService {

  private readonly Url = 'http://localhost:8083/api/calculcalorie';
  conso = new BehaviorSubject<Conso>(null);
  affichageResult = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  calculCalorique(personne: Personne): Observable<Conso>{
    return this.http.post<Conso>(this.Url, personne);
  }

}
