document.addEventListener('DOMContentLoaded', function () {
    const img = document.querySelector('.cartao-img');

    img.addEventListener('mouseenter', () => {
        img.classList.add('brilho');
    });

    img.addEventListener('mouseleave', () => {
        img.classList.remove('brilho');
    });
});

// Função do bot
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');

// Alterna entre abrir e fechar a aba do chat
chatToggle.addEventListener('click', () => {
    if (chatWindow.style.display === 'flex') {
        chatWindow.style.display = 'none';
    } else {
        chatWindow.style.display = 'flex';
        chatInput.focus();
        if (chatMessages.children.length === 0) {
            addBotMessage("Olá! Eu sou o Queridinho Milton. Como posso ajudar você?");
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

// Quando o usuário clica em enviar ou pressiona Enter
let etapa = 0;
let dadosCartao = {};

function sendMessage() {
    const text = chatInput.value.trim();
    if (text === '') return;
    addUserMessage(text);
    chatInput.value = '';
    processarMensagemUsuario(text);
}

// Controla o fluxo de perguntas
function processarMensagemUsuario(texto) {
    if (etapa === 0) {
        if(texto.toLowerCase().includes("cartão")) {
            addBotMessage("Claro, vamos fazer o seu cartão! Posso começar as perguntas?");
            etapa = 1;
        } else {
            addBotMessage("Desculpe, não compreendi a sua pergunta. É sobre o cartão?");
        }
    } else if (etapa === 1) {
        if (texto.toLowerCase().includes("ok") || texto.toLowerCase().includes("pode") || texto.toLowerCase().includes("claro")) {
            addBotMessage("Ótimo! Vamos lá. Primeira pergunta: Qual o seu nome completo?");
            etapa = 2;
        } else {
            addBotMessage("Desculpe, não compreendi. Ainda estamos falando do cartão?");
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
}

function addUserMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'user-message';
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatSendBtn.addEventListener('click', sendMessage);

chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
