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

// Função do Bot
const chatToggle = document.querySelector('#chat-toggle');
const chatWindow = document.querySelector('#chat-window');
const chatMessages = document.querySelector('#chat-messages');
const chatInput = document.querySelector('#chat-input');
const chatSendBtn = document.querySelector('#chat-send-btn');
// console.log(chatToggle, chatWindow, chatMessages, chatInput, chatSendBtn);

// Alterna entre abrir e fechar a aba do chat
chatToggle.addEventListener('click', () => {
    if(chatWindow.style.display === 'flex') {
        chatWindow.style.display = 'none';
    } else {
        chatWindow.style.display = 'flex';
        chatInput.focus();
        if(chatMessages.children.length === 0) {
            addBotMessage("Olá! Eu sou o Milton. Bem-vindo ao Pink Cloud! Como posso te ajudar?");
        }
    }
});

// Função para adicionar mensagem do bot
function addBotMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'bot-message';
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para adicionar mensagem do usuário
function addUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'user-message';
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Quando o usuário clica em enviar ou pressiona 'Enter'
let etapa = 0;
let dadosCartao = {};

function sendMessage() {
    const text = chatInput.value.trim();
    if(text === '') return;
    addUserMessage(text);
    chatInput.value = '';

    if (etapa > 0 || text.toLowerCase().includes("cartão")) {
        processarMensagemUsuario(text);
    } else {
        processarMensagensUsuario(text);
    }
}

// Controla fluxo de perguntas
// Fluxo do Cartão
function processarMensagemUsuario(texto) {
    if (etapa === 0) {
        if (texto.toLowerCase().includes("cartão")) {
            addBotMessage("Claro, vamos fazer o seu cartão! Posso começar as perguntas?");
            etapa = 1;
        }
    } else if (etapa === 1) {
        if (texto.toLowerCase().includes("ok") || texto.toLowerCase().includes("pode") || texto.toLowerCase().includes("claro")) {
            addBotMessage("Ótimo! Vamos lá. Primeira pergunta: Qual o seu nome completo?");
            etapa = 2;
        }
    } else if (etapa === 2) {
        dadosCartao.nome = texto;
        addBotMessage("Perfeito, " + dadosCartao.nome + "! Agora, poderia me falar o seu CPF?");
        etapa = 3;
    } else if (etapa === 3) {
        dadosCartao.cpf = texto;
        addBotMessage("Qual a sua data de nascimento?");
        etapa = 4;
    } else if (etapa === 4) {
        dadosCartao.nascimento = texto;
        addBotMessage("E para finalizar, o seu endereço, " + dadosCartao.nome + "?");
        etapa = 5;
    } else if (etapa === 5) {
        dadosCartao.endereco = texto;
        addBotMessage("Dados concluídos com sucesso, " + dadosCartao.nome + "! Agora, para finalizar, iremos enviar um link para você no email, para a confirmação de todos os seus dados, além de escolher a forma de pagamento para o nosso cartão. Agradecemos pela escolha e até já! 😊");
        etapa = 0;
        dadosCartao = {};
    }

    if (etapa < 0 || etapa > 5) {
        addBotMessage("Desculpe, não entendi. Pode repetir?");
    }
}

// Fluxo de respostas mais simples..., até o momento
const prespostas = {
    "oi": "Oi, Que bom te ver por aqui, Como posso ajudá-lo(a) 😊",
    "olá": "Olá, tudo bem? Como eu posso ajudar você?",
    "oi, tudo bem?": "Oi, tudo sim! Como posso te ajudar hoje?",
    "olá, tudo bem?": "Oi, tudo sim! Como posso te ajudar hoje?",
    "tudo bem?": "Oi, tudo sim! Como posso te ajudar hoje?",
    "queria tirar uma dúvida": "Claro, pode falar a sua dúvida. Sobre o que seria?",
    "você pode me ajudar": "Claro que posso! Sobre o que seria a sua dúvida",
    "como funciona aqui?": "O Pink Cloud BubCófe é uma cafeteria encantadora de Ribeirão Preto. Criamos este espaço digital para que clientes — antigos e novos — possam conhecer nossos produtos, serviços, localização e muito mais! Para explorar tudo, basta clicar nos atalhos acima. Eles vão te levar para as próximas páginas, onde você pode se aventurar pelo nosso universo doce e aconchegante. Se ainda estiver com dúvidas ou não souber por onde começar, é só digitar um '.' e o Queridinho Milton vai te ajudar!",
    ".": "Olá, caso a sua dúvida seja os atalhos, são os que estão aqui em cima do lado da logo da nossa cafeteria, basta clicar em algum deles, e você estará em outra página para que possa desfrutar e aproveitar do nosso sistema. Caso sua dúvida seja outra, mande um '/' para que eu possa ajudá-lo com outras dicas surpreendentes",
    "/": "Se a sua dúvida não são os atalhos, poderia me dizer qual é para que eu possa ajudá-lo(a)?",
    "não sei o que fazer?": "Sem problemas, estou aqui pra isso! Qual a sua dúvida!",
    "não sei onde clicar": "Sem problemas! Os atalhos principais estão na parte superior da tela, perto da nossa logo. Eles vão te levar para páginas como cardápio, contato, localização e muito mais!",
    "não sei aonde clicar": "Sem problemas! Os atalhos principais estão na parte superior da tela, perto da nossa logo. Eles vão te levar para páginas como cardápio, contato, localização e muito mais!",
    "não estou achando nada": "Entendo! Que tal começar pelos atalhos lá em cima da página? Se preferir, me diga o que está procurando e eu te guio!",
    "como vejo o cardápio?": "Basta clicar no atalho 'Produtos' lá no topo da página.",
    "cardápio?": "Basta clicar no atalho 'Produtos' lá no topo da página.",
    "cardápio": "Basta clicar no atalho 'Produtos' lá no topo da página.",
    "quero voltar pro começo": "Claro! O atalho que leva a página geral é a 'Principal', ela é o primeiro atalho nas outras páginas para que você possa se localizar.",
    "quero voltar pro início": "Claro! O atalho que leva a página geral é a 'Principal', ela é o primeiro atalho nas outras páginas para que você possa se localizar.",
    "o que vocês vendem?": "Nós oferecemos uma variedade de delícias de bebidas especiais e artesanais! Clique no cardápio para ver tudo 😋",
    "vocês têm café?": "Com certeza! Temos uma seleção deliciosa de cafés quentinhos e especiais. Você pode ver no nosso cardápio ☕",
    "tem opções veganas?": "Sim! Temos algumas opções pensadas com carinho para o público vegano. Dê uma olhadinha no nosso cardápio!",
    "como que funciona os eventos?": "Os eventos são pensados para quem deseja fazer uma surpresa especial para alguém!💕 Organizamos eventos de café da manhã com pães e doces deliciosos, além de surpresas com milkshakes decorativos. Inclusive, temos uma promoção especial para milkshakes em casamentos! 🥂 Ficamos à disposição para tornar seu momento ainda mais inesquecível. Para agendar um evento com a gente, é só enviar uma mensagem para a nossa gerente. Você responderá algumas perguntas, e ela te retornará com o orçamento certinho. 💌",
    "aonde eu mando mensagem?":"Você pode seguir pelo atalho 'Eventos' no topo da página — ele vai te redirecionar para o lugar certo! Assim que estiver na página, role para baixo e você verá um botão para enviar a mensagem e solicitar seu orçamento. Qualquer dúvida, estou por aqui! 💬✨",
    "onde eu mando mensagem?":"Você pode seguir pelo atalho 'Eventos' no topo da página — ele vai te redirecionar para o lugar certo! Assim que estiver na página, role para baixo e você verá um botão para enviar a mensagem e solicitar seu orçamento. Qualquer dúvida, estou por aqui! 💬✨",
};

function processarMensagensUsuario(texto) {
    const chave = texto.toLowerCase();
    let encontroupresposta = false;

    for (const pergunta in prespostas) {
        if (chave.includes(pergunta)) {
            addBotMessage(prespostas[pergunta]);
            encontroupresposta = true;
            break;
        }
    }

    if (!encontroupresposta) {
        addBotMessage("Desculpe, não entendi. Pode repetir, por favor?");
    }
}

// Função para adicionar mensagem do usuário
function addUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'user-message';
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Evento de click do botão
chatSendBtn.addEventListener('click', sendMessage);

// Evento para quando o usuário pressionar o botão de enter, enviar a mensagem
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});