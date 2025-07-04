// Cardapio Especial
class ProdutosCardapioEspecial {
    constructor(emoji, produto, descricao, preco) {
        this.emoji = emoji;
        this.produto = produto;
        this.descricao = descricao;
        this.preco = preco;
    }

    gerarHTML_Cardapio_Especial() {
        return `
         <h3> <span style="font-size: 1.6rem;">${this.emoji}</span> ${this.produto}</h3>
         <p class="descricao_cardapio_especial">
         ${this.descricao} <br><br>
         <strong>${this.preco}</strong>
        `;
    }
}

const ProdutosEspeciais = [
    new ProdutosCardapioEspecial("🌈", "Milkshake de Arco-Íris", "Um milkshake super colorido, feito com camadas de sabores frutados e finalizado com chantilly e confetes. Perfeito pra quem ama um toque de cor e diversão!", "R$ 25,00"),
    new ProdutosCardapioEspecial("🍓", "Bubble de Morango", "Chá geladinho com sabor de morango, acompanhado de jelly de frutas que explode na boca. Refrescante e cheio de sabor!", "R$ 19,50"),
    new ProdutosCardapioEspecial("🍎", "MilkShake de Maçã do Amor", "Feito com o sabor clássico da maçã do amor das festas juninas, finalizado com chantilly, uma fatia de maçã do amor e granulados de morango. Doce na medida certa!", "R$ 26,75"),
    new ProdutosCardapioEspecial("🌿", "Matcha Bubble Tea", "Chá verde matcha premium combinado com leite cremoso e bolinhas de tapioca macias que estalam na boca. Refrescante e cheio de sabor autêntico.", "R$ 19,00"),
    new ProdutosCardapioEspecial("☁️", "MilkShake Viver nas Nuvens", "Milkshake cremoso de baunilha suave com toque de algodão doce, finalizado com chantilly fofinho. Uma experiência doce como uma nuvem!", "R$ 28,00"),
    new ProdutosCardapioEspecial("💚", "MilkShake de Pistache", "Milkshake com pasta de pistache, leite fresco e pedaços de pistache. Finalizado com chantilly e decoração especial no copo.", "R$ 25,50"),
    new ProdutosCardapioEspecial("🧚‍♀️", "MilkShake de Asa de Fada", "Milkshake de frutas vermelhas em tons rosa e roxo, finalizado com chantilly, asas e flores comestíveis. Mágico e delicado!", "R$ 29,95"),
    new ProdutosCardapioEspecial("🥭", "Bubble de Mango", "Chá tropical de manga com bolinhas de tapioca que estouram na boca. Refrescante e docinho!", "R$ 19,50")
];

let exibindoCardapio = false;

function mostrarCardapioEspecial() {
    const container_produtos = document.querySelector('#ProdutosEspeciais');

    if (exibindoCardapio) {
        // Oculta o conteúdo
        container_produtos.innerHTML = "";
    } else {
        // Gera e exibe os produtos especiais
        let html = `<div class="produto_especial_detalhe">`;
        ProdutosEspeciais.forEach(produtoEspecial => {
            html += produtoEspecial.gerarHTML_Cardapio_Especial();
        });
        html += `</div>`;
        container_produtos.innerHTML = html;
    }

    // Inverte o estado
    exibindoCardapio = !exibindoCardapio;
}

// Cardapio Normal
