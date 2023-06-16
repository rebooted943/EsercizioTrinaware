import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sede } from 'src/app/models/sede.model';
import { SediService } from 'src/app/services/sedi.service';

@Component({
  selector: 'app-sedi',
  templateUrl: './sedi.component.html',
  styleUrls: ['./sedi.component.scss']
})
export class SediComponent implements OnInit {

  sedi: Sede[] = [];
  nomeSede: String = '';
  indirizzoSede: String = '';
  nomeNuovaSede: String = '';
  indirizzoNuovaSede: String = '';
  sedeSelezionata: Sede | null = null;

  constructor(private http: HttpClient, private sediS: SediService) { }

  ngOnInit(): void {
    this.sediS.getSedi().subscribe(responseDati => {
      this.sedi = responseDati;
    });
  }

  onModificaSede(sede: Sede) {
    this.sedeSelezionata = sede;
  }

  salvaModifiche() {
    if (this.sedeSelezionata && this.sedeSelezionata.id) {
      this.sedeSelezionata.nomeSede = this.nomeSede;
      this.sedeSelezionata.indirizzoSede = this.indirizzoSede;
      this.sediS.modificaSede(this.sedeSelezionata).subscribe(response => {
        console.log(response);
        this.sedeSelezionata = null;
      });
    }
  }  

  onAggiungiSede() {
    if (!this.sedeSelezionata) {
      const nuovoId = Math.max(...this.sedi.map(sede => sede.id)) + 1;
      const nuovaSede = new Sede(nuovoId, this.nomeNuovaSede, this.indirizzoNuovaSede);
  
      this.sediS.aggiungiSede(nuovaSede).subscribe(response => {
        console.log(response);
        this.sedi.push(nuovaSede);
      });
    }
  }  

  onEliminaSede(id: number) {
    this.sediS.eliminaSede(id).subscribe(response => {
      console.log(response);
      const index = this.sedi.findIndex(sede => sede.id === id);
      if (index !== -1) {
        this.sedi.splice(index, 1);
      }
    });
  }
}
