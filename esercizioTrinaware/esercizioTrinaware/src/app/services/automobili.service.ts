import { Injectable } from '@angular/core';
import { Automobile } from '../models/automobile.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutomobiliService {

  automobili: Automobile[] = [];
  ultimoId: number = 0;

  private apiUrl = 'http://localhost:3002/automobili';

  constructor(private http: HttpClient) { }

  stampaVeicoli() {
    this.getVeicoli().subscribe(responseDati => {
      this.automobili = responseDati; // Aggiorna l'array locale con i dati dal server
      this.calcolaUltimoId(); // Calcola l'ultimo id
      console.log(this.automobili);
    });
  }

  getVeicoli(): Observable<Automobile[]> {
    return this.http.get<Automobile[]>(this.apiUrl);
  }

  aggiungiAutomobile(automobile: Automobile): Observable<any> {
    return this.http.post(this.apiUrl, automobile).pipe(
      map(response => {
        this.automobili.push(automobile); // Aggiunge l'automobile all'array locale
        this.calcolaUltimoId(); // Calcola il nuovo ultimo id
        return response;
      })
    );
  }

  calcolaUltimoId() {
    let maxId: number = 0;
    this.automobili.forEach(automobile => {
      if (automobile.id.valueOf() > maxId) {
        maxId = automobile.id.valueOf();
      }
    });
    this.ultimoId = maxId;
  }

  getUltimoId(): number {
    return this.ultimoId;
  }
  
}
