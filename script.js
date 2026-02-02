// Substitua pelo seu número (DDI + DDD + Número)
const meuWhatsapp = "5591900000000"; 

const produtos = [
    // CAMISAS
    { nome: "Camisa Slim Ouro", preco: "89,90", imagem: "1.jpg", categoria: "camisas" },
    { nome: "Camisa Polo Luxo", preco: "115,00", imagem: "2.jpg", categoria: "camisas" },
    
    // ACESSÓRIOS
    { nome: "Bolsa Gold Shine", preco: "250,00", imagem: "3.jpg", categoria: "acessorios" },
    { nome: "Relógio Elegance", preco: "180,00", imagem: "4.jpg", categoria: "acessorios" },
    
    // CALÇADOS
    { nome: "Tênis Sport Gold", preco: "199,00", imagem: "5.jpg", categoria: "calcados" },
    { nome: "Sapato Social", preco: "220,00", imagem: "6.jpg", categoria: "calcados" },

    // INFANTIL
    { nome: "Conjunto Kids Style", preco: "75,00", imagem: "7.jpg", categoria: "infantil" },
    { nome: "Tênis Infantil Confort", preco: "95,00", imagem: "8.jpg", categoria: "infantil" }
];

function carregarLoja() {
    produtos.forEach(p => {
        const itemHTML = `
            <div class="card">
                <img src="${p.imagem}" alt="${p.nome}">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco}</p>
                <a href="https://wa.me/${meuWhatsapp}?text=Gostei desse: ${p.nome}" target="_blank" class="btn-whats">
                    WHATSAPP
                </a>
            </div>
        `;

        // Busca a div da categoria correta
        const lista = document.getElementById(`cat-${p.categoria}`);
        if (lista) {
            lista.innerHTML += itemHTML;
        }
    });
}

// Inicializa a vitrine
carregarLoja();