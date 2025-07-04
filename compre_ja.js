// Mostrar opções de pagamento quando um plano for selecionado
function mostrarOpcoes() {
    const divAparecer = document.querySelector('#pagamento-opcoes');
    divAparecer.style.display = 'block';
}

document.querySelectorAll('input[name="plano"]').forEach(radio => {
    radio.addEventListener('change', mostrarOpcoes);
});


// Função principal que valida e envia para o WhatsApp
function enviaFormulario() {
    const inputCpf = document.getElementById('cpf').value.trim();
    const confirma = document.querySelector('.adicional_confirmação');

    const radioPlanoSelecionado = document.querySelector('input[name="plano"]:checked');
    const radioPagamentoSelecionado = document.querySelector('input[name="pagamento"]:checked');
    const plano = radioPlanoSelecionado ? radioPlanoSelecionado.value.trim() : '';
    const pagamento = radioPagamentoSelecionado ? radioPagamentoSelecionado.value.trim() : '';

    const textos = Array.from(document.querySelectorAll('input[type="text"]')).map(input => input.value.trim());
    const camposVazios = textos.includes('') || !inputCpf || !plano || !pagamento;

    if (camposVazios) {
        confirma.innerText = "Por favor, preencha todos os campos antes de continuar.";
        return;
    }

    const numero = 5516999999999;
    const mensagem = `Caro cliente, assim que a gestora confirmar o seu cartão, receberá um link para a confirmação do cartão, com todos os dados para que possamos dar continuação.
    E se, estiver tudo certo, logo em seguida, receberá uma notificação sobre o rastreamento do mesmo.

    Agradeço pela escolha, e qualquer dúvida nos chame pelo nosso contato na página de acesso ou venha nos visitar. Ficaremos felizes com a sua presença.

    CPF: ${inputCpf}
    Plano escolhido: ${plano}
    Forma de pagamento: ${pagamento}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

// Adiciona o evento ao botão após o carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    const btn_avancar = document.querySelector('#btn_avançar');
    if (btn_avancar) {
        btn_avancar.addEventListener('click', function (event) {
            event.preventDefault();
            enviaFormulario();
        });
    }
});
