document.addEventListener('DOMContentLoaded', function () {
    const imgCartao = document.querySelector('.fundo_cartao_clubNuvem');

    function removerFotoCartao() {
        const posicao = imgCartao.getBoundingClientRect();
        if (posicao.top < window.innerHeight - 125) {
            imgCartao.classList.add('remover');
            window.removeEventListener('scroll', )
        }
    }
})