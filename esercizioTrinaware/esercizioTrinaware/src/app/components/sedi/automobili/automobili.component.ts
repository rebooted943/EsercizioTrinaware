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
  automobileId: number = 0;
  nuovoModello: string = '';
  nuovaMarca: string = '';
  nuoviCavalli: number = 0;
  nuovoPrezzo: number = 0;
  nuovoAutomobileId: number = 0;
  nuovoSedeId: number = 0;
  automobileSelezionata: Automobile | null = null;

  constructor(private http: HttpClient, private automobiliS: AutomobiliService) {}



  ngOnInit(): void {
    this.automobiliS.getAutomobili().subscribe(responseDati => {
      this.automobili = responseDati;
    });
  }

  onModificaAutomobile(automobile: Automobile) {
    this.automobileSelezionata = automobile;
  }

  salvaModifiche() {
    if (this.automobileSelezionata && this.automobileSelezionata.id) {
      this.automobileSelezionata.modello = this.modello;
      this.automobileSelezionata.marca = this.marca;
      this.automobileSelezionata.cavalli = this.cavalli;
      this.automobileSelezionata.prezzo = this.prezzo;
      this.automobiliS.modificaAutomobile(this.automobileSelezionata).subscribe(response => {
        console.log(response);
        this.automobileSelezionata = null;
      });
    }
  }  

  onAggiungiAutomobile() {
    if (!this.automobileSelezionata) {
      const nuovoId = Math.max(...this.automobili.map(automobile => automobile.id)) + 1;
      const nuovaAutomobile = new Automobile(nuovoId, this.nuovoModello, this.nuovaMarca, this.nuoviCavalli, this.nuovoPrezzo, this.nuovoSedeId);
  
      this.automobiliS.aggiungiAutomobile(nuovaAutomobile).subscribe(response => {
        console.log(response);
        this.automobili.push(nuovaAutomobile);
      });
    }
  }  

  onEliminaAutomobile(id: number) {
    this.automobiliS.eliminaAutomobile(id).subscribe(response => {
      console.log(response);
      const index = this.automobili.findIndex(automobile => automobile.id === id);
      if (index !== -1) {
        this.automobili.splice(index, 1);
      }
    });
  }
  
}
