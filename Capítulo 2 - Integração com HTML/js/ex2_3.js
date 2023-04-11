function mostrarPromocao() {
    // cria referência aos elementos manipulados pelo programa
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    //Entrada
    // obtém conteúdo dos campos de entrada
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    //Processamento
    // calcula valor da entrada e das parcelas
    var entrada = preco * 0.50;
    var parcela = entrada / 12;

    //Saída
    //altera o conteúdo dos parágrafos de resposta
    outVeiculo.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}
// cria uma referência ao elemento btVerPromocao (botão)
var btVerPromocao = document.getElementById("btVerPromocao");
// registra um evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener("click", mostrarPromocao);


/*
O programa inicia pela criação das variáveis associadas aos elementos da
página. Na sequência, obtêm-se os conteúdos digitados nos campos de
formulário da página HTML. Em seguida, é realizado o cálculo dos
valores a serem apresentados como resposta. E, no final da function, são
apresentados as informações nos respectivos elementos de saída da página
HTML. A propriedade textContent recebe os dados a serem exibidos. E, por 
fim, a forma de referenciar o botão identificado na página e registrar 
um evento associado a esse botão.
*/