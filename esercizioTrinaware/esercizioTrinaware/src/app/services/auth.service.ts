import { Injectable } from '@angular/core';
import { UtentiService } from './utenti.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  emailService = '';
  passwordService = '';
  logged: boolean;
  isAdmin: boolean;
  message: String = '';
  
  constructor(private utentiS: UtentiService) { }

  //da implementare
  
  isAuth(): boolean{
    if(this.logged){
      return this.logged;
    } else{
      console.log('non funziona')
      return this.logged;
    }

  }

}