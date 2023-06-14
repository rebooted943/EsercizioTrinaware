import { Injectable } from '@angular/core';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {

  emailService = '';
  passwordService = '';
  loggato: boolean;
  isAdmin: boolean;
  messaggio: String = '';
  
  constructor(private db: DbService) { }

  logga(email: string, password: string){
    
    

  }

}