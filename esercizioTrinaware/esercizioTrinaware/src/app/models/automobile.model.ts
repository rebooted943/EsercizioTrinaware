export class Automobile{

    id: number;
    modello: String;
    marca: String;
    cavalli: number;
    prezzo: number;
    sedeId: number;

    constructor(id: number, modello: String, marca: String, cavalli: number, prezzo: number, sedeId: number){
        this.id = id;
        this.modello = modello;
        this.marca = marca;
        this.cavalli = cavalli;
        this.prezzo = prezzo;
        this.sedeId = sedeId;
    }

}