// CONFIGURAÇÃO: Seu número de WhatsApp
const meuWhatsapp = "5591900000000"; 

const produtos = [
    // MASCULINO
    { nome: "Camisa Casual G", preco: "89,90", imagem: "1.jpg", categoria: "masculino" },
    
    // FEMININO
    { nome: "Vestido Verão", preco: "120,00", imagem: "2.jpg", categoria: "feminino" },
    
    // INFANTIL
    { nome: "Conjunto Kids", preco: "59,90", imagem: "3.jpg", categoria: "infantil" },
    
    // ACESSÓRIOS
    { nome: "Bolsa Luxo Gold", preco: "250,00", imagem: "2404.jpg", categoria: "acessorios" },
    
    // CALÇADOS
    { nome: "Tênis Sport", preco: "199,00", imagem: "4.jpg", categoria: "calcados" },
    
    // MAQUIAGEM
    { nome: "Batom Matte Red", preco: "35,00", imagem: "5.jpg", categoria: "maquiagem" }
];

function carregarVitrine() {
    produtos.forEach(p => {
        const itemHTML = `
            <div class="card">
                <img src="${p.imagem}" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/150?text=Gold+Style'">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco}</p>
                <a href="https://wa.me/${meuWhatsapp}?text=Olá! Tenho interesse no item: ${p.nome}" target="_blank" class="btn-whats">WHATSAPP</a>
            </div>
        `;

        const container = document.getElementById(`lista-${p.categoria}`);
        if (container) {
            container.innerHTML += itemHTML;
        }
    });
}

window.onload = carregarVitrine;