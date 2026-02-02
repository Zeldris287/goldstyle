const meuWhatsapp = "5591987654321"; // Seu número

const produtos = [
    // MASCULINO
    { nome: "Camisa Ouro Slim", preco: "89,90", imagem: "1.jpg", categoria: "masculino" },
    { nome: "Polo Premium", preco: "110,00", imagem: "2.jpg", categoria: "masculino" },

    // FEMININO
    { nome: "Vestido Floral", preco: "150,00", imagem: "3.jpg", categoria: "feminino" },

    // INFANTIL
    { nome: "Conjunto Kids", preco: "65,00", imagem: "4.jpg", categoria: "infantil" },

    // CALÇADOS MASCULINOS
    { nome: "Sapato Social", preco: "220,00", imagem: "5.jpg", categoria: "calcados-masc" },

    // CALÇADOS FEMININOS
    { nome: "Sandália Luxo", preco: "180,00", imagem: "6.jpg", categoria: "calcados-fem" }
];

function carregarProdutos() {
    produtos.forEach(p => {
        const itemHTML = `
            <div class="card">
                <img src="${p.imagem}" onclick="abrirImagem('${p.imagem}')" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/160?text=Sem+Foto'">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco}</p>
                <a href="https://wa.me/${meuWhatsapp}?text=Quero comprar: ${p.nome}" target="_blank" class="btn-whats">WHATSAPP</a>
            </div>
        `;

        const prateleira = document.getElementById(`lista-${p.categoria}`);
        if (prateleira) {
            prateleira.innerHTML += itemHTML;
        }
    });
}

function abrirImagem(src) {
    document.getElementById("modalImagem").style.display = "flex";
    document.getElementById("imgExpandida").src = src;
}

function fecharImagem() {
    document.getElementById("modalImagem").style.display = "none";
}

// Inicia a loja
window.onload = carregarProdutos;