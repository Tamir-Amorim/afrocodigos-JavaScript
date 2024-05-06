"use strict";
class Calculadora {
    somar(a, b) {
        return a + b;
    }
    subtrair(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (a > b) {
            return a / b;
        }
        else if (a < b) {
            return b / a;
        }
        else {
            return "Impossível dividir por zero";
        }
    }
}
const calculadora = new Calculadora();

//teste
console.log(calculadora.somar(10, 5));
