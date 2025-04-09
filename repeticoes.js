function exemploFor () {

for (let contador = 1; contador <= 5; contador++) {
    
    alert(contador);

    } 
}

function exemploDoWhile () {

    let contador = 1;

    while (contador <= 5) {

        console.log(contador);
        contador ++;

    } while (contador <= 5);

}

function basico01 () {

for (let contador = 1; contador <= 10; contador++) {

    alert(contador);

    }
}

function basicoDoWhile () {

    let contador = 1;

    while (contador <= 10) {

        console.log(contador);
        contador ++;

    } while (contador <= 10);
}

function basico02 () {

let numero = prompt("Escolha um numero para mostra a tabuada:")

for (let contador = 1; contador <= 10; contador++) {

    console.log(`${contador} x ${numero} = ${numero * contador}`);

    }
}

function basicoDoWhile02 () {

    let contador = 1;

    while (contador <= 10) {

        console.log(contador * numero);
        contador ++

    } while (contador <= 10);

}

function basico03 () {

    let n = (prompt("Digite um numero N:"));
let soma = 0;

for (let contador = 1; contador <= n; contador++) {
    soma += contador;
}

    console.log(`Numero da soma de todos é: ${soma}`)
}

function intermediario01 () {

    let numero = (prompt("Escolha um numero:"))

    for (let contador = 2; contador <= 50; contador+=2) {
        console.log(contador);
    }

}

function intermediario03 () {

    let numero = prompt("Numero para comecar a contagem regressiva")
    while(numero >= 0) {
        console.log(numero)
        numero--
        }
    }