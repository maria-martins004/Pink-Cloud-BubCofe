// Para animar a frase
document.addEventListener('DOMContentLoaded', () => {
    const h1_animado = document.querySelector('.h1_animado');

    h1_animado.classList.add('animar');
});

// Para enviar uma mensagem no whats
document.addEventListener('DOMContentLoaded', () => {
    const btnMsg = document.querySelector('.enviar_mensagem');
    
    if(btnMsg) {
        btnMsg.addEventListener('click', () => {
            const numero = 5516999999999;
            let mensagem = `Olá, como poderíamos ajudar?`;
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
        });
    } else {
        console.warn('Erro ao Mandar Mensagem!!!')
    }
})

// Criando um mapa a partir de um link na internet
const map = L.map('map').setView([-21.1767, -47.8208], 16);
const layer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
});

layer.addTo(map);

const marker = L.marker([-21.1767, -47.8208], 16)
marker.addTo(map);