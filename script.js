// Altere para o seu número real
const meuWhatsapp = "5591900000000"; 

const produtos = [
    // CATEGORIA: CAMISAS
    { nome: "Camisa Slim Fit", preco: "89,90", imagem: "1.jpg", categoria: "camisas" },
    { nome: "Camisa Premium", preco: "115,00", imagem: "2.jpg", categoria: "camisas" },
    
    // CATEGORIA: ACESSÓRIOS
    { nome: "Bolsa Gold Luxo", preco: "250,00", imagem: "3.jpg", categoria: "acessorios" },
    { nome: "Relógio Elegance", preco: "180,00", imagem: "4.jpg", categoria: "acessorios" },
    
    // CATEGORIA: CALÇADOS
    { nome: "Tênis Sport X", preco: "199,00", imagem: "5.jpg", categoria: "calcados" },
    { nome: "Sapato Social", preco: "230,00", imagem: "6.jpg", categoria: "calcados" }
];

function mostrarProdutos() {
    produtos.forEach(p => {
        const itemHTML = `
            <div class="card">
                <img src="${p.imagem}" alt="${p.nome}">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco}</p>
                <a href="https://wa.me/${meuWhatsapp}?text=Olá! Tenho interesse no item: ${p.nome}" target="_blank" class="btn-whats">WHATSAPP</a>
            </div>
        `;

        // Coloca o item na seção certa baseada na categoria
        if(p.categoria === "camisas") document.getElementById('lista-camisas').innerHTML += itemHTML;
        if(p.categoria === "acessorios") document.getElementById('lista-acessorios').innerHTML += itemHTML;
        if(p.categoria === "calcados") document.getElementById('lista-calcados').innerHTML += itemHTML;
    });
}

// Inicia a vitrine
mostrarProdutos();