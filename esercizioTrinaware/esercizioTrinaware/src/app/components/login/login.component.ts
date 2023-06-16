import { Component, Input, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {

  utenti: Utente[] = [];
  apiUrl = 'http://localhost:3000/utenti';

  ngOnInit(): void {
    console.log('oninit login component');
    
    this.utentiS.getUtenti().subscribe(responseDati => {
      this.utenti = responseDati;
      console.log(this.utenti);
    });
    
  }
  
  constructor(private authService: AuthService, private http: HttpClient, private utentiS: UtentiService, private router: Router) {}
  getUtenti() {
  }

  email = '';
  password = '';


  login(): void {
    const loggedIn = this.authService.login(this.email, this.password);
    if (loggedIn) {
      // Reindirizza alla home dopo il login
      // Esempio: this.router.navigate(['/home']);
      alert('login effettuato con successo');
    } else {
      alert('Credenziali non valide!');
    }
    this.email = '';
    this.password = '';
  }

  register(): void {
    const registered = this.authService.register(this.email, this.password);
    if (registered) {
      this.router.navigate(['/login']);
    }
    this.email = '';
    this.password = '';
  }

  forgotPassword(): void {
    // Logica per la gestione del ripristino della password
    alert('Email inviata!');
  }

  mostraUtenti(){
    this.authService.mostraUtenti();
  }



}
