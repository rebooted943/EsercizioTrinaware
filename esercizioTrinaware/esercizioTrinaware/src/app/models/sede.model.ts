export class Sede {

    id: number;
    nomeSede: String;
    indirizzoSede: String;
    veicoliDisponibili: {}[];

    constructor(id: number, nomeSede: String, indirizzoSede: String, veicoliDisponibili: {}[]) {
        this.id = id;
        this.nomeSede = nomeSede;
        this.indirizzoSede = indirizzoSede;
        this.veicoliDisponibili = veicoliDisponibili;
    }
}