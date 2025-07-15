// Ativando a animação dos títulos e slogan
document.addEventListener('DOMContentLoaded', () => {
    const pinkCloud = document.querySelector('.h2_pc');
    const BubCofe = document.querySelector('.h2_bc');
    const slogan = document.querySelector('.slogan');

    pinkCloud.classList.add('animar');
    BubCofe.classList.add('animar');
    slogan.classList.add('animar');
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

// Quando o usuário clica em enviar ou pressiona Enter
let etapa = 0;
let dadosCartao = {};

function sendMessage() {
    const text = chatInput.value.trim();
    if (text === '') return;
    addUserMessage(text);
    chatInput.value = '';
    processarMensagemUsuario(text);
    processarMensagensUsuario(text);
}

// Controla o fluxo de perguntas
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
}


// class RoboBase {
//     constructor(perguntas, respostas) {
//         this.perguntas;
//         this.respostas;
//     }
// }

// const respostasSimples = {
//     "oi": "Oi, Que bom te ver por aqui, Como posso ajudá-lo(a) 😊",
//     "olá": "Olá, tudo bem? Como eu posso ajudar você?",
//     "oi, tudo bem?": "Oi, tudo sim! Como posso te ajudar hoje?",
//     "olá, tudo bem?": "Oi, tudo sim! Como posso te ajudar hoje?",
//     "tudo bem?": "Oi, tudo sim! Como posso te ajudar hoje?",
//     "queria tirar uma dúvida": "Claro, pode falar a sua dúvida. Sobre o que seria?",
//     "você pode me ajudar": "Claro que posso! Sobre o que seria a sua dúvida",
//     "como funciona aqui?": "O Pink Cloud BubCófe é uma cafeteria encantadora de Ribeirão Preto. Criamos este espaço digital para que clientes — antigos e novos — possam conhecer nossos produtos, serviços, localização e muito mais! Para explorar tudo, basta clicar nos atalhos acima. Eles vão te levar para as próximas páginas, onde você pode se aventurar pelo nosso universo doce e aconchegante. Se ainda estiver com dúvidas ou não souber por onde começar, é só digitar um '.' e o Queridinho Milton vai te ajudar!",
//     ".": "Olá, caso a sua dúvida seja os atalhos, são os que estão aqui em cima do lado da logo da nossa cafeteria, basta clicar em algum deles, e você estará em outra página para que possa desfrutar e aproveitar do nosso sistema. Caso sua dúvida seja outra, mande um '/' para que eu possa ajudá-lo com outras dicas surpreendentes",
//     "/": "Se a sua dúvida não são os atalhos, poderia me dizer qual é para que eu possa ajudá-lo(a)?",
//     "não sei o que fazer?": "Sem problemas, estou aqui pra isso! Qual a sua dúvida!",
//     "não sei onde clicar": "Sem problemas! Os atalhos principais estão na parte superior da tela, perto da nossa logo. Eles vão te levar para páginas como cardápio, contato, localização e muito mais!",
//     "não sei aonde clicar": "Sem problemas! Os atalhos principais estão na parte superior da tela, perto da nossa logo. Eles vão te levar para páginas como cardápio, contato, localização e muito mais!",
//     "não estou achando nada": "Entendo! Que tal começar pelos atalhos lá em cima da página? Se preferir, me diga o que está procurando e eu te guio!",
//     "nao estou achando nada": "Entendo! Que tal começar pelos atalhos lá em cima da página? Se preferir, me diga o que está procurando e eu te guio!",
//     "nn estou achando nada": "Entendo! Que tal começar pelos atalhos lá em cima da página? Se preferir, me diga o que está procurando e eu te guio!",
//     "nn to achando nada": "Entendo! Que tal começar pelos atalhos lá em cima da página? Se preferir, me diga o que está procurando e eu te guio!",
//     "como vejo o cardápio?": "Basta clicar no atalho 'Produtos' lá no topo da página.",
//     "como vejo o cardapio?": "Basta clicar no atalho 'Produtos' lá no topo da página.",
//     "cardápio?": "Basta clicar no atalho 'Produtos' lá no topo da página.",
//     "cardapio?": "Basta clicar no atalho 'Produtos' lá no topo da página.",
//     "cardápio": "Basta clicar no atalho 'Produtos' lá no topo da página.",
//     "cardapio": "Basta clicar no atalho 'Produtos' lá no topo da página.",
//     "quero voltar pro começo": "Claro! O atalho que leva a página geral é a 'Principal', ela é o primeiro atalho nas outras páginas para que você possa se localizar.",
//     "quero voltar pro inicio": "Claro! O atalho que leva a página geral é a 'Principal', ela é o primeiro atalho nas outras páginas para que você possa se localizar.",
//     "quero voltar pro início": "Claro! O atalho que leva a página geral é a 'Principal', ela é o primeiro atalho nas outras páginas para que você possa se localizar.",
//     "o que vocês vendem?": "Nós oferecemos uma variedade de delícias doces, salgados artesanais e bebidas especiais! Clique no cardápio para ver tudo 😋",
//     "vocês têm café?": "Com certeza! Temos uma seleção deliciosa de cafés quentinhos e especiais. Você pode ver no nosso cardápio ☕",
//     "tem opções veganas?": "Sim! Temos algumas opções pensadas com carinho para o público vegano. Dê uma olhadinha no nosso cardápio!",

// };

// function processarMensagensUsuario(texto) {
//     const chave = texto.toLowerCase();

//     for (const pergunta in respostasSimples) {
//         if (chave.includes(pergunta)) {
//             addBotMessage(respostasSimples[pergunta]);
//             break;
//         }
//     }
// }

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
