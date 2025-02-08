let input = ""
let input2 = ""
let operacao = ""

function apertaBotao(number) {
   input += number
   atualizaDisplay()
}

function limpa() {
    input = ""
    input2 = ""
    operacao = ""
    atualizaDisplay()
}

function operacaoNum(op){
    if (input === "") {
        return
    }
    if (input2 !== "") {
        calculo()
    }

    operacao = op
    input2 = input
    input = ""
}

function calculo() {
    let result
    const num1 = parseFloat(input2)
    const num2 = parseFloat(input)

    if (isNaN(num1) || isNaN (num2)) {return}

    switch (operacao) {
        case "+" :
            result = num1 + num2 
        break
        case "-" :
            result = num1 - num2
        break
        case "x" :
            result = num1 * num2
        break
        case "÷" : 
        result = num1 / num2
        default:
        return
    }

    input = result
    input2 = ""
    operacao = ""
    atualizaDisplay()

}

function atualizaDisplay() {
    document.getElementById("display").value = input
}

