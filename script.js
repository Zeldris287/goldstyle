const meuWhatsapp = "5591987654321";

const produtos = [
    { nome: "Camisa Ouro", preco: "89,90", imagem: "1.jpg", categoria: "masculino" },
    { nome: "Vestido Luxo", preco: "150,00", imagem: "2.jpg", categoria: "feminino" },
    { nome: "Sapato Social", preco: "220,00", imagem: "4.jpg", categoria: "calcados-masc" },
    { nome: "Salto Alto", preco: "180,00", imagem: "5.jpg", categoria: "calcados-fem" }
];

function carregarProdutos() {
    produtos.forEach(p => {
        const conteudoHTML = `
            <div class="card">
                <img src="${p.imagem}" onclick="abrirImagem('${p.imagem}')" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/160?text=Sem+Foto'">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco}</p>
                <a href="https://wa.me/${meuWhatsapp}?text=Quero o item: ${p.nome}" target="_blank" class="btn-whats">WHATSAPP</a>
            </div>
        `;

        const prateleira = document.getElementById(`lista-${p.categoria}`);
        if (prateleira) prateleira.innerHTML += conteudoHTML;
    });
}

// Funções para a imagem expandida
function abrirImagem(src) {
    document.getElementById("modalImagem").style.display = "flex";
    document.getElementById("imgExpandida").src = src;
}

function fecharImagem() {
    document.getElementById("modalImagem").style.display = "none";
}

window.onload = carregarProdutos;