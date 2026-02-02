const meuWhatsapp = "5591981507858"; //5591981507858

const produtos = [
    { nome: "Camisa Slim Ouro", preco: "89,90", imagem: "1.jpg", categoria: "masculino" },
    { nome: "Vestido Floral Luxo", preco: "150,00", imagem: "2.jpg", categoria: "feminino" },
    { nome: "Conjunto Kids Gold", preco: "65,00", imagem: "3.jpg", categoria: "infantil" },
    { nome: "Sapato Social Couro", preco: "220,00", imagem: "4.jpg", categoria: "calcados" },
    { nome: "Bolsa Luxo Premium", preco: "2404.jpg", imagem: "2404.jpg", categoria: "acessorios" },
    { nome: "Kit Batom Matte", preco: "45,00", imagem: "6.jpg", categoria: "maquiagem" }
];

function carregarProdutos() {
    console.log("Carregando produtos..."); // Para teste
    produtos.forEach(p => {
        const conteudoHTML = `
            <div class="card">
                <img src="${p.imagem}" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/160?text=Sem+Foto'">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco}</p>
                <a href="https://wa.me/${meuWhatsapp}?text=Olá! Quero o item: ${p.nome}" target="_blank" class="btn-whats">WHATSAPP</a>
            </div>
        `;

        const prateleira = document.getElementById(`lista-${p.categoria}`);
        if (prateleira) {
            prateleira.innerHTML += conteudoHTML;
        }
    });
}

// SEGURANÇA: Só roda quando a página inteira carregar
window.onload = carregarProdutos;