import { Personagem } from "./Personagem";
import Prompt from "prompt-sync";

const teclado = Prompt();

const p: Personagem = new Personagem("Edécio");
p.classe = "Monge";
p.raca = "Morto-vivo";
p.nivel = Math.floor(1+ Math.random() * 99);
p.arma = "Sem Arma";
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;


while (true) {

console.log("+-----------MENU----------------+");
console.log("|1. Treinar Poder de Ataque     |");
console.log("|2. Ver status                  |");
console.log("|3. Checar se personagem vive   |");
console.log("|4. Subir Nível                 |");
console.log("|5. Regenerar Mana              |");
console.log("|6. Equipar Arma                |");
console.log("|9. Sair                        |");
console.log("+-------------------------------+");

const escolha: number = +teclado("Escolha uma opção do menu: ")
if(escolha === 9) {
    break
}
switch (escolha) {
    case 1:
        treinarPoderAtaque(p);
        break;

    case 2:
        console.table(p);
        break;

    case 3:
        console.log(p.estaVivo()? "Personagem está vivo!": "Personagem está morto!");
        break;

    case 4:
        p.subirNivel();
        break;

    case 5:
        p.regenerarMana();
        break;

    case 6:
        const nomeArma = teclado("Digite a arma que deseja equipar: ");
        p.equiparArma(nomeArma);
        break;
    default:
        console.log("Opção inválida.");
        break;
}

}



function treinarPoderAtaque(person: Personagem): void {
    person.treinarPoderAtaque();
}