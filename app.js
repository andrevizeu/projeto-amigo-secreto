let listaAmigos = [];

function adicionarAmigo(){
    let entradaNome = document.getElementById("amigo");
    let amigo = entradaNome.value.trim();

    if(amigo === "") {
        alert('Por favor, insira um nome');
    } else if(listaAmigos.includes(amigo)) {
        alert('Esse nome já foi adicionado');
    } else {
        listaAmigos.push(amigo);
        atualizarListaAmigos();
        console.log(listaAmigos);
    }
    limparCampo();
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    listaAmigos.forEach(function(amigo){
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert('Não há amigos para sortear!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Amigo Sorteado: ' + `<li>${amigoSorteado}</li>`;
}

function limparCampo() {
    entradaNome = document.getElementById('amigo');
    entradaNome.value = "";
}

function reiniciarJogo() {
    listaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
}