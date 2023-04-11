function mostrarPromocao() {
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outDesconto = document.getElementById("outDesconto");

    //entrada
    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    var desconto = Math.floor(preco * 2);

    //saída
    outMedicamento.textContent = "Promoção de " + medicamento;
    outDesconto.textContent = "Leve 2 por apenas R$: " + desconto.toFixed(2);
}
var btMostrarPromocao = document.getElementById("btMostrarPromocao");
btMostrarPromocao.addEventListener("click", mostrarPromocao);