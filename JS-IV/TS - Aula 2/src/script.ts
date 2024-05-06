class Calculadora {

    somar(a: number, b: number): number {
        return a + b;
    }

    subtrair(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number | string {
        if (a > b) {return a / b}
        else if (a < b) {return b / a}
        else {return "Impossível dividir por zero";}         
    }
}

const calculadora = new Calculadora()
//teste
console.log(calculadora.somar(10,5))
