export class Utente{

    email: String;
    password: String;
    role?: 'normal' | 'admin';

    constructor(email: String, password: String, role?: 'normal' | 'admin'){
        this.email = email;
        this.password = password;
        this.role = role;
    }
}