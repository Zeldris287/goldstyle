const meuWhatsapp = "5591987654321"; // Seu número real aqui

// LISTA DE PRODUTOS
// Para adicionar mais, copie uma linha e mude o nome, preço, imagem e categoria
const produtos = [
    { nome: "Camisa Rose Slim", preco: "89,90", imagem: "1.jpg", categoria: "masculino" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "4.jpg", categoria: "calcados-masc" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "5.jpg", categoria: "calcados-fem" },
    { nome: "Vestido Noiva", preco: "199,00", imagem: "2.jpg", categoria: "feminino" },
    { nome: "Camisa Rose Slim", preco: "89,90", imagem: "6.jpg", categoria: "masculino" },
    // Adicione novos itens aqui abaixo:
];

function carregarLoja() {
    produtos.forEach(p => {
        const itemHTML = `
            <div class="card">
                <img src="${p.imagem}" onclick="abrirImagem('${p.imagem}')" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/120?text=Foto'">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco}</p>
                <a href="https://wa.me/${meuWhatsapp}?text=Gostaria de saber mais sobre: ${p.nome}" target="_blank" class="btn-whats">WHATSAPP</a>
            </div>
        `;

        const prateleira = document.getElementById(`lista-${p.categoria}`);
        if (prateleira) {
            prateleira.innerHTML += itemHTML;
        }
    });
}

// Funções do Modal de Imagem
function abrirImagem(src) {
    document.getElementById("modalImagem").style.display = "flex";
    document.getElementById("imgExpandida").src = src;
}

function fecharImagem() {
    document.getElementById("modalImagem").style.display = "none";
}

window.onload = carregarLoja;