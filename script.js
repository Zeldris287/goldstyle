const meuWhatsapp = "5591900000000"; // COLOQUE SEU NÚMERO AQUI

const produtos = [
    // CAMISAS
    { nome: "Camisa Slim Fit", preco: "89,90", imagem: "1.jpg", categoria: "camisas" },
    { nome: "Camisa Polo Luxo", preco: "110,00", imagem: "2.jpg", categoria: "camisas" },
    
    // ACESSÓRIOS
    { nome: "Relógio Gold", preco: "250,00", imagem: "3.jpg", categoria: "acessorios" },
    { nome: "Cinto de Couro", preco: "45,00", imagem: "4.jpg", categoria: "acessorios" },
    
    // CALÇADOS
    { nome: "Tênis Sport", preco: "199,00", imagem: "5.jpg", categoria: "calcados" },
    { nome: "Sapato Social", preco: "220,00", imagem: "6.jpg", categoria: "calcados" }
];

// Função para renderizar
produtos.forEach(p => {
    const estrutura = `
        <div class="card">
            <img src="${p.imagem}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p>R$ ${p.preco}</p>
            <a href="https://wa.me/${meuWhatsapp}?text=Quero%20o%20item:%20${p.nome}" class="btn-whats">WHATSAPP</a>
        </div>
    `;

    if(p.categoria === "camisas") document.getElementById('lista-camisas').innerHTML += estrutura;
    if(p.categoria === "acessorios") document.getElementById('lista-acessorios').innerHTML += estrutura;
    if(p.categoria === "calcados") document.getElementById('lista-calcados').innerHTML += estrutura;
});