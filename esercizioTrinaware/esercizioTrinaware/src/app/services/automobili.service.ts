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

  private apiUrl = 'http://localhost:3002/automobili';

  constructor(private http: HttpClient) { }

  stampaVeicoli(){
    this.getVeicoli().subscribe(responseDati =>{
      responseDati.forEach(element => {       
        this.automobili.push(element)  
        console.log(element)      
      })
      console.log(this.automobili);
      
    })
  }

  getVeicoli(): Observable<Automobile[]> {
    return this.http.get<Automobile[]>(
      this.apiUrl
      ).pipe(
        map(responseDati =>{
          return responseDati
        })
      );
  }
}
