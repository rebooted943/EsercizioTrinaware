import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  message: string = '';
  messageType: string = '';

  constructor(private authService: AuthService){

  }

  login(){
    this.authService.login(this.username, this.password)
    .subscribe(
      () =>{
        this.message = 'Login effettuato con successo';
        this.messageType = 'Successo';
      },
      error => {
        this.message = 'Login non eseguito';
        this.messageType = 'Errore';
      }

    )

  }

  
  

}
