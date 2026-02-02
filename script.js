// CONFIGURAÇÃO: Coloque seu número aqui (DDI + DDD + Numero)
const meuWhatsapp = "5591900000000"; 

// LISTA DE PRODUTOS: Adicione quantos quiser aqui
const produtos = [
    { nome: "Bolsa Luxo Ouro", preco: "120,00", imagem: "1.jpg" },
    { nome: "Bolsa Executiva Black", preco: "199,00", imagem: "2.jpg" },
    { nome: "Bolsa Casual Blue", preco: "89,90", imagem: "3.jpg" },
    { nome: "Carteira Gold Edition", preco: "50,00", imagem: "4.jpg" },
    // Para colocar 100 itens, vá copiando a linha acima e mudando o nome e a foto
];

const vitrine = document.getElementById('vitrine');

// Função que desenha os produtos na tela
produtos.forEach(produto => {
    const card = `
        <div class="produto-card">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco}</p>
            <a href="https://wa.me/${meuWhatsapp}?text=Olá! Gostaria de encomendar o produto: ${produto.nome}" 
               target="_blank" class="btn-whatsapp">
               PEDIR WHATSAPP
            </a>
        </div>
    `;
    vitrine.innerHTML += card;
});