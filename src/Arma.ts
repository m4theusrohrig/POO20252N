import { Util } from "./Util";

export class Arma {
    nome: string;
    dano: number;
    tipo: string;

    constructor(nome: string, dano: number, tipo: string) {
        this.nome = nome;
        this.dano = dano;
        this.tipo = tipo;
    }



    atacar(): void {
        console.log(`Atacando com a arma ${this.nome} causando ${this.dano} de dano.`);
    }

    melhorarArma(): void {
        const aumento = Util.gerarNumeroAleatorio(1, 5);
        this.dano += aumento;
        console.log(`A arma ${this.nome} foi melhorada! Dano atual: ${this.dano}`);
    }
}