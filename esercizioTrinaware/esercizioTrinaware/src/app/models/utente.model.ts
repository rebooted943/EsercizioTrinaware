export class Utente{

    email: String;
    password: String;
    tipo: String;

    constructor(email: String, password: String, tipo: String){
        this.email = email;
        this.password = password;
        this.tipo = tipo;
    }
}