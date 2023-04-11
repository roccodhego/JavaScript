function mostrarPromocao() {
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outProduto = document.getElementById("outProduto");
    var out3Produto = document.getElementById("out3Produto");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    var desconto = (preco * 50) / 100;
    var promocao = (preco * 3) - desconto;


    outProduto.textContent = produto + " - Promoção: Leve 3 por R$: " + promocao.toFixed(2);
    out3Produto.textContent = "O 3º produto custa apenas R$: " + desconto.toFixed(2);
}
var btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", mostrarPromocao);
