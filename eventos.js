// Para enviar uma mensagem no WhatsApp
document.addEventListener('DOMContentLoaded', () => {
    const btnMsg = document.querySelector('#btn');

    if (btnMsg) {
        btnMsg.addEventListener('click', () => {
            const numero = 5516999999999;
            let mensagem =
                "Olá, como seria o evento que você gostaria de realizar?\n" +
                "Qual seria a data?\n" +
                "Deseja que o evento seja na cafeteria ou em outro local?\n" +
                "Qual o estilo ou tema desejado?\n" +
                "Quais itens gostaria de incluir no evento (coloque um X na frente dos desejados)?\n" +
                "- Café da manhã personalizado\n" +
                "- Bolo decorado\n" +
                "- Doces variados\n" +
                "- Milkshakes decorativos\n" +
                "- Salgados\n" +
                "- Bebidas quentes/frias\n" +
                "- Decoração personalizada\n" +
                "Deseja adicionar uma mensagem personalizada ou cartão especial?\n" +
                "Há alguma restrição alimentar ou preferência (vegano, sem lactose, etc.)?\n" +
                "O evento seria uma surpresa para alguém?\n" +
                "Observações:\n\n" +
                "Obrigada pela escolha de nosso estabelecimento para o evento, responderemos em breve!!!";
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
        });
    } else {
        console.warn('Erro ao Mandar Mensagem!!!')
    }
})
