/*
DEPÓSITO
- Não pode depositar valores negativos
- Não pode depositar valores zero
- Se depositar positivo, deve aumentar o saldo

SAQUE
- Não pode sacar valores negativos
- Deve subtrair o valor sacado do saldo
- Não pode sacar valores maiores que o saldo
- Não pode sacar valores zero
*/

import { describe, expect, it } from "@jest/globals";
import { Conta } from "./Conta";

describe("Quando depositar", () => {
    it("Deve aceitar depósito de um valor positivo", () => {
        //Cenário
        const conta: Conta = new Conta();
        conta.saldo = 0;

        //Execução
        conta.depositar(100);

        //Validação
        expect(conta.saldo).toBe(100);
    })

    it("Nâo deve ser possível depositar um valor negativo", () => {
        //Cenário
        const conta: Conta = new Conta();
        conta.saldo = 100;

        //Ação
        conta.depositar(-50);

        //Validação
        expect(conta.saldo).toBe(100);

    })

});

describe("Quando sacar", () => {
    it("Não deve sacar valor negativo", () => {
        const conta: Conta = new Conta();
        conta.saldo = 100;

        expect( () => { conta.sacar(-50)}).toThrow("inválido");

       // conta.sacar(-50);

       // expect(conta.saldo).toBe(100);
    })
})