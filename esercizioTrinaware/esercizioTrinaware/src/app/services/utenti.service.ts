import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utente } from '../models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  utenti: Utente[] = [];

  utentiApiUrl = 'http://localhost:3000/utenti';

  constructor(private http: HttpClient) { }

  getUtenti(): Observable<Utente[]> {
    console.log('get utenti in utenti service');
    return this.http.get<Utente[]>(this.utentiApiUrl);
    
  }

  setUtenti(){
    console.log('setUtenti in utenti service');
    
    this.getUtenti().subscribe(responseDati => {
      this.utenti = responseDati;
      console.log(this.utenti);
    });
  }


  // getUtenti(): Observable<Utente[]> {
  //   return this.http.get<Utente[]>(
  //     this.apiUrl
  //     ).pipe(
  //       map(responseDati =>{
  //         return responseDati
  //       })
  //     );
  // }
}
