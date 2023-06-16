import { Injectable } from '@angular/core';
import { UtentiService } from './utenti.service';
import { Utente } from '../models/utente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  utenti: Utente[] = this.utentiS.utenti;

  emailService = '';
  passwordService = '';
  loggedIn = false;
  isAdmin: boolean;
  message: String = '';
  
  constructor(private utentiS: UtentiService) {
    // this.utenti = this.utentiS.utenti;
  }
  
  login(email: string, password: string): boolean {
    console.log('login auth service');
    console.log(this.utenti);

    this.utentiS.getUtenti().subscribe(responseDati => {
      this.utenti = responseDati;
      console.log('utenti in authservice');
      
      console.log(this.utenti);
    });
    
    
    const utente = this.utenti.find(u => u.email === email && u.password === password);
    if (utente) {
      this.loggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(utente));
      return true;
    }
    return false;
  } 

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getCurrentUser(): Utente | null {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }

  mostraUtenti(){
    console.log(this.utenti);
  }

  register(email: string, password: string): boolean {
    const existingUser = this.utenti.find(u => u.email === email);
    if (existingUser) {
      alert('L\'utente esiste già!');
      return false;
    }
    const newUser: Utente = { email, password, role: 'normal'};
    this.utenti.push(newUser);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return true;
  }

}