import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aliment } from '../Interfaces/aliment';

@Injectable()
export class AlimentService {
  private url = 'http://localhost:8083/api/aliments';
  constructor(private http: HttpClient) { }

  getAliments(): Observable<Aliment[]>{
    return this.http.get<Aliment[]>(this.url);
  }
}
