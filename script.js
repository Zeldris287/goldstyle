const meuWhatsapp = "5591987654321"; // Coloque seu número real aqui

const produtos = [
    { nome: "Camisa Slim Ouro", preco: "89,90", imagem: "1.jpg", categoria: "masculino" },
    { nome: "Vestido Floral Luxo", preco: "150,00", imagem: "2.jpg", categoria: "feminino" },
    { nome: "Conjunto Kids Gold", preco: "65,00", imagem: "3.jpg", categoria: "infantil" },
    { nome: "Sapato Social Couro", preco: "220,00", imagem: "4.jpg", categoria: "calcados" },
    { nome: "Bolsa Luxo Premium", preco: "250,00", imagem: "2404.jpg", categoria: "acessorios" },
    { nome: "Kit Batom Matte", preco: "45,00", imagem: "6.jpg", categoria: "maquiagem" }
    { nome: "Camisa Slim Ouro", preco: "89,90", imagem: "7.jpg", categoria: "masculino" },
    { nome: "Camisa Slim Ouro", preco: "89,90", imagem: "8.jpg", categoria: "masculino" },

];

function carregarProdutos() {
    produtos.forEach(p => {
        const conteudoHTML = `
            <div class="card">
                <img src="${p.imagem}" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/160?text=Sem+Foto'">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco}</p>
                <a href="https://wa.me/${meuWhatsapp}?text=Olá! Gostaria de comprar o item: ${p.nome}" target="_blank" class="btn-whats">WHATSAPP</a>
            </div>
        `;

        // Aqui é onde a mágica acontece: ele busca o ID "lista-CATEGORIA"
        const prateleira = document.getElementById(`lista-${p.categoria}`);
        if (prateleira) {
            prateleira.innerHTML += conteudoHTML;
        }
    });
}

window.onload = carregarProdutos;