export class Automobile{

    id: Number;
    modello: String;
    marca: String;
    cavalli: Number;
    prezzo: Number;
    sedeId: Number;

    constructor(id: Number, modello: String, marca: String, cavalli: Number, prezzo: Number, sedeId: Number){
        this.id = id;
        this.modello = modello;
        this.marca = marca;
        this.cavalli = cavalli;
        this.prezzo = prezzo;
        this.sedeId = sedeId;
    }

}