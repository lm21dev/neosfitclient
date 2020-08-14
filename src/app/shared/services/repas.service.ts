import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repas } from '../Interfaces/repas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  private readonly Url = 'http://localhost:8083/api/repas';
  constructor(private http: HttpClient) { }


  AddRepas(repas: Repas): Observable<Repas>{
    return this.http.post<Repas>(this.Url, repas);
  }
}
