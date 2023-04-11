function CalcularValorPagar() {
    var inValorPor15Min = document.getElementById("inValorPor15Min");
    var inUsoCliente = document.getElementById("inUsoCliente");
    var outValorAPagar = document.getElementById("outValorAPagar");

    var valorPor15Min = Number(inValorPor15Min.value);
    var usoCliente = Number(inUsoCliente.value);

    var valor = usoCliente / 15;
    var valor_para_cobrar = Math.ceil(valor * valorPor15Min) + 1;

    outValorAPagar.textContent = "Valor a Pagar RS: " + valor_para_cobrar.toFixed(2);
}
var btCalcularValor = document.getElementById("btCalcularValor");
btCalcularValor.addEventListener("click", CalcularValorPagar);

