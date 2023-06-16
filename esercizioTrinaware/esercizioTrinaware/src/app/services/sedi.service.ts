import { Injectable } from '@angular/core';
import { Sede } from '../models/sede.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SediService {

  sedi: Sede[] = [];
  ultimoId: number = 0;
  
  private sediApiUrl = 'http://localhost:3001/sedi';

  constructor(private http: HttpClient) { }

  stampaSedi() {
    this.getSedi().subscribe(responseDati => {
      this.sedi = responseDati;
      console.log(this.sedi);
    });
  }

  getSedi(): Observable<Sede[]> {
    return this.http.get<Sede[]>(this.sediApiUrl);
  }

  aggiungiSede(sede: Sede): Observable<any> {
    return this.http.post(this.sediApiUrl, sede).pipe(
      map(response => {
        this.sedi.push(sede);
        return response;
      })
    );
  }

  modificaSede(sede: Sede): Observable<any> {
    const url = `${this.sediApiUrl}/${sede.id}`;
    return this.http.put(url, sede).pipe(
      map(response => {
        const index = this.sedi.findIndex(item => item.id === sede.id);
        if (index !== -1) {
          this.sedi[index] = sede;
        }
        return response;
      })
    );
  }

  eliminaSede(id: number): Observable<any> {
    const url = `${this.sediApiUrl}/${id}`;
    return this.http.delete(url).pipe(
      map(response => {
        const index = this.sedi.findIndex(item => item.id === id);
        if (index !== -1) {
          this.sedi.splice(index, 1);
        }
        return response;
      })
    );
  }
}
