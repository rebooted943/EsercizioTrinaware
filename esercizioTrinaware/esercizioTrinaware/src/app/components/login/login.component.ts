import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Utente } from '../../models/utente.model';
import { HttpClient } from '@angular/common/http';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  utenti: Utente[];
  apiUrl = 'http://localhost:3000/utenti';
  email: string;
  password: string;

  constructor(private http: HttpClient, private router: Router, private auth: AuthService, private utentiS: UtentiService) { }

  login() {
    this.getUtenti().subscribe(utenti => {
      const utenteTrovato = utenti.find(utente => utente.email === this.email && utente.password === this.password);
      if (utenteTrovato) {
        console.log('Login effettuato con successo');
        // Esegui azioni aggiuntive o reindirizzamenti dopo il login
        //aggiungere reindirizzamento alla home
        // this.router.navigate(['/dashboard']);
      } else {
        //pulisci i campi e fai reinserire
        console.log('Credenziali di accesso non valide');
      }
    });
  }

  getUtenti() {
    return this.http.get<Utente[]>(this.apiUrl);
  }

  stampaUtenti(){
    this.utentiS.stampaUtenti();
  }



}
