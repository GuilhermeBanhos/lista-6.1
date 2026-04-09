function troco() {
    let compra = Number(prompt("Valor da compra:"));
    let pago = Number(prompt("Valor pago:"));

    if (pago < compra) {
        alert("Valor insuficiente!");
        return;
    }

    let troco = pago - compra;

    let notas = [50, 20, 10, 5, 2, 1];
    let resultado = "Troco: R$ " + troco + "\n";

    for (let nota of notas) {
        let qtd = Math.floor(troco / nota);
        resultado += "Notas de " + nota + ": " + qtd + "\n";
        troco %= nota;
    }

    alert(resultado);
}

function funcao() {
    let x = Number(prompt("Digite um valor:"));
    let resultado = x * 2 + 3;
    alert("Resultado: " + resultado);
}

function imc() {
    let peso = Number(prompt("Peso (kg):"));
    let altura = Number(prompt("Altura (m):"));

    let imc = peso / (altura * altura);

    let situacao;

    if (imc < 20) situacao = "Abaixo do peso";
    else if (imc < 25) situacao = "Normal";
    else if (imc < 30) situacao = "Sobrepeso";
    else if (imc < 35) situacao = "Obesidade grau I";
    else if (imc < 40) situacao = "Obesidade grau II";
    else situacao = "Obesidade grau III";

    alert("IMC: " + imc.toFixed(2) + "\n" + situacao);
}

function produto() {
    let codigo = Number(prompt("Digite o código do produto:"));

    let preco;

    if (codigo === 1) preco = 99.99;
    else if (codigo === 2) preco = 103.89;
    else if (codigo === 3) preco = 49.98;
    else if (codigo === 4) preco = 89.72;
    else if (codigo === 5) preco = 97.35;
    else {
        alert("Código inválido");
        return;
    }

    alert("Preço: R$ " + preco);
}

function folha() {
    let codigo = Number(prompt("Código do funcionário:"));
    let horas = Number(prompt("Horas trabalhadas:"));

    let valorHora;

    if (codigo === 1) valorHora = 45.78;
    else if (codigo === 2) valorHora = 60.00;
    else if (codigo === 3) valorHora = 38.99;
    else if (codigo === 4) valorHora = 45.78;
    else if (codigo === 5) valorHora = 45.78;
    else {
        alert("Código inválido");
        return;
    }

    let salario = horas * valorHora;

    alert("Salário: R$ " + salario.toFixed(2));
}