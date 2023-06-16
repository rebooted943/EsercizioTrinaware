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

  private automobiliApiUrl = 'http://localhost:3002/automobili';

  constructor(private http: HttpClient) { }

  stampaAutomobili() {
    this.getAutomobili().subscribe(responseDati => {
      this.automobili = responseDati; // Aggiorna l'array locale con i dati dal server
      this.calcolaUltimoId(); // Calcola l'ultimo id
      console.log(this.automobili);
    });
  }

  getAutomobili(): Observable<Automobile[]> {
    return this.http.get<Automobile[]>(this.automobiliApiUrl);
  }

  aggiungiAutomobile(automobile: Automobile): Observable<any> {
    return this.http.post(this.automobiliApiUrl, automobile).pipe(
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

  modificaAutomobile(automobile: Automobile): Observable<any> {
    const url = `${this.automobiliApiUrl}/${automobile.id}`;
    return this.http.put(url, automobile).pipe(
      map(response => {
        const index = this.automobili.findIndex(item => item.id === automobile.id);
        if (index !== -1) {
          this.automobili[index] = automobile;
        }
        return response;
      })
    );
  }

  eliminaAutomobile(id: number): Observable<any> {
    const url = `${this.automobiliApiUrl}/${id}`;
    return this.http.delete(url).pipe(
      map(response => {
        const index = this.automobili.findIndex(item => item.id === id);
        if (index !== -1) {
          this.automobili.splice(index, 1);
        }
        return response;
      })
    );
  }
  
}
