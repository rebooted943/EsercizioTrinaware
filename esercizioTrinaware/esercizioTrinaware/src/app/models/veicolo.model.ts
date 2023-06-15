export class Veicolo{

    modello: String;
    marca: String;
    cavalli: Number;
    prezzo: Number;
    sedeId: Number;

    constructor(modello: String, marca: String, cavalli: Number, prezzo: Number, sedeId: Number){
        this.modello = modello;
        this.marca = marca;
        this.cavalli = cavalli;
        this.prezzo = prezzo;
        this.sedeId = sedeId;
    }

}