import { Injectable } from '@angular/core';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  emailService = '';
  passwordService = '';
  logged: boolean;
  isAdmin: boolean;
  message: String = '';
  
  constructor(private db: DbService) { }

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