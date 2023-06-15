import { Injectable, OnInit } from '@angular/core';
import { Sede } from '../models/sede.model';
import { Observable, elementAt, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SediService {

  sedi: Sede[] = [];

  private apiUrl = 'http://localhost:3001/sedi';

  constructor(private http: HttpClient) { }

  stampaSedi(){
    this.getSedi().subscribe(responseDati =>{
      responseDati.forEach(element => {       
        this.sedi.push(element)
      })      
    })
  }

  getSedi(): Observable<Sede[]> {
    return this.http.get<Sede[]>(
      this.apiUrl
    ).pipe(
      map(responseDati => {
        return responseDati;  
      })
    )
}
}
