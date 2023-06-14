export class Sede {

    nomeSede : String;
    indirizzoSede : String;
    veicoliDisponibili : {}[];

    constructor(nomeSede: String, indirizzoSede: String, veicoliDisponibili: {}[]){
        this.nomeSede = nomeSede;
        this.indirizzoSede = indirizzoSede;
        this.veicoliDisponibili = veicoliDisponibili;
    }
}