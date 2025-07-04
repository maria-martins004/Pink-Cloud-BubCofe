class CardapioBase_Normal {
    constructor(img, produto, preco, descricao) {
        this.img = img;
        this.produto = produto;
        this.preco = preco;
        this.descricao = descricao;
    }

    gerarHTML() {
        return `
        <div class="cardapio_estilo"><img class="img_produto" src="${this.img}" alt="">
        <h3> ${this.produto}
        <br>
        <strong style="font-family: 'Poppins'; font-size: 1.6rem;">${this.preco}</strong>
        </h3>
        <p class="descricao_cardapio">${this.descricao}</p>
        </div><br><br>
        `;
    }
}

class TituloCardapioBase extends CardapioBase_Normal{
    constructor(titulo, img, produto, preco, descricao) {
        super(img, produto, preco, descricao); //aproveitando os "ingredientes"
        this.titulo = titulo;
    }

    gerarHTML() {
        return `
        <h2 class="titulo_cardapio">${this.titulo}</h2>
        <div class="cardapio_estilo"><img class="img_produto" src="${this.img}" alt="">
        <h3> ${this.produto}
        <br>
        <strong style="font-family: 'Poppins'; font-size: 1.6rem;">${this.preco}</strong>
        </h3>
        <p class="descricao_cardapio">${this.descricao}</p>
        </div><br><br>
        `;
    }
}

const produtosN = [
    new TituloCardapioBase("Cafeteria - Bebidas Quentes e Geladas", "./img_cafeteria/Cappuccino.jpg", "Capuccino", "R$ 19,00", "Clássico e cremoso! Nosso cappuccino combina café espresso, leite vaporizado e uma camada generosa de espuma de leite, onde desenhamos com carinho o detalhe que você escolher, deixando o momento ainda mais especial."),
    new CardapioBase_Normal("./img_cafeteria/Café com Leite Vegetal.png", "Café com <br> Leite Vegetal", "R$ 19,90", "Perfeito para quem prefere uma opção sem lactose! Preparamos nosso espresso com a sua escolha de leite vegetal (amêndoas, aveia ou soja), resultando numa bebida suave, cremosa e cheia de sabor."),
    new CardapioBase_Normal("./img_cafeteria/Café com Chantilly.png", "Café com <br> Chantilly", "R$ 18,30", "Para quem ama um toque a mais! Nosso café espresso vem coberto com uma camada generosa de chantilly, trazendo cremosidade e um sabor adocicado que faz toda a diferença."),
    new CardapioBase_Normal("./img_cafeteria/Afogatto.jpg", "Afogatto", "R$ 22,00", "Uma combinação irresistível! Uma bola de sorvete mergulhada em um café espresso quentinho. Cremoso, intenso e com aquele contraste de quente e frio que conquista no primeiro gole (ou colherada)!"),
    new CardapioBase_Normal("./img_cafeteria/Café Espresso.png", "Espresso", "R$ 20,15", "Intenso e encorpado! Nosso espresso é preparado com grãos selecionados e extraído na medida certa, para quem gosta de café forte e cheio de sabor."),
    new CardapioBase_Normal("./img_cafeteria/Latte Machiatto.png", "Latte <br> Macchiato", "R$ 21,60", "Leve e delicado! Uma combinação de leite vaporizado com um toque de espresso, criando camadas visuais e um sabor suave com final marcante."),
    new CardapioBase_Normal("./img_cafeteria/Caramel Macchiato.png", "Caramel <br> Macchiato", "R$ 21,90", "Cremoso e adocicado! Leite vaporizado e espresso se encontram com uma generosa calda de caramelo, trazendo equilíbrio entre o café e a doçura."),
    new CardapioBase_Normal("./img_cafeteria/Chocolate Quente Cremoso.png", "Chocolate <br> Quente <br> Cremoso", "R$ 18,50", "Puro aconchego! Chocolate quente bem cremoso, coberto com chantilly e um toque de granulado para deixar tudo ainda mais gostoso."),
    new TituloCardapioBase("MilkShakes", "./img_milkshake/Milkshake de Morango.jpg", "MilkShake <br> de Morango", "R$ 17,50", "Clássico e irresistível! Feito com sorvete cremoso e calda de morango, batido até ficar na textura perfeita, finalizado com chantilly e um morango decorativo para apreciar."),
    new CardapioBase_Normal("./img_milkshake/Milkshake de Chocolate.jpg", "MilkShake <br> de Chocolate", "R$ 18,25", "Cremoso e marcante! Feito com sorvete de chocolate, calda especial e finalizado com chantilly e um toque extra de calda e granulado por cima."),
    new CardapioBase_Normal("./img_milkshake/Milkshake de Café.jpg", "MilkShake <br> de Café", "R$ 18,75", "Refrescante e cheio de sabor! Sorvete cremoso batido com café, trazendo o equilíbrio perfeito entre o doce e o toque marcante do espresso. Finalizado com chantilly."),
    new CardapioBase_Normal("./img_milkshake/Milkshake de Baunilha.png", "MilkShake<br> de Baunilha", "R$ 18,00", "Suave e perfumado! Feito com sorvete de baunilha, batido até a textura perfeita, finalizado com chantilly e uma pitada de canela por cima para aquele toque especial."),
    new CardapioBase_Normal("./img_milkshake/Milkshake de Paçoca.png", "MilkShake<br> de Paçoca", "R$ 17,20", "Doce e crocante! Feito com sorvete cremoso e pedaços de paçoca, batido até ficar na textura perfeita e finalizado com chantilly e farofinha de paçoca por cima."),
    new CardapioBase_Normal("./img_milkshake/Milkshake de Banana com canela.png", "MilkShake<br> de Banana <br> com Canela", "R$ 17,30", "Leve e aromático! Banana batida com sorvete cremoso, finalizado com chantilly, uma pitada de canela e um pedaço de banana para aquele toque especial de sabor."),
    new CardapioBase_Normal("./img_milkshake/Milkshake de Banana com canela.png", "MilkShake<br> de Banana <br> com Canela", "R$ 17,30", "Leve e aromático! Banana batida com sorvete cremoso, finalizado com chantilly, uma pitada de canela e um pedaço de banana para aquele toque especial de sabor."),
    new CardapioBase_Normal("./img_milkshake/Milkshake de Cookie.png", "MilkShake<br> de Cookies", "R$ 19,00", "Cremoso e crocante! Feito com sorvete, pedaços de cookie e calda de chocolate, batido até a textura perfeita, finalizado com chantilly, farelinhos de cookie por cima e um cookie no copo para completar."),
    new TituloCardapioBase("Bubble Teas", "./img_bubble_tea/Uva com Tapioca.png", "Bubble de <br> Uva com <br>Tapioca", "R$ 16,25", "Refrescante e divertido! Chá gelado de uva combinado com bolinhas de tapioca macias, proporcionando uma experiência única e saborosa a cada gole."),
    new CardapioBase_Normal("./img_bubble_tea/Brown Sugar Milk Tea.png", "Bubble de <br> Brown Sugar <br>Milk Tea", "R$ 17,50", "Doce e cremoso! Chá com leite misturado à deliciosa calda de açúcar mascavo, criando um sabor caramelizado e irresistível, com bolinhas de tapioca macias para completar."),
    new CardapioBase_Normal("./img_bubble_tea/Bubble de Chá Verde com Lichia.png", "Bubble de <br> Chá Verde <br> com Lichia", "R$ 17,75", "Refrescante e delicado! Chá verde gelado combinado com sabor suave de lichia, bolinhas de tapioca macias e pedaços de lichia fresquinha por cima, para um toque especial."),
    new CardapioBase_Normal("./img_bubble_tea/Bubble de Chá de Pêssego.png", "Bubble de<br> Pessêgo", "R$ 16,00", "Doce e refrescante! Chá gelado com sabor natural de pêssego, combinado com bolinhas de tapioca macias, garantindo um sabor suave e delicioso a cada gole."),
    new CardapioBase_Normal("./img_bubble_tea/Bubble de Chá de Hibisco com Frutas Vermelha.png", "Bubble de<br> Hibiscos e <br>Frutas <br>Vermelhas", "R$ 17,90", "Vibrante e aromático! Chá de hibiscos refrescante combinado com frutas vermelhas suculentas e bolinhas de tapioca macias, criando uma explosão de sabores a cada gole.")
];

let exibirCardapio = false;

function mostrarCardapio() {
    const container_produtoNormal = document.querySelector('#ProdutosNormais');

    if (exibirCardapio) {
        container_produtoNormal.innerHTML = "";
    } else {
        let html = `<div class="produto_detalhe">`;
        produtosN.forEach(produtoN => {
            html +=produtoN.gerarHTML();
        });
        html += `</div>`;
        container_produtoNormal.innerHTML = html;
    }

    exibirCardapio = !exibirCardapio;
}


