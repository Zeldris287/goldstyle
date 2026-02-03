const meuwhatsapp = "5591987654321"; // Seu número real

const produtos = [
    // MASCULINO
    { nome: "Blusas malha peruana Boss ", preco: "65,00", imagem: "1.jpg", categoria: "masculino" },
    { nome: "Blusas malha peruana Lacoste", preco: "65,0", imagem: "2.jpg", categoria: "masculino" },
    { nome: "Blusas malha peruana Nike", preco: "65,00", imagem: "3.jpg", categoria: "masculino" },
    { nome: "Blusas malha peruana Lacoste", preco: "65,00", imagem: "4.jpg", categoria: "masculino" },
    { nome: "Blusas malha peruana Lacoste", preco: "65,00", imagem: "5.jpg", categoria: "masculino" },
    { nome: "Blusas malha peruana Boss", preco: "65,00", imagem: "6.jpg", categoria: "masculino" },
    { nome: "Bermuda Jeans Dionix", preco: "55,00", imagem: "7.jpg", categoria: "masculino" },
    { nome: "Bermuda Jeans Dionix", preco: "55,00", imagem: "8.jpg", categoria: "masculino" },
    { nome: "Bermuda Jeans Dionix", preco: "55,50", imagem: "9.jpg", categoria: "masculino" },
    { nome: "Bermuda Jeans Dionix", preco: "55,00", imagem: "10.jpg", categoria: "masculino" },
    { nome: "Bermuda Jeans Dionix", preco: "55,00", imagem: "11.jpg", categoria: "masculino" },
    { nome: "Bermuda Jeans Dionix", preco: "55,00", imagem: "12.jpg", categoria: "masculino" },
    { nome: "Bermuda Jeans Dionix", preco: "55,00", imagem: "13.jpg", categoria: "masculino" },
    { nome: "Bermuda Jeans Dionix", preco: "55,00", imagem: "14.jpg", categoria: "masculino" },
    { nome: "Calça Esporte fino Masculino", preco: "80,00", imagem: "15.jpg", categoria: "masculino" },
    { nome: "Calça Esporte fino Masculino", preco: "80,00", imagem: "16.jpg", categoria: "masculino" },
    { nome: "Calça Esporte fino Masculino", preco: "80,00", imagem: "17.jpg", categoria: "masculino" },
    { nome: "Calça Esporte fino Masculino ", preco: "80,00", imagem: "18.jpg", categoria: "masculino" },
    { nome: "Calça Esporte fino Masculino ", preco: "80,00", imagem: "19.jpg", categoria: "masculino" },
    { nome: "Calça Esporte fino Masculino ", preco: "80,00", imagem: "20.jpg", categoria: "masculino" },

    // FEMININO
    { nome: "Vestido Visculinho Estampado", preco: "70,00", imagem: "21.jpg", categoria: "feminino" },
    { nome: "Vestido Longo visculinho", preco: "70,00", imagem: "22.jpg", categoria: "feminino" },
    { nome: "Vestido Longo visculinho", preco: "70,00", imagem: "23.jpg", categoria: "feminino" },
    { nome: "Vestido Indiano Estampado", preco: "70,00", imagem: "24.jpg", categoria: "feminino" },
    { nome: "Blusa Microfibra Sem manga", preco: "35,00", imagem: "25.jpg", categoria: "feminino" },
    { nome: "Blusa Microfibra manga longa", preco: "35,00", imagem: "26.jpg", categoria: "feminino" },
    { nome: "Semi Cropped microfibra", preco: "35,00", imagem: "27.jpg", categoria: "feminino" },
    { nome: "Vestido Visculinho", preco: "70,00", imagem: "28.jpg", categoria: "feminino" },
    { nome: "Vestido Visculinho", preco: "70,00", imagem: "29.jpg", categoria: "feminino" },
    { nome: "Semi Cropped microfibra", preco: "35,00", imagem: "30.jpg", categoria: "feminino" },
    { nome: "Semi Cropped microfibra", preco: "35,00", imagem: "31.jpg", categoria: "feminino" },
    { nome: "Semi Cropped microfibra", preco: "35,00", imagem: "32.jpg", categoria: "feminino" },
    { nome: "Semi Cropped microfibra", preco: "35,00", imagem: "33.jpg", categoria: "feminino" },
    { nome: "Semi Cropped Manga Longa", preco: "35,00", imagem: "34.jpg", categoria: "feminino" },
    { nome: "Semi Cropped microfibra", preco: "35,00", imagem: "35.jpg", categoria: "feminino" },
    { nome: "Semi Cropped microfibra", preco: "35,00", imagem: "36.jpg", categoria: "feminino" },
    { nome: "Semi Cropped microfibra", preco: "35,00", imagem: "37.jpg", categoria: "feminino" },
    { nome: "Semi Cropped Regatinha", preco: "35,00", imagem: "38.jpg", categoria: "feminino" },
    { nome: "Semi Cropped Regatinha", preco: "35,00", imagem: "39.jpg", categoria: "feminino" },
    { nome: "Semi Cropped Manga Longa", preco: "35,00", imagem: "40.jpg", categoria: "feminino" },
    { nome: "Semi Cropped Manga Longa", preco: "35,00", imagem: "41.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "42.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "43.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "44.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "45.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "46.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "47.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "48.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "49.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "50.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "51.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "52.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "53.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "54.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "55.jpg", categoria: "feminino" },
    { nome: "Bodys Microfibra poliamida", preco: "37,00", imagem: "56.jpg", categoria: "feminino" },
    { nome: "CalÇa Alfaiataria P M G", preco: "65,00", imagem: "57.jpg", categoria: "feminino" },
    { nome: "CalÇa Alfaiataria P M G", preco: "65,00", imagem: "58.jpg", categoria: "feminino" },
    { nome: "CalÇa Alfaiataria P M G", preco: "65,00", imagem: "59.jpg", categoria: "feminino" },
    { nome: "CalÇa Alfaiataria P M G", preco: "65,00", imagem: "60.jpg", categoria: "feminino" },
    { nome: "CalÇa Alfaiataria P M G", preco: "65,00", imagem: "61.jpg", categoria: "feminino" },
    { nome: "Short Alfaiataria P M G", preco: "50,00", imagem: "62.jpg", categoria: "feminino" },
    { nome: "Short Alfaiataria P M G", preco: "50,00", imagem: "63.jpg", categoria: "feminino" },
    { nome: "Vestido Visculinho Estampado", preco: "70,00", imagem: "64.jpg", categoria: "feminino" },
    { nome: "Short Alfaiataria P M G", preco: "50,00", imagem: "65.jpg", categoria: "feminino" },
    { nome: "Conjunto Crep tamanho unico", preco: "50,00", imagem: "66.jpg", categoria: "feminino" },
    { nome: "Conjunto Crep tamanho unico", preco: "50,00", imagem: "67.jpg", categoria: "feminino" },
    { nome: "Conjunto Crep tamanho unico", preco: "50,00", imagem: "68.jpg", categoria: "feminino" },
    { nome: "Conjunto Crep tamanho unico", preco: "50,00", imagem: "69.jpg", categoria: "feminino" },
    { nome: "Conjunto Crep tamanho unico", preco: "50,00", imagem: "70.jpg", categoria: "feminino" },
    { nome: "Vestido Visculinho", preco: "70,00", imagem: "71.jpg", categoria: "feminino" },
    { nome: "Vestido Visculinho", preco: "70,00", imagem: "72.jpg", categoria: "feminino" },
    { nome: "Vestido Visculinho", preco: "70,00", imagem: "73.jpg", categoria: "feminino" },
    { nome: "Vestido Visculinho", preco: "70,00", imagem: "74.jpg", categoria: "feminino" },
    { nome: "Vestido Visculinho", preco: "70,00", imagem: "75.jpg", categoria: "feminino" },
    { nome: "Vestido Visculinho", preco: "70,00", imagem: "76.jpg", categoria: "feminino" },
    { nome: "Vestido Visculinho", preco: "70,00", imagem: "77.jpg", categoria: "feminino" },
    { nome: "Vestido Visculinho", preco: "70,00", imagem: "78.jpg", categoria: "feminino" },
    
    // INFANTIL
    { nome: "Conjunto Kids", preco: "00,00", imagem: "131.jpg", categoria: "infantil" },

    // CALÇADOS MASCULINOS
    { nome: "Tênis Masculino estiloso,confortavel", preco: "105,00", imagem: "82.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Masculino estiloso,confortavel", preco: "105,00", imagem: "83.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Masculino estiloso,confortavel", preco: "105,00", imagem: "84.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Masculino estiloso,confortavel", preco: "105,00", imagem: "85.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Masculino estiloso,confortavel", preco: "105,00", imagem: "86.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Masculino estiloso,confortavel", preco: "105,00", imagem: "87.jpg", categoria: "calcados-masc" },
    { nome: "Slide Grade Alto Velcro", preco: "75,00", imagem: "88.jpg", categoria: "calcados-masc" },
    { nome: "Tênis Masculino estiloso,confortavel", preco: "150,00", imagem: "89.jpg", categoria: "calcados-masc" },
    { nome: "Slide Grade Alto Velcro", preco: "75,00", imagem: "90.jpg", categoria: "calcados-masc" },
    { nome: "Slide Grade Alto Velcro", preco: "75,00", imagem: "91.jpg", categoria: "calcados-masc" },
    { nome: "Slide Grade Alto Velcro", preco: "75,00", imagem: "92.jpg", categoria: "calcados-masc" },
    { nome: "Slide Grade Alto Velcro", preco: "75,00", imagem: "93.jpg", categoria: "calcados-masc" },

    // CALÇADOS FEMININOS
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "94.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "95.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "96.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "97.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "98.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "99.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "100.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "101.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "102.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "103.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "104.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "105.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "106.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "107.jpg", categoria: "calcados-fem" },
    { nome: "PAPNEW", preco: "100,00", imagem: "108.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "109.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "110.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "111.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "112.jpg", categoria: "calcados-fem" },
    { nome: "PAPNEW", preco: "100,00", imagem: "113.jpg", categoria: "calcados-fem" },
    { nome: "PAPNEW", preco: "100,00", imagem: "114.jpg", categoria: "calcados-fem" },
    { nome: "PAPETE BAIXA 34 ao 39", preco: "120,00", imagem: "115.jpg", categoria: "calcados-fem" },
    { nome: "Tênis Feminino Linha Premium", preco: "110,00", imagem: "116.jpg", categoria: "calcados-fem" },
    { nome: "Tênis Feminino Linha Premium", preco: "120,00", imagem: "117.jpg", categoria: "calcados-fem" },
    { nome: "Tênis Feminino Linha Premium", preco: "120,00", imagem: "118.jpg", categoria: "calcados-fem" },
    { nome: "Tênis Feminino Linha Premium", preco: "120,00", imagem: "119.jpg", categoria: "calcados-fem" },
    { nome: "Tênis Feminino Linha Premium", preco: "120,00", imagem: "120.jpg", categoria: "calcados-fem" },
    { nome: "Tênis Feminino Linha Premium", preco: "120,00", imagem: "121.jpg", categoria: "calcados-fem" },
    { nome: "Tênis Feminino Linha Premium", preco: "120,00", imagem: "122.jpg", categoria: "calcados-fem" },
    { nome: "Tênis Feminino Linha Premium", preco: "120,00", imagem: "123.jpg", categoria: "calcados-fem" },
    { nome: "Tênis Feminino Linha Premium", preco: "120,00", imagem: "124.jpg", categoria: "calcados-fem" },
    { nome: "PAPNEW", preco: "100,00", imagem: "125.jpg", categoria: "calcados-fem" },
    { nome: "PAPNEW", preco: "100,00", imagem: "126.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "127.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "128.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "129.jpg", categoria: "calcados-fem" },
    { nome: "Salto Forrado 34 ao 39", preco: "130,00", imagem: "130.jpg", categoria: "calcados-fem" },
];

function carregarLoja() {
    const categorias = ["masculino", "feminino", "infantil", "calcados-masc", "calcados-fem"];
    
    categorias.forEach(cat => {
        const containerPai = document.getElementById(`container-${cat}`);
        if (!containerPai) return;
        containerPai.innerHTML = ""; 

        const produtosDaCat = produtos.filter(p => p.categoria === cat);
        
        // Divide em linhas de 20
        for (let i = 0; i < produtosDaCat.length; i += 20) {
            const grupo = produtosDaCat.slice(i, i + 20);
            const prateleira = document.createElement("div");
            prateleira.className = "rolagem-lateral";
            
            grupo.forEach(p => {
                prateleira.innerHTML += `
                    <div class="card">
                        <img src="${p.imagem}" onclick="abrirImagem('${p.imagem}')" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/120?text=Foto'">
                        <h3>${p.nome}</h3>
                        <p>R$ ${p.preco}</p>
                        <a href="https://wa.me/${meuwhatsapp}?text=Quero comprar: ${p.nome}" target="_blank" class="btn-whats">WHATSAPP</a>
                    </div>
                `;
            });
            containerPai.appendChild(prateleira);
        }
    });
}

function abrirImagem(src) {
    document.getElementById("modalImagem").style.display = "flex";
    document.getElementById("imgExpandida").src = src;
}

function fecharImagem() {
    document.getElementById("modalImagem").style.display = "none";
}

window.onload = carregarLoja;