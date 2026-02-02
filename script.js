const meuWhatsapp = "5591987654321"; // Coloque seu número aqui

const produtos = [
    // MASCULINO
    { nome: "Camisa Slim Ouro", preco: "89,90", imagem: "1.jpg", categoria: "masculino" },
    
    // FEMININO
    { nome: "Vestido Floral", preco: "150,00", imagem: "2.jpg", categoria: "feminino" },
    
    // INFANTIL
    { nome: "Conjunto Kids", preco: "65,00", imagem: "3.jpg", categoria: "infantil" },
    
    // CALÇADOS
    { nome: "Tênis Sport", preco: "199,00", imagem: "4.jpg", categoria: "calcados" },
    
    // ACESSÓRIOS
    { nome: "Bolsa Luxo", preco: "250,00", imagem: "2404.jpg", categoria: "acessorios" },
    
    // MAQUIAGEM
    { nome: "Kit Batom", preco: "45,00", imagem: "6.jpg", categoria: "maquiagem" }
];

function carregarProdutos() {
    produtos.forEach(p => {
        const conteudoHTML = `
            <div class="card">
                <img src="${p.imagem}" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/160?text=Sem+Foto'">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco}</p>
                <a href="https://wa.me/${meuWhatsapp}?text=Olá! Quero comprar: ${p.nome}" target="_blank" class="btn-whats">WHATSAPP</a>
            </div>
        `;

        // Ele procura o ID "lista-masculino", "lista-feminino", etc.
        const prateleira = document.getElementById(`lista-${p.categoria}`);
        if (prateleira) {
            prateleira.innerHTML += conteudoHTML;
        }
    });
}

// Isso garante que os produtos só carreguem depois que a página abrir
window.addEventListener('DOMContentLoaded', carregarProdutos);