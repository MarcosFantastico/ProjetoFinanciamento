const button = window.document.querySelector('input#calcular');
const resultado = window.document.getElementById('result');


function financiamento(){
    const nome = window.document.getElementById('nome').value;
    const renda_mensal = parseFloat(window.document.querySelector('input#renda_mensal').value);
    var valor_do_bem = parseFloat(window.document.querySelector('input#valor_do_bem').value);
    const valor_entrada = parseFloat(window.document.querySelector('input#valor_entrada').value);
    const taxa_juros = parseFloat(window.document.querySelector('input#taxa_jurus').value);
    const prestacoes = parseInt(window.document.querySelector('input#prestacoes').value);

    
    valor_do_bem = valor_do_bem - valor_entrada;

    const financiamento = (valor_do_bem*(1 + (taxa_juros/100))**prestacoes*(taxa_juros/100)/((1+ (taxa_juros/100))**prestacoes - 1)).toFixed(2)

    const renda_30_porcento = parseFloat(renda_mensal) * 0.3;


    if (renda_30_porcento > financiamento)

    {
    resultado.innerHTML = `<p>Olá ${nome}, Parabéns seu financiamento foi aprovado! o valor de 30% de sua renda mensal é: R$${renda_30_porcento}. As prestações do seu fianciamento são de: R$${financiamento}</p>`;
    }
    else
    {
        resultado.innerHTML = `<p>Olá ${nome}! Infelizmente você não consiguirá realizar o financiamento porque 30% de sua renda mensal é: R$${renda_30_porcento} e as prestações são de: R$${financiamento}`
    }

}
button.addEventListener('click', financiamento);