function isFibonacci(num) {
    let a = 0, b = 1;
    while (a <= num) {
        if (a === num) {
            return `${num} pertence à sequência de Fibonacci.`;
        }
        [a, b] = [b, a + b];
    }
    return `${num} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso
let numero = parseInt(prompt("Informe um número:"));
let resultado = isFibonacci(numero);
console.log(resultado);
