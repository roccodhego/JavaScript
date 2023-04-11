function mostrarPreco() {
    // cria referência aos elementos da página
    var inBuffetQuilo = document.getElementById("inBuffetQuilo");
    var inConsumoCliente = document.getElementById("inConsumoCliente");
    var outValorAPagar = document.getElementById("outValorAPagar");

    // obtém conteúdo dos campos de entrada
    var buffeQuilo = Number(inBuffetQuilo.value);
    var consumoCliente = Number(inConsumoCliente.value);

    // calcula valor a ser pago
    var valorAPagar = (buffeQuilo / 1000) * consumoCliente;

    // altera o conteúdo da linha de resposta
    outValorAPagar.textContent = "Valor a pagar R$: " + valorAPagar.toFixed(2);
}
// cria referência ao elemento btCalcular
var idCalcularPreco = document.getElementById("idCalcularPreco");
// registra um evento associado ao botão, para carregar uma função
idCalcularPreco.addEventListener("click", mostrarPreco);

/*
A função JavaScript inicia pela referência aos elementos da página. Após,
obtêm-se os valores informados nos campos inQuilo e inConsumo. Como
os valores estão em grandezas diferentes (quilo e gramas), é necessário
converter quilo para gramas (quilo/1000). Esse valor é então multiplicado
pelo consumo do cliente. O próximo passo é apresentar o valor a ser pago
pelo cliente. Observe a ocorrência das etapas de entrada (obtenção do
preço do quilo e consumo do cliente), processamento (cálculo do valor) e
saída (exibição do valor a pagar).
*/
