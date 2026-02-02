const meuWhatsapp = "5591987654321"; // Coloque seu número aqui

// LISTA DE PRODUTOS - Fácil de adicionar:
const produtos = [
    // Categorias: masculino, feminino, infantil, calcados-masc, calcados-fem
    { nome: "Camisa Rose", preco: "89,90", imagem: "1.jpg", categoria: "masculino" },
    { nome: "Vestido Noiva", preco: "199,00", imagem: "2.jpg", categoria: "feminino" },
    { nome: "Conjunto Kids", preco: "59,90", imagem: "3.jpg", categoria: "infantil" },
    { nome: "Tênis Sport", preco: "150,00", imagem: "4.jpg", categoria: "calcados-masc" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "5.jpg", categoria: "calcados-fem" },
    
    // Adicione novos produtos abaixo desta linha:
];

function carregarLoja() {
    produtos.forEach(p => {
        const item = `
            <div class="card">
                <img src="${p.imagem}" onclick="abrirImagem('${p.imagem}')" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/120?text=Foto'">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco}</p>
                <a href="https://wa.me/${meuWhatsapp}?text=Olá! Quero comprar o item: ${p.nome}" target="_blank" class="btn-whats">WHATSAPP</a>
            </div>
        `;

        const container = document.getElementById(`lista-${p.categoria}`);
        if (container) container.innerHTML += item;
    });
}

function abrirImagem(src) {
    document.getElementById("modalImagem").style.display = "flex";
    document.getElementById("imgExpandida").src = src;
}

function fecharImagem() {
    document.getElementById("modalImagem").style.display = "none";
}

window.onload = carregarLoja;