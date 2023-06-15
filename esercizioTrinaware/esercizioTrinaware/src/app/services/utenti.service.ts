import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utente } from '../models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  private utenti: Utente[] = [];

  private apiUrl = 'http://localhost:3000/utenti';

  constructor(private http: HttpClient) { }

  stampaUtenti(){
    this.getUtenti().subscribe(responseDati =>{
      responseDati.forEach(element => {       
        this.utenti.push(element)        
      })
    })
  }

  getUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(
      this.apiUrl
      ).pipe(
        map(responseDati =>{
          return responseDati
        })
      );
  }
}
