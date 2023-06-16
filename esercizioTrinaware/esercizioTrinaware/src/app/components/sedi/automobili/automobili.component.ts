import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Automobile } from 'src/app/models/automobile.model';
import { AutomobiliService } from 'src/app/services/automobili.service';

@Component({
  selector: 'app-automobili',
  templateUrl: './automobili.component.html',
  styleUrls: ['./automobili.component.scss']
})
export class AutomobiliComponent implements OnInit{

  automobili: Automobile[] = [];

  modello: string = '';
  marca: string = '';
  cavalli: number = 0;
  prezzo: number = 0;
  sedeId: number = 0;

  constructor(private http: HttpClient, private automobiliS: AutomobiliService) {}

  ngOnInit(): void {
    this.automobiliS.stampaVeicoli();
  }

  onAggiungiAutomobile() {
    console.log("metodo aggiungi automobile");
    const ultimoId = this.automobiliS.getUltimoId();
    const nuovoId = ultimoId + 1;
    let nuovaAuto = new Automobile(nuovoId, this.modello, this.marca, this.cavalli, this.prezzo, this.sedeId);
    console.log(nuovaAuto + ' la nuova auto');

    this.automobiliS.aggiungiAutomobile(nuovaAuto).subscribe(response => {
      console.log(response); // Stampa la risposta del server
      console.log(this.automobili);
    });
  }
  
}
