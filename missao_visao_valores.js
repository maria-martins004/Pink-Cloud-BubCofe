// Animação do fundo com nuvem deslizando lentamente para a esquerda
const fundo = document.querySelector('.fundo_nuvem');
let posicaoX = 0;
const velocidade = 0.5;
const larguraImagem = 220;

const intervalo = setInterval(() => {
    posicaoX -= velocidade;
    if (posicaoX <= -larguraImagem) {
        posicaoX = -larguraImagem;
        clearInterval(intervalo);
    }
    fundo.style.backgroundPosition = `${posicaoX}px 0`;
}, 20);

//------------------------------------------------------------------------------------------------------------------------------------------------//

// Faz o esboço rosa surgir com animação ao rolar a página
document.addEventListener('DOMContentLoaded', function () {
    const esboco = document.querySelector('.nossa_historia');

    function verificarEsboco() {
        const posicao = esboco.getBoundingClientRect();
        if (posicao.top < window.innerHeight - 220) {
            esboco.classList.add('aparecer');
            window.removeEventListener('scroll', verificarEsboco);
        }
    }

    window.addEventListener('scroll', verificarEsboco);
    verificarEsboco(); // dispara se já estiver visível ao carregar
});

// Função de Responsividade para fazer parágrafo desaparecer e deixar apenas o span de todos os direitos reservados
document.addEventListener('DOMContentLoaded', function () {
    const p = document.querySelector('#paragrafo-desaparece');
    const mediaQuery = window.matchMedia ('(max-width: 668px)');

    function removerp(pparagrafo) {
        if (pparagrafo.matches) {
            p.style.display = "none";
        } else {
            p.style.display = "flex";
        }
    }
    removerp(mediaQuery);
    
    mediaQuery.addEventListener('change', removerp);
});
