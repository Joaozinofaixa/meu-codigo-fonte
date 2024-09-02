function countLetterA(string) {
    let count = (string.match(/a/gi) || []).length;
    return `A letra 'a' ocorre ${count} vezes na string.`;
}

// Exemplo de uso
let texto = prompt("Informe uma string:");
let resultado = countLetterA(texto);
console.log(resultado);
