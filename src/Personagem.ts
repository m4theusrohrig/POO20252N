import { ar } from "@faker-js/faker";
import { Util } from "./Util";


export class Personagem{
    nome: string;
    classe: string;
    raca: string;
    nivel: number;
    arma: string;
    manaAtual: number;
    manaMaxima: number;
    vidaAtual: number;
    vidaMaxima: number;
    poderAtaque: number;

    constructor(nome: string) {
        this.nome = nome;
        this.classe = "";
        this.raca = "";
        this.nivel = 0;
        this.arma = "";
        this.manaAtual = 0;
        this.manaMaxima = 0;
        this.vidaAtual = 0;
        this.vidaMaxima = 0;
        this.poderAtaque = 0;
    }


    equiparArma(nomeArma: string): void {
        this.arma = nomeArma;
        console.log(`${this.nome} equipou a arma: ${this.arma}`)
    }

    treinarPoderAtaque(): void {
        const incrementoDoTreino: number = Util.gerarNumeroAleatorio(5, 15);
        this.poderAtaque += incrementoDoTreino + this.poderAtaque * 1.1;
    }

    subirNivel(): void {
        this.nivel += 1;
        this.vidaMaxima += 10;
        this.manaMaxima += 10;
        this.vidaAtual = this.vidaMaxima;
        this.manaAtual = this.manaMaxima;
    }

    regenerarMana(): void {
        this.manaAtual += 20;
        if (this.manaAtual > this.manaMaxima) {
            this.manaAtual = this.manaMaxima;
        console.log(`${this.nome} regenerou mana! Mana atual: ${this.manaAtual}`);
        }
    }


    estaVivo(){
        return (this.vidaAtual > 0)
    }

}