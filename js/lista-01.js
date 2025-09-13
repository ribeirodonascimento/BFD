1- Variáveis e tipos
Crie duas variáveis, uma let e uma const, atribuindo valores de tipos diferentes (string e number). Exiba no console o tipo de cada uma usando typeof.

let nome = "wemerson";
const idade = 37;
console.log(typeof nome," e ",typeof idade);

2- Entrada e decisão simples
Crie uma função que receba um número e use if para verificar se ele é positivo, negativo ou zero. Retorne uma string com o resultado.

function verifica(numero){
    if(numero > 0){
        console.log("O número é positivo.");
    }else if(numero < 0){
        console.log("O número é negativo.");
    }else{
        console.log("O número é 0.");
    }
}
verifica(0);
verifica(1);
verifica(-1);

3- Par ou ímpar
Escreva uma função que receba um número e retorne "Par" se for par ou "Ímpar" se for ímpar, usando o operador % e if/else.

function parImpar(numero){
    if(numero % 2 == 0){
        console.log("O número é par.");
    }else{
        console.log("O número é ímpar.");
    }
}
parImpar(1);
parImpar(2);

4- Laço for básico
Use um for para imprimir no console todos os números de 1 a 10.

for(let i = 1; i < 11; i++){
    console.log(i);
}

5- Soma com for
Crie uma função que receba um número n e retorne a soma de todos os números de 1 até n usando um laço for.

function somar(numero){
    let soma = 0;
    for(let i = 1; i <= numero; i++){
        soma += i;
    }
    console.log(soma)
} 
somar(3)

6- Laço while
Usando while, imprima no console os números de 10 até 1 em ordem decrescente.

let numero = 10;
while(numero >= 1){
    console.log(numero);
    numero--;
}

7- Tabuada
Crie uma função que receba um número e exiba no console a tabuada desse número de 1 a 10 usando for.

function tabuada(numero){
    for(let i = 1; i < 11; i++){
        let resultado = numero * i;
         console.log(`${numero} x ${i} = ${resultado}` );
    }
}tabuada(5)

8- Decisão com switch
Escreva uma função que receba o nome de um dia da semana (em minúsculas) e use switch para retornar se é dia útil ou fim de semana.

function diaDaSemana(dia) {
    switch (dia) {
        case "segunda":
        case "terca":
        case "quarta":
        case "quinta":
        case "sexta":
            return "É um dia util.";
        case "sabado":
        case "domingo":
            return "É fim de semana";
    }
}
console.log(diaDaSemana("domingo"));

9- Função com múltiplos parâmetros
Crie uma função que receba nome, idade e cidade, e retorne uma frase formatada: "Meu nome é X, tenho Y anos e moro em Z.".

function meusDados(nome, idade, cidade) {
    console.log(`Meu nome é ${nome}, tenho ${idade} ano(s) e moro em ${cidade}.`)
} meusDados("Wemerson", 37, "Recife")

10- Combinação de estruturas
Crie uma função que receba um array de números e retorne apenas os números pares, usando for e if.

function numerosPares(numeros){
    let numeroPar = [];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            numeroPar.push(numeros[i]);
        }
    }
    return numeroPar;
}
console.log(numerosPares([10,15,22,27,56,97]));