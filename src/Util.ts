import { fakerPT_BR as faker } from '@faker-js/faker';
import { Arma } from './Arma';

// Exemplo de definição do array de armas disponíveis
const armasDisponiveis: Arma[] = [
    new Arma('Espada', 10, 'Corte'),
    new Arma('Arco', 7, 'Flecha'),
    new Arma('Machado', 12, 'Corte'),
    new Arma('Cajado', 5, 'Magia')
];

export class Util{

    static gerarNumeroAleatorio(minimo: number, maximo: number): number{
        return minimo + Math.round (Math.random() * (maximo - minimo))
    }

    static gerarArma(): Arma {
        if (armasDisponiveis.length === 0) {
            throw new Error("Nenhuma arma disponível.");
        }
        const indice = Util.gerarNumeroAleatorio(0, armasDisponiveis.length - 1);
        const randomArma = armasDisponiveis[indice];
        if (!randomArma) {
            throw new Error("Índice de arma inválido.");
        }
        return randomArma;
    }

    static gerarNome(): string {
        const randomName = faker.person.firstName();
        return randomName;
    }
    
    static gerarEmail(nomeDoUsuario: string){
        return faker.internet.email({firstName: nomeDoUsuario});
    }

}

for (let index = 0; index < 10; index++) {
   const nome = Util.gerarNome();
   const email = faker.internet.email({ firstName: nome });
  // console.log(nome, email);
}   