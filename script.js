const meuWhatsapp = "5591987654321"; // Seu número real aqui

// LISTA DE PRODUTOS
// Para adicionar mais, copie uma linha e mude o nome, preço, imagem e categoria
const produtos = [
    { nome: "Camisa Rose Slim", preco: "89,90", imagem: "14.jpg", categoria: "masculino" },
    { nome: "Tênis Masculino estiloso,confortável", preco: "105,00", imagem: "1.jpg", categoria: "calcados-masc" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "13.jpg", categoria: "calcados-fem" },
    { nome: "Vestido Noiva", preco: "199,00", imagem: "15.jpg", categoria: "feminino" },
    { nome: "Camisa Rose Slim", preco: "89,90", imagem: "16.jpg", categoria: "masculino" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "2.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "3.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "4.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "5.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "6.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "7.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "8.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "9.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "10.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "11.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Runner", preco: "150,00", imagem: "12.jpg", categoria: "calcados-masc" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "17.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "18.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "19.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "20.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "21.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "22.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "23.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "24.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "25.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "26.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "27.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "28.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "29.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "30.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "31.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "32.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "33.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "34.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "35.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "36.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "37.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "38.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "39.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "40.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "41.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "42.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "43.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "44.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "45.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "46.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "47.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "48.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "49.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "50.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "51.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "52.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "53.jpg", categoria: "calcados-fem" },
    { nome: "Sandália Rosé", preco: "120,00", imagem: "54.jpg", categoria: "calcados-fem" },

    // Adi{ nome: "Tênis Runner", preco: "150,00", imagem: "4.jpg", categoria: "calcados-masc" },cione novos itens aqui abaixo:
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