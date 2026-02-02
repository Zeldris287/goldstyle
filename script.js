const meuWhatsapp = "5591985477610"; 

const produtos = [
    // --- ACESSÓRIOS ---
    { nome: "Relógio Gold Lux", preco: "250,00", imagem: "1.jpg", categoria: "Acessórios" },
    { nome: "Corrente 18k", preco: "150,00", imagem: "2.jpg", categoria: "Acessórios" },
    { nome: "Relógio Gold Lux", preco: "250,00", imagem: "3.jpg", categoria: "Acessórios" },
    // --- CAMISAS ---
    { nome: "Camisa Black Gold", preco: "89,90", imagem: "4.jpg", categoria: "Camisas" },
    { nome: "Camisa White Style", preco: "89,90", imagem: "5.jpg", categoria: "Camisas" },

    // --- CALÇADOS ---
    { nome: "Tênis Gold Run", preco: "299,00", imagem: "6.jpg", categoria: "Calçados" },
];

const container = document.getElementById('vitrine-automatica');

function carregarVitrine() {
    // 1. Descobrimos quais categorias existem na lista
    const categorias = [...new Set(produtos.map(p => p.categoria))];

    // 2. Para cada categoria, criamos uma sessão
    categorias.forEach(cat => {
        // Cria o título da categoria
        container.innerHTML += `<h2 class="titulo-categoria">${cat}</h2>`;
        
        // Cria um espaço (grid) para os produtos dessa categoria
        const gridId = `grid-${cat.replace(/\s/g, '')}`;
        container.innerHTML += `<div id="${gridId}" class="grid-produtos"></div>`;

        // 3. Filtra os produtos que pertencem a essa categoria e coloca no grid
        const gridSub = document.getElementById(gridId);
        const produtosFiltrados = produtos.filter(p => p.categoria === cat);

        produtosFiltrados.forEach(prod => {
            gridSub.innerHTML += `
                <div class="produto-card">
                    <img src="${prod.imagem}" alt="${prod.nome}">
                    <h3>${prod.nome}</h3>
                    <p>R$ ${prod.preco}</p>
                    <a href="https://wa.me/${meuWhatsapp}?text=Olá Gold Style! Tenho interesse no ${prod.nome}" class="btn-whatsapp" target="_blank">
                        Comprar agora
                    </a>
                </div>
            `;
        });
    });
}

carregarVitrine();