
function basico01() {

    // debugger;

    let numero = prompt("Qual sua idade?:")

    if (numero >= 18) {

        alert("maior de idade")

    } else {

        alert("menor de idade")

    }
}

function basico02() {

    let numero = prompt("Insira um número de sua escolha:")

    if (numero >= 0) {

        alert("Número Positivo!")

    } else {

        alert("Número Negativo!")
    }
}

function basico03() {

    let nota = prompt("Qual a nota do Aluno?:")

    if (nota >= 60) {

        alert("Passou!")

    } else {

        alert("Vou nem fala!")

    }
}

function basico04() {

    let numero = prompt("Digite um numero:")

    if (numero > 0) {

        alert("Verdade")

    } else {

        if (numero < 0) {

            alert("Mentira")

        } else {

            alert("é zero")

        }
    }
}

function basico05() {

    let idade = prompt("Qual sua idade:")

    if (idade >= 18) {

        alert("Adulto")

    } else { }

    if (idade >= 13 && idade <= 17) {

        alert("Adolescente")

    } else {

        if (idade >= 0 && idade <= 12) {

            alert("Criança")
        }

    }
}

function basico06() {

    let numero = prompt("Digite um numero divisivel por 2:")

    if (numero % 2 == 0) {

        alert("certo")

    } else {

        alert("errado")

    }
}

function intermediario01() {

    let num1 = Number(prompt("Escolha um numero:"))
    let operacao = prompt("Qual operacao?:")
    let num2 = Number(prompt("Escolha mais um numero:"))
    
    // if (operacao === "+") {
    //     alert(num1 + num2)
    // } else if (operacao === "-") {
    //     alert(num1 - num2)
    // } else if (operacao === "*") {
    //     alert(num1 * num2)
    // } else if (operacao === "/") {
    //     alert(num1 / num2)
    // }

    switch (operacao) {
        case "+":
            resutado = num1 + num2
            break;
        case "-":
            resutado = num1 - num2
            break;
        case "*":
            resutado = num1 * num2
            break;
        case "/":
            resutado = num1 / num2
            break;
            
    
        default:
            alert("Não Pode!")
            break;
    }
    
}

function intermediario03() {

    let valor = prompt("Qual o Valor da compra?:")
    let desconto = (10)

    
if (valor >= 100){
    
    alert( valor - desconto )

} else {

    alert(valor)
}
 }
